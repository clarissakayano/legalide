import { IconFooter } from "./styles";

const FooterIcon= ({title,icon1,icon2,icon3,text1,text2,text3}) => (

    <IconFooter className="mb-5">{title}
            <img src={icon1} className="mb-2" alt={text1} />
            <img src={icon2} className="mb-2" alt={text2} />
            <img src={icon3} className="mb-2" alt={text3} />
    </IconFooter>

);
export default FooterIcon;