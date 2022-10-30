import styled from "styled-components";

export const CardStyle = styled.div`
 box-shadow: 0px 13px 19px rgba(0,0,0,0.7);
 padding: 0;

 .box{
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: top left;
    border-radius: 0px;
    margin-top: 20px;
 }
 .card{
    border-radius: 0rem;
 }
`;

export const Title = styled.div`
font-family: Martel;
`;

export const Text = styled.p`
font-family: Open sans-serif;
color: #737373;
`;
