import './styles';
import {Sub, Text} from './styles'
import hooli from '../../assets/hooli1.png';
import lya from '../../assets/lya2.png';
import leaf from '../../assets/folha.png';
import stripe from '../../assets/stripe4.png';
import aws from '../../assets/aws5.png';
import et from '../../assets/et6.png';



const Subscribe = () => (
    <Sub>
        <div className="container mt-5">
            <div className="row text-center">
                    <div className="col-md-2 mb-2">
                        <img src={hooli} alt="logo" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <img src={lya} alt="logo" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <img src={leaf} alt="logo" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <img src={stripe} alt="logo" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <img src={aws} alt="logo" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <img src={et} alt="logo" />
                    </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row d-flex d-sm-flex bg-blue">
                <div className="col-md-6 row-cols p-2">
                    <Text className="text-center text-lg-start mt-3">Subscribe For Latest<br></br>
                    Newsletter</Text>
                </div>
                <div className="col-md-6 d-flex p-4">
                    <input type="email" className="form-control inputtext" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                    <button className="btn-sub">Subscribe</button>
                </div>
            </div>

        </div>


    </Sub>
);
export default Subscribe;
