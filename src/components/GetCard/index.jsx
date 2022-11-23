
import {Email, GetIn, Title2} from "./styles";


const GetCard = ({ image, email1, email2, color="dark", button = false, button2 = false, backgroundColor}) => (

    <GetIn className={`card w-100 text-${color}`} backgroundColor={backgroundColor}>
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <img className="mt-3 mb-3" src={image} alt="..." />
            <Email className="card-text mt-2">{email1}</Email>
            <Email className="card-text">{email2}</Email>
             <Title2 className="card-title mt-2 mb-3">Get Support</Title2>
            {button &&
                <div className="mb-3">
                    <a href="https://www.google.com/" target="blank" className="btn btn-primary">{button}</a>
                </div>}
            {button2 &&
            <div  className="mb-3">
                <a href="https://www.google.com/" target="blank" className="btn btn-primary2">{button2}</a>
            </div>
            }
        </div>
    </GetIn>
);


export default GetCard;