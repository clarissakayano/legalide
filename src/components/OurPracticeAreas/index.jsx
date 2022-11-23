import MainTitle from "../MainTitle";
import Cards from "../../components/Cards";
import balance from "../../assets/balance.png";
import hammer from "../../assets/hammer.png";
import paper from "../../assets/paper.png";


const OurPracticeAreas =() => (
    <div className="container">
        <div className="row justify-content-center">
            <span id="Practice">
                <MainTitle className="text-color"
                title="Our Practice Areas"
                description ="Problems trying to resolve the conflict between"
                description2="the two major realms of Classical physics: Newtonian mechanics"
            />
            </span>
            <div className="row justify-content-center">
                <div className="col col-lg-4 d-flex">
                    <Cards title="Card 1"
                    image={balance}
                    description="Family Law" />
                </div>
                <div className="col col-lg-4 d-flex">
                    <Cards title="Card 2"
                    image={hammer} alt="hammer"
                    description="Business Law"/>
                </div>
                <div className="col col-lg-4 d-flex">
                    <Cards title="Card 3"
                    image={paper} alt="paper"
                    description="Trust & Estates"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default OurPracticeAreas;