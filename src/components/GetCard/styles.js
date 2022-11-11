import styled from 'styled-components';


export const GetIn = styled.div`
    background-color: ${(props) => props.backgroundColor};

    .card-text{
        font-size: 14px;
    }
    .title1{
        margin-top: 15px;
    }
    .btn-primary{
        font-family: Open Sans;
        font-weight: 700;
        background-color: transparent;
        color:#295C7A;
        border-color: #295C7A;
    }
    .btn-primary2{
        font-family: Open Sans;
        font-weight: 700;
        background-color: transparent;
        color:white;
        border-color: white;
    }

`;

export const Email = styled.h6`
    font-family: 'Open Sans', sans-serif;
    font-weight: revert;
`;

export const Title1 = styled.h5`
    color: black;
    font-family: Open-Sans;
`;

export const Title2 = styled.h5`
    font-family: Martel;
    font-size: 16px;
`;