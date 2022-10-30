import woman from '../../assets/woman.png';
import {BannerContainer, ButtonMain, ContainerMobile, MobileMenu} from './style';
import {Title} from './style';
import {Log} from './style';
import {Nav} from './style';
import { Sub } from './style';
import { BsSearch } from 'react-icons/bs';
import {MdOutlineShoppingCart} from 'react-icons/md'



const Banner = () => (
    <BannerContainer>
        <header>
            <div>
                <div className="container d-flex justify-content-between">
                    <Log className="col-md-6 p-4 d-none d-md-block d-lg-block d-xl-block">Legalide</Log>
                    <Nav className="d-flex p-4 col-md-6 row-col-none d-none d-md-block d-lg-block d-xl-block">
                        <div className="d-flex justify-content-between">
                            <a href="#Practice">Practice Areas</a>
                            <a href="#Advice">Practice Advice</a>
                            <a href="#Who">Who we are</a>
                            <a href="#Contact">Contact</a>
                        </div>
                    </Nav>
                </div>
                <ContainerMobile>
                    <div className="container d-md-none ">
                        <div className="row">
                            <Log className="col-6 p-3">Legalide</Log>
                            <nav className="col-6 navbar navbar-dark">
                                <div className="container-fluid d-flex justify-content-center">
                                <div className="px-3">
                                    <BsSearch color='white' />
                                    </div>
                                    <div  className="px-3">
                                        <MdOutlineShoppingCart  size={18} color='white' />
                                    </div>
                                    <ButtonMain className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </ButtonMain>
                                </div>
                            </nav>
                        </div>
                        <MobileMenu className="bar-color mobile-menu" id="navbarToggleExternalContent">
                            <div className="bg-menu p-4 col">
                            <li className="mt-3"><a href="#Legal">Home</a></li>
                            <li className="mt-3"><a href="#Practice">Product</a></li>
                            <li className="mt-3"><a href="#Contact">Pricing</a></li>
                            <li className="mt-3"><a href="#ContactUs">Contact</a></li>
                            </div>
                        </MobileMenu>
                    </div>
                </ContainerMobile>
            </div>
        </header>

        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column justify-content-center">
                    <Title className="mt-4 py-4" id="Legal">LEGAL PRO SERVICES</Title>
                    <Sub className="mb-3 mt-3">
                        We know how large objects will act,
                        but things on a small scale.
                    </Sub>
                    <div className='row-col-md-4 mt-3'>
                        <button className="btn1 btn-primary me-2" type="submit">Get Quote Now</button>
                        <button className="btn2 btn-primary mt-4" type="submit">Learn More</button>
                    </div>
                </div>
                <div className="col mt-4">
                    <img id="woman" className="img-sm" src={woman} alt="Woman" />
                </div>
            </div>
        </div>
    </BannerContainer>
);
export default Banner;