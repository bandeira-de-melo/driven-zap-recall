import { useState } from "react";
import styled from "styled-components";
import imgSetaVirar from "../assets/img/seta_virar.png"
import BotaoResposta from "./BotaoResposta";
const arrayTextoBotoes = ["Não lembrei","Quase não lembrei", "Zap!"]

export default function CardPergunta({perguntaCard, respostaCard, fecharCard, index}){
    const [conteudoCard, setConteudoCard] = useState(perguntaCard)
    
    function mostraResposta(){
        setConteudoCard(respostaCard)
    }


    return(
        <StyledCardPergunta>
            {conteudoCard === perguntaCard? 
            <><p>{conteudoCard}</p><img src={imgSetaVirar} alt="seta virar" onClick={mostraResposta}/></> 
            : 
            <><p>{conteudoCard}</p> <BotaoResposta textosBotoes={arrayTextoBotoes} fecharCard={fecharCard} index={index}/></>}
        </StyledCardPergunta>
    )
}


const StyledCardPergunta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`