import styled from "styled-components";

export default function CardPergunta({perguntaCard, respostaCard}){
    return(
        <StyledCardPergunta>
            <p>{perguntaCard}</p><ion-icon name="play-outline"></ion-icon>
        </StyledCardPergunta>
    )
}


const StyledCardPergunta = styled.div`
width: 300px;
height: 131px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: flex-start;
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