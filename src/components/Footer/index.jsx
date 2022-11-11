import './styles';
import {  BgColor,Text } from './styles';
import face from '../../assets/face.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';

const Footer = () => (
    <BgColor className="container mt-3 mb-4 mb-md-2">
        <div className="row text row-cols-1 row-cols-sm-2 no-gutters">
            <div className="col">
                <Text className="px-3">Made With Love By Figmaland All Right Reserved </Text>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className='d-flex'>
                    <div className="me-2">
                       <a href="https://www.facebook.com/" target="blank"><img src={face} alt="facebook"/></a>
                    </div>
                    <div  className="me-2">
                    <a href="https://www.instagram.com/" target="blank"><img src={instagram} alt="instagram" /></a>
                    </div>
                    <div className="me-2">
                        <a  href="https://www.youtube.com/" target="blank"><img src={youtube} alt="youtube" /></a>
                    </div>
                    <div  className="me-2">
                        <a href="https://twitter.com/i/flow/login" target="blank"><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>
            </div>
        </div>
    </BgColor>
);
export default Footer;