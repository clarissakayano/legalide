import styled, { css } from "styled-components";

export const Container = styled.section`
display: flex;
position: absolute;
backdrop-filter: blur(3px);
width: 100%;
height: 100%;
top: 0;
left: 0;
right:0;
bottom:0;
z-index:1;
align-items: center;
justify-content: center;

background: #252b4200;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,43,66,1) 40%, rgba(0,212,255,1) 100%);

opacity: 0;
pointer-events: none;
transform: translateY(50px);

transition: .5s;


svg{
    position: absolute;
    top:1rem;
    right:1rem;
    transform: rotate(45deg);
    transition: .7s;

}
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: .7s;
}

${({isVisible}) => isVisible && css`
 opacity:1;
 pointer-events: auto;
 transform: translateY(0px) ;

 svg {
    transform: rotate(0deg);
 }
 nav{
    transform: scale(1);
 }
`}

`;