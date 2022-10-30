import{Text, Title, CardStyle} from "./styles";

const Card2 = ({title,description, image}) => (

    <CardStyle className="container">
        <div className="card h-100">
            <div className="card-body">
                <Title className="card-title">{title} </Title>
                <Text className="card-text">{description}</Text>
            </div>
            <div>
                <img src={image} className="box card-img-top img-fluid" alt="..." />
            </div>
        </div>
    </CardStyle>
);


export default Card2;