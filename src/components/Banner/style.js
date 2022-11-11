import styled from 'styled-components';
import bannerBackground from '../../assets/baner-background.png';

export const BannerContainer = styled.section`
    background-image: url(${bannerBackground});
    background-repeat: no-repeat;
    background-size: cover;

    .btn1 {
      padding: 10px 36px;
      background: transparent;
      border-radius: 37px;
      border-color: white;
      color: #FFFFFF;
      font-size: 14px;
    }

    .btn1:hover, .btn2:hover{
      background-color: #D0A144;
    }

.btn2 {
    padding: 10px 36px;
    border-radius: 37px;
    background: none;
    border-color: white;
    color: #FFFFFF;
    font-size: 14px;
}

  &:hover{
    background-color:#D0A144;
  }

/* unvisited link */
a:link {
    color: #FFFF;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #FFFF;
  }

  /* mouse over link */
  a:hover {
  }

  /* selected link */
  a:active {
    color:#252b42;
  }

  #woman{
    width: 32rem;
  }

@media (max-width:575px){
  .img-sm{
    margin-top: 3rem;
    max-width: 19rem;
  }
}
`;

export const Nav = styled.nav`
  text-decoration: none;
  font-family: Open Sans;

   .nav-item{
     margin: 0 15px;
    }

    .nav-link {
      text-decoration: none;
    }
    ul{
      display: flex;
      justify-content: center;
      list-style: none;
    }
    `;
export const MobileMenu = styled.div`
  font-family: Open Sans;
  font-size: 25px;
    li{
      display: flex;
      justify-content: center;
      list-style: none;
    }
    .bg-menu{
      background-color:rgba(37, 43, 66, 1);
    }
`;

export const Log = styled.h3`
    color: white;
    font-family: Martel;
    font-size: 24px;
    align-items: flex-start;
`;


export const Title = styled.h1`
    font-size: 58px;
    color: white;
   font-family: Martel;
`;

export const Sub = styled.h4`
    font-family: 'Montserrat', sans-serif;
    color: white;
    size: 20px;

`;

export const ButtonMain = styled.button`
size: 10px ;
`;

export const ContainerMobile = styled.div`
background-color: #252B42;

`;