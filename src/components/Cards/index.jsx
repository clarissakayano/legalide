import { Card1, TextCard } from "./styles";


const Cards = ({image, description, text}) => (
    <Card1 className="container row-col d-flex align-items-center card mb-3">
        <img src={image} className="card-img-top row h-100 card1" alt={text} />
        <div className="card-body">
            <TextCard className="card-text">{description}</TextCard>
        </div>
    </Card1>
);

export default Cards;
