import MainTitle from "../../components/MainTitle";
import Card2 from "../../components/Card2";
import cover2 from "../../assets/cover2.png";
import cover3 from "../../assets/cover3.png";
import table from "../../assets/cover4.png";
import table2 from "../../assets/cover5.png";
import { PracticeAdv } from "./styles";

const PracticeAdvice =() => (
    <PracticeAdv id="Advice">
        <MainTitle
            title=" Practice Advice"
            description ="Problems trying to resolve the conflict between"
            description2="the two major realms of Classical physics: Newtonian mechanics"
        />
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col mt-3 d-flex px-4">
                <Card2
                    title="Frauds or
                    Mislead"
                    description="Newton thought that
                    light was made up of
                    particles, but then it
                    was discovered "
                    image={cover2}
                    alt="card"
                    />
                </div>
                <div className="col mt-3 d-flex px-4">
                <Card2
                    title="Bailes &amp;
                    Warrants"
                    description="“Quantum mechanics”
                    is the description of the
                    behaviour of matter"
                    image={cover3}
                    alt="card2"/>
                </div>
                <div className="col d-flex mt-3 px-4">
                <Card2
                    title="Federal Drug
                    Crimes"
                    description="They describe a
                    universe consisting of
                    bodies moving"
                    image={table}
                    alt="card3"/>
                </div>
                <div className="col mt-3 d-flex px-4">
                <Card2
                    title="Traffic Related
                    Crimes"
                    description="They finally obtained
                    a consistent description
                    of the behaviour "
                    image={table2}
                    alt="card4"/>
                </div>
            </div>
        </div>

    </ PracticeAdv >
);

export default PracticeAdvice;