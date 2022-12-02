import styled from "styled-components"
import Logo from "../assets/img/logo.png"

export default function LogoContainer(){
    return (
        <StyledLogoContainer>
            <StyledLogo src={Logo} />
            <StyledTitle>ZapRecall</StyledTitle>
        </StyledLogoContainer>
    )
}


export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`
export const StyledLogo = styled.img`
    width: 52px;
`
export const StyledTitle = styled.h1`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
`