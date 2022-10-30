import MainTitle from "../MainTitle";
import Cards from "../../components/Cards";
import balance from "../../assets/balance.png";
import hammer from "../../assets/hammer.png";
import paper from "../../assets/paper.png";

//colocar container

const OurPracticeAreas =() => (
    <div className="container">
        <a id="Practice"><MainTitle className="text-color"
            title="Our Practice Areas"
            description ="Problems trying to resolve the conflict between"
            description2="the two major realms of Classical physics: Newtonian mechanics"
        />
            </a>

            <div className="row">
                <div className="col d-flex">
                    <Cards title="Card 1"
                    image={balance}
                    description="Family Law" />
                </div>
                <div className="col d-flex">
                    <Cards title="Card 2"
                    image={hammer} alt="hammer"
                    description="Business Law"/>
                </div>
                <div className="col d-flex">
                    <Cards title="Card 3"
                    image={paper} alt="paper"
                    description="Trust & Estates"
                    />
                </div>
            </div>
    </div>
);

export default OurPracticeAreas;