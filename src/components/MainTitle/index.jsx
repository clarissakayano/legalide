import './styles';
import { Textlight } from './styles';

const MainTitle = ({title,description,description2, align = 'center'}) => (
    <div className={`py-5 text-color text-${align}`} >
        <h2>{title}</h2>
        <Textlight>{description}</Textlight>
        <Textlight>{description2}</Textlight>
    </div>
);


export default MainTitle;