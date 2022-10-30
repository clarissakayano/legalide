
import {GetIn, Textcolor, Title1, Title2} from "./styles";


const GetCard = ({ image, imagetext, email1, email2, color="dark", button = false, button2 = false, backgroundColor, title2 = false }) => (

    <GetIn className={`card d-flex w-100 text-${color}`} backgroundColor={backgroundColor}>
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt="..." />
            <h6 className="card-text mt-2">{email1}</h6>
            <h6 className="card-text">{email2}</h6>
             <Title2 className="card-title">Get Support</Title2>
            {button &&
                <div>
                    <a href="https://www.google.com/" className="btn btn-primary">{button}</a>
                </div>}
            {button2 &&
            <div>
                <a href="https://www.google.com/" className="btn btn-primary2">{button2}</a>
                </div>
            }
        </div>
    </GetIn>
);


export default GetCard;