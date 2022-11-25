import { Container } from "./styles";
import {FiXCircle} from 'react-icons/fi';




export function MenuMobile({menuIsVisible, setMenuIsVisible}) {

    return(
        <Container isVisible={menuIsVisible}>
           <div id="menu-background" onClick={() => setMenuIsVisible(false)}>
                <FiXCircle color="white" size={30} onClick={() => setMenuIsVisible(false)} />
                <div className="d-flex justify-content-center" id="height">
                    <nav className="">
                        <a href="#Practice">Practice Areas</a>
                        <a href="#Advice">Practice Advice</a>
                        <a href="#Who">Who we are</a>
                        <a href="#Contact">Contact</a>
                    </nav>
                </div>
           </div>
        </Container>
    )

}

export default MenuMobile;
