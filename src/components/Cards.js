import { useState } from "react";
import styled from "styled-components";
import cards from "../cards";
import CardPergunta from "./CardPergunta";

import imgSetaPlay from "../assets/img/seta_play.png"
import imgCerto from "../assets/img/icone_certo.png"
import imgQuase from "../assets/img/icone_quase.png"
import imgErro  from "../assets/img/icone_erro.png"
const listaIcones = [imgSetaPlay, imgCerto, imgQuase, imgErro]

export default function Cards(){
    const [listaCards, setListaCards] = useState(cards)
    const [cardAberto, setCardAberto] = useState({})
    const [cor, setCor] = useState("#000")
    const [icones, setIcones] = useState(listaIcones)
    

    function mostrarPergunta(i){
        const openCard = listaCards[i]
        const novoCardAberto = {question: openCard.question, answer: openCard.answer}
        setCardAberto(novoCardAberto)
        
    }

    function fecharCard(i){
        const novaListaCards = [...listaCards]
        const cardFechado = novaListaCards[i]
        cardFechado.question = "x"
        setListaCards(novaListaCards)
    }

    return (
        <div>
           {listaCards.map((card, index) => {
            return (
                <>
                {cardAberto.question === card.question? 
                <CardPergunta 
                key={index}
                perguntaCard={cardAberto.question} 
                respostaCard={cardAberto.answer} 
                fecharCard={fecharCard}
                index={index}
                /> 
                : 
                <StyledCard respondido={card.question} key={index}> 
                    <p>Pergunta {index + 1}</p> 
                    {card.question !== "x"? 
                        <img src={icones[0]} alt="seta play" onClick={()=>mostrarPergunta(index)}/>
                        :
                        <img src={icones[3]} alt="icone erro" />
                    }  
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
  color: ${props => props.respondido === "x"? "red": "#000"};
  text-decoration: none;
}
` 
