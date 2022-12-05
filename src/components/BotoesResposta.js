import styled from "styled-components";
import BotaoResposta from "./BontaoResposta";
const arrayTextoBotoes = ["Não lembrei","Quase não lembrei", "Zap!"]

export default function BotoesResposta({fecharCard,index}) {
    return(
        <StyledContainerBotoes>
            {arrayTextoBotoes.map((texto, i) => {
            return(
                <BotaoResposta fecharCard={fecharCard} key={i} index={index} texto={texto}>
                    
                </BotaoResposta>
            ) 
        })}
        </StyledContainerBotoes>
    )
}

const StyledContainerBotoes = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 8px;

`

