import styled from "styled-components";
import BotaoResposta from "./BontaoResposta";
const arrayTextoBotoes = ["Não lembrei","Quase não lembrei", "Zap!"]
const valorBotao = ["x","y","z"]
export default function BotoesResposta({fecharCard,id}) {
    return(
        <StyledContainerBotoes>
            {arrayTextoBotoes.map((texto, i) => {
            return(
                <BotaoResposta fecharCard={fecharCard} key={i} id={id} texto={texto} i={i} valorbtn={valorBotao[i]} />
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

