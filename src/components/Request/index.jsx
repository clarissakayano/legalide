import './styles';
import { Button, Container, ContainerRequest, Sub, Text } from './styles';
import { List } from './styles';
import MainTitle from '../MainTitle';

import phone from '../../assets/phone.png';
import map2 from '../../assets/map2.png';
import arrow2 from '../../assets/arrow2.png'




const RequestCons = () => (

<>
    <Container className="mb-4">
        <div className="container mt-5" id="ContactUs">
            <div className="row d-flex d-sm-flex">
                <div className="col-md-6 row-cols p-2">
                    <div className="d-flex flex-column align-items-md-start text-center">
                        <Text>Request A Free Consultation</Text>
                        <Sub className="align-self-center align-self-lg-start">the quick fox jumps over the lazy dog</Sub>
                    </div>
                </div>
                <div className="col-md-6 col-sm-7 g-sm-1">
                    <div className="d-flex justify-content-center">
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
        </Container>
        <ContainerRequest>
        <div className="container bg-blue m-mobile">
            <div className="row text row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 pt-5">
                <div className="col">
                    <h5 className="mb-3">Company Info</h5>
                    <List className="list-unstyled mb-5">
                        <li className="mb-2">About Us</li>
                        <li className="mb-2">Carrier</li>
                        <li className="mb-2">We are hiring</li>
                        <li className="mb-2">Blog</li>
                    </List>
                </div>
                <div className="col">
                    <h5 className="mb-3">Legal</h5>
                    <List className="mb-5 list-unstyled">
                        <li className="mb-2">About Us</li>
                        <li className="mb-2">Carrier</li>
                        <li className="mb-2">We are hiring</li>
                        <li className="mb-2">Blog</li>
                    </List>
                </div>
                <div className="col">
                    <h5 className="mb-3">Features</h5>
                    <List className="mb-5 list-unstyled">
                        <li className="mb-2">Business Marketing</li>
                        <li className="mb-2">User Analytic</li>
                        <li className="mb-2">Live Chat</li>
                        <li className="mb-2">Unlimited Support</li>
                    </List>
                </div>
                <div className="col">
                    <h5 className="mb-3">Resources</h5>
                    <List className=" list-unstyled mb-5">
                        <li className="mb-2">IOS &amp; Android</li>
                        <li className="mb-2">&quot;Watch&quot; a Demo</li>
                        <li className="mb-2">Customers</li>
                        <li className="mb-2">API</li>
                    </List>
                </div>
                <div className="col">
                    <h5 className="mb-3">Get In Touch</h5>
                    <ul className="list-unstyled mb-5">
                        <li><img src={phone} className="me-2 text mt-2" alt="phone"/>(480) 555-0103</li>
                        <li><img src={map2} className="me-2 text" alt="map"/>4517 Washington Ave.</li>
                        <li className="text wordbreak"><img src={arrow2}  alt="arrow" className="me-2 py-2" />debra.holt@example.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </ContainerRequest>
</>

);

export default RequestCons;