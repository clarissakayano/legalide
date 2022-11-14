import{Text, Title, CardStyle} from "./styles";

const Card2 = ({title,description, image}) => (

    <CardStyle className="card h-100">
            <div className="card-body mt-4 mt-lg-2 me-5">
                <Title className="card-title">{title} </Title>
                <Text className="card-text mt-4  mt-lg-2 mb-2 mb-lg-1">{description}</Text>
            </div>
            <div>
                <img src={image} className="box card-img-top img-fluid" alt="..." />
            </div>
    </CardStyle>
);


export default Card2;