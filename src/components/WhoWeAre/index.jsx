import './styles';
import {ContainerWho} from './styles'
import {Txtlight} from './styles';
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
            <section className="py-5">
                <div className="row">
                    <div className='col'>
                    <MainTitle
                        title="Who we are"
                        description="Problems trying to resolve the conflict between the two major realms"
                        description2="of Classical physics: Newtonian mechanics"
                        />
                    </div>
                </div>
                <div className="row d-md-block d-md-flex flex-row justify-content-around text-color text">
                    <div className="col-md-5 d-flex justify-content-center g-3">
                        <Video />
                    </div>
                    <div className="col-md-6 col-lg-5 margin">
                        <MainTitle
                            title="Must Trusted in Our Field"
                            align="start"
                            description="Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule."
                        />
                        <div>
                            <p><img src={icon1} alt="group" className="me-3 text"/>the quick fox jumps over the lazy dog</p>
                            <p><img src={icon2} alt="radar" className="me-3 text"/>the quick fox jumps over the lazydog</p>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </ContainerWho>
    );

export default WhoWeAre;
