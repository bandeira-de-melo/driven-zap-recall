import { useState } from "react";
import styled from "styled-components";
import cards from "../cards";
import CardPergunta from "./CardPergunta";

import imgSetaPlay from "../assets/img/seta_play.png"
import imgCerto from "../assets/img/icone_certo.png"
import imgQuase from "../assets/img/icone_quase.png"
import imgErro  from "../assets/img/icone_erro.png"
const listaIcones = [imgErro, imgQuase , imgCerto]



export default function Cards(){
    const [listaCards, setListaCards] = useState(cards)
    const [cardAberto, setCardAberto] = useState({})
    const [icones, setIcones] = useState(listaIcones)
    const [quantidadeCards, setQuantidadeCars] = useState(0)
   
    

    function mostrarPergunta(id){
        const openCard = listaCards[id]
        const novoCardAberto = {question: openCard.question, answer: openCard.answer}
        setCardAberto(novoCardAberto)
        
    }

    function fecharCard(index, i, valorbtn){
        console.log(valorbtn)
        const novaListaCards = [...listaCards]
        const cardFechado = novaListaCards[index]
        switch(valorbtn){
            case "x":
            cardFechado.question = "x";
            break;
            case "y":
            cardFechado.question = "y";
            break;
            case "z":
            cardFechado.question = "z";
            break;
        }
        setListaCards(novaListaCards)
    }
    
    function aparenciaCard(card, id){
        if(card.question === "x"){
            return (<img src={icones[0]} alt="" />)
        } else if(card.question === "y") {
            return (<img src={icones[1]} alt="" />)
        } else if (card.question === "z"){
            return (<img src={icones[2]} alt="" />)
        } else {
            return (<img src={imgSetaPlay} alt="seta play" onClick={()=>mostrarPergunta(id)}/>)
        }
    }


    return (
        <div>
           {listaCards.map((card, id) => {       
            return (
                <>
                {cardAberto.question === card.question? 
                <CardPergunta 
                key={card.answer}
                perguntaCard={cardAberto.question} 
                respostaCard={cardAberto.answer} 
                fecharCard={fecharCard}
                id={id}
                /> 
                : 
                <StyledCard respondido={card.question} key={id}> 
                    <p>Pergunta {id + 1}</p> 
                    {aparenciaCard(card, id)}
                        
     
                </StyledCard>}
                </>        
            )
            })}
        </div> 
    )

}

const StyledCard = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => {switch(props.respondido){
            case "x":
                return "#FF3030";
            case "y":
                return "#FF922E";
            case "z":
                return "#2FBE34";
            default:
                return "#333333"
            
  }}};
  text-decoration: ${props => {switch(props.respondido){
            case "x":
                return "line-through";
            case "y":
                return "line-through";
            case "z":
                return "line-through";
            default:
                return "#333333"
            
  }}};
}
` 
