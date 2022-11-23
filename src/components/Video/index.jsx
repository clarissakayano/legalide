import {VideoStyles} from './styles';

const Video =() =>(
<VideoStyles className="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/iChFEr38Nt0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</VideoStyles>

);
export default Video;