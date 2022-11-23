import styled from "styled-components";

export const CardStyle = styled.div`
 box-shadow: 0px 13px 19px rgba(0,0,0,0.7);
 padding: 0;
 display: flex;
 border-radius: 0px;

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

export const Title = styled.h3`
font-family: 'Martel' ,serif;
color: #252B42;
`;

export const Text = styled.p`
font-family: Open Sans;
color: #737373;
`;
