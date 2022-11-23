import woman from '../../assets/woman.png';
import {BannerContainer, ContainerMobile,} from './style';
import {Title} from './style';
import {Log} from './style';
import {Nav} from './style';
import { Sub } from './style';
import { useState } from 'react';
import { MenuMobile } from '../MenuMobile';
import { FiAlignCenter } from "react-icons/fi";

const Banner = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return(
    <>
    <BannerContainer>
        <header>
            <div>
                <div className="container d-flex justify-content-between">
                    <Log className="col-md-6 mt-4 d-none d-md-block d-lg-block d-xl-block">Legalide</Log>
                    <Nav className="d-flex p-4 col-md-6 row-col-none d-none d-md-block d-lg-block d-xl-block">
                        <nav className="d-flex justify-content-between">
                            <a href="#Practice">Practice Areas</a>
                            <a href="#Advice">Practice Advice</a>
                            <a href="#Who">Who we are</a>
                            <a href="#Contact">Contact</a>
                        </nav>
                    </Nav>
                </div>

                <ContainerMobile>
                    <div className="container d-md-none ">
                        <div className="row">
                            <Log className="d-flex justify-content-between mt-3">Legalide

                            <FiAlignCenter className="" color='white' size={20} onClick={() =>setMenuIsVisible(true)} />
                            </Log>
                            <MenuMobile
                            menuIsVisible={menuIsVisible}
                            setMenuIsVisible={setMenuIsVisible}
                            />
                        </div>
                    </div>
                </ContainerMobile>
            </div>
        </header>

        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column justify-content-center">
                    <Title className="mt-4 py-4 text-center text-md-start" id="Legal">LEGAL PRO SERVICES</Title>
                    <Sub className="mb-3 mt-3  text-center text-md-start">
                        We know how large objects will act,
                        but things on a small scale.
                    </Sub>
                    <div className='row-col-md-4 mt-3 text-center text-lg-start'>
                        <button className="btn1 btn-primary me-2" type="submit">Get Quote Now</button>
                        <button className="btn2 btn-primary mt-4" type="submit">Learn More</button>
                    </div>
                </div>
                <div className="col mt-4 text-center text-lg-start">
                    <img id="woman" className="img-sm" src={woman} alt="Woman" />
                </div>
            </div>
        </div>
    </BannerContainer>
    </>
    )
}
export default Banner;