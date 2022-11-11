import{Text, Title, Card} from "./styles";

const CardPractice = ({title,description, image}) => (

    <Card className="card h-100">
            <div className="card-body">
                <Title className="card-title mt-3">{title} </Title>
                <Text className="card-text">{description}</Text>
            </div>
            <div>
                <img src={image} className="card-img-top img-fluid" alt="..." />
            </div>
    </Card>
);

export default CardPractice;