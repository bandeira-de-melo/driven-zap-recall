import styled from "styled-components";
import  Card  from "./components/Card";
import LogoContainer from "./components/LogoContainer";

import cards from "./cards";

export default function App() {
  
  return (
    <StyledApp>
      <LogoContainer/>
      <Card cards={cards}/>
    </StyledApp>
  );
}


const StyledApp = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`