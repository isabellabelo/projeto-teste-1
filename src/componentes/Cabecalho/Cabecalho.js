import React from "react";
import Icones from "./Icones";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const CabecalhoContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`
function Cabecalho(){
    return(
        <CabecalhoContainer>           
            <Logo/>
            <Menu/>
            <Icones/>
        </CabecalhoContainer> 
    );
}
export default Cabecalho;