import { Container } from "./styles";
import {FiXCircle} from 'react-icons/fi';


export function MenuMobile({menuIsVisible, setMenuIsVisible}) {

    return(
        <Container isVisible={menuIsVisible}>
            <FiXCircle color="white" size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <a href="#Practice">Practice Areas</a>
                <a href="#Advice">Practice Advice</a>
                <a href="#Who">Who we are</a>
                <a href="#Contact">Contact</a>
            </nav>
        </Container>
    )

}

export default MenuMobile;
