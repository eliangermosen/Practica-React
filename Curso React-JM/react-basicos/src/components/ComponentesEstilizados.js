//https://styled-components.com/
//npm install --save styled-components
//esta libreria utiliza la filosofia single file component de VUEJS template: codigo html - script: codigo vue - style: codigo css

import React from "react";
// esto deberia importarse en el index.js
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){

    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    `;

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${props => props.color};
        color: ${({color}) => color};
        color: ${({color}) => color || "#000"};
        background-color: ${mainColor};
        transition: ${setTransitionTime("1s")};
        animation: ${fadeIn} 5s ease-out;

        /*${({isButton}) => isButton && 
            css`
             margin: auto;
             max-width: 50%;
             border-radious: 0.25rem;
             cursor: pointer;
        `}*/

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;

    const light = {
        color: "#222",
        bgColor: "#DDD"
    };

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    };

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme})=> theme.color};
        background-color: ${({theme})=> theme.bgColor};
    `;

    //agrego por parametros de quien heredara
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2{
            padding: 2rem;
            background-color: #fff;
            color: #61dafd;
            text-transform: uppercase;
        }
    `;

    return(
        <>
            <GlobalStyle/>
            <h2>Styled-Components</h2>
            <MyH3>Hola soy un h3 estilizado con Styled-Components</MyH3>
            <MyH3 color="#61dafd">
                Hola soy un h3 estilizado con Styled-Components
            </MyH3>
            <MyH3 isButton>soy un h3 estilizado como boton</MyH3>
            <ThemeProvider theme={light}>
                <Box>
                    Soy una Caja Light
                </Box>
                <BoxRounded>
                    Soy una Caja redondeada lLightight
                </BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>
                    Soy una Caja Dark
                </Box>
                <BoxRounded>
                    Soy una Caja redondeada Dark
                </BoxRounded>
            </ThemeProvider>
        </>
    )
}