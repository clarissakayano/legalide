import{Text, Title} from "./styles";

const CardPractice = ({title,description, image}) => (

    <Title className="card h-100">
            <div className="card-body">
                <Title className="card-title">{title} </Title>
                <Text className="card-text">{description}</Text>
            </div>
            <div>
                <img src={image} className="card-img-top img-fluid" alt="..." />
            </div>
    </Title>
);

export default CardPractice;