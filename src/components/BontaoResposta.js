import styled from "styled-components"
export default function BotaoResposta({texto,fecharCard,id, i, valorbtn}) {
    
    return (
            <StyledBotaoResposta key={texto} onClick={()=>fecharCard(id, i, valorbtn)}>
                {texto}
            </StyledBotaoResposta>
    )
}



const StyledBotaoResposta = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: blue;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
  
`