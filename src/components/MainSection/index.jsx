import MainTitle from "../MainTitle";

const MainSection =({ title, description, image}) => (
    <MainTitle className="card">
        <div className="container">
           <div className="card">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
           </div>
           <img src={image} alt="card" />
        </div>
    </MainTitle>
);

export default MainSection;