import MainTitle from '../MainTitle';
import './styles';
import {ContainerGet} from './styles';
import GetCard from "../GetCard";
import tel from '../../assets/tel.png';
import map from "../../assets/map.png";
import arrow from "../../assets/arrow.png";

const GetInTouch =() => (
    <ContainerGet className="d-flex flex-column"  id="Contact">
        <MainTitle className="text-color"
                title="Get In Touch"
                description ="Problems trying to resolve the conflict between"
                description2="the two major realms of Classical physics: Newtonian mechanics "
        />
        <div className="container d-flex justify-content-center mb-5 align-items-center p-0">
            <div className="row row-cols-md-3 row-cols-sm-2 g-3 g-md-0">
                <div  className="col py-md-4 d-flex">
                <GetCard
                    image={tel}
                    alt="tel"
                    email1="georgia.young@example.com"
                    email2="georgia.young@ple.com"
                    title="Get Support"
                    button="Submit Request"
                />
                </div>
                <div className="col d-flex">
                    <GetCard
                    image={map}
                    alt="map"
                    email1="georgia.young@example.com"
                    email2="georgia.young@ple.com"
                    title2="Get Support"
                    button2="Submit Request"
                    color="white"
                    backgroundColor="rgba(41, 92, 122, 1)"
                 />
                </div>
                <div className="col py-md-4 d-flex">
                     <GetCard
                    image={arrow}
                    alt="arrow"
                    email1="georgia.young@example.com"
                    email2="georgia.young@ple.com"
                    title="Get Support"
                    button="Submit Request"
                 />
                 </div>
            </div>
        </div>
    </ContainerGet>

);
export default GetInTouch;
