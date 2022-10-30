import {VideoStyles} from './styles';

const Video =() =>(
<VideoStyles>
    <iframe className="d-none" width="592" height="442" src="https://www.youtube.com/embed/iChFEr38Nt0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <iframe className="d-lg-none" width="300" height="442" src="https://www.youtube.com/embed/iChFEr38Nt0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <iframe className="d-lg-block d-md-none d-none" width="480" height="442" src="https://www.youtube.com/embed/iChFEr38Nt0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</VideoStyles>

);
export default Video;