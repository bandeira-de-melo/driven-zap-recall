import { useState } from "react";
import styled from "styled-components";
import cards from "../cards";
import CardPergunta from "./CardPergunta";

export default function Cards(){
    const [listaCards, setListaCards] = useState(cards)
    const [cardAberto, setCardAberto] = useState({})

    function mostrarPergunta(i){
        const openCard = listaCards[i]
        const novoCardAberto = {question: openCard.question, answer: openCard.answer}
        setCardAberto(novoCardAberto)
        
    }

    return (
        <div>
           {listaCards.map((card, index) => {
            return (
                <>
                {cardAberto.question === card.question? <CardPergunta perguntaCard={cardAberto.question} respostaCard={cardAberto.answer} /> : <StyledCard ><p>Pergunta {index + 1}</p> <div onClick={()=> mostrarPergunta(index)} key={index}><ion-icon name="play-outline"></ion-icon></div></StyledCard>}
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
  color: #333333;
}
` 
