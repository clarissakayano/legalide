import './styles';
import {  BgColor,Text } from './styles';
import face from '../../assets/face.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';

const Footer = () => (
    <BgColor className="container mt-3 mb-4">
        <div className="row text row-cols-1 row-cols-sm-2 no-gutters">
            <div className="col">
                <Text className="px-3">Made With Love By Figmaland All Right Reserved </Text>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className='d-flex'>
                    <div className="me-2">
                        <img src={face} alt="facebook"/>
                    </div>
                    <div  className="me-2">
                        <img src={instagram} alt="instagram" />
                    </div>
                    <div className="me-2">
                        <img src={youtube} alt="youtube" />
                    </div>
                    <div  className="me-2">
                        <img src={twitter} alt="twitter"/>
                    </div>
                </div>
            </div>
        </div>
    </BgColor>
);
export default Footer;