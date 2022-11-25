import './styles';
import {ContainerWho, Sub, Title} from './styles'
import icon1 from '../../assets/vector.png';
import icon2 from '../../assets/vector1.png';
import MainTitle from "../../components/MainTitle";
import Video from '../Video';

/*<img src={icon1} alt="icon1">the quick fox jumps over the lazydog/>
<img src={icon1}></img>
*/


const WhoWeAre = () => (
       <ContainerWho id="Who">
            <div className="container">
                    <MainTitle
                        title="Who we are"
                        description="Problems trying to resolve the conflict between the two major realms"
                        description2="of Classical physics: Newtonian mechanics"
                        />
                <div className="row d-md-flex text-color">
                    <div className="col col-lg-7 d-flex mb-4">
                        <Video />
                    </div>
                    <div className="col col-12 col-lg-5 ">
                        <div className="margin justify-content-center text-align-last-lg-center">
                            <Title className="text-center text-lg-start">Most Trusted in Our Field</Title>
                            <Sub className="text-center text-lg-start">Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.</Sub>
                        <div className="text-start mt-5">
                            <p className="text-center text-lg-start"><img src={icon1} alt="group" className="me-3 text"/>the quick fox jumps over the lazy dog</p>
                            <p className="text-center text-lg-start"><img src={icon2} alt="radar" className="me-3 text text-start"/>the quick fox jumps over the lazydog</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerWho>
    );

export default WhoWeAre;
