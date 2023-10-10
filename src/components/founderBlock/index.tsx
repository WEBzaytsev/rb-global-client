import './style.scss';
// TODO: remove moment.js
import moment from "moment";
import 'moment/dist/locale/ru';
interface Props {
    image: string,
    title: string,
    url: string,
    timestamp: number
}

const FounderBlock = (props: Props) => {
    const {image, title, url, timestamp} = props;

    const date = new Date(timestamp * 1000);
    return (
        <a href={url} target='_blank' className="founders-block">
            <div className="founders-block-img">
                <img src={image} alt="" />
                <div className="founders-block-img--border"></div>
            </div>
            <div className="founders-block-content">
                <div className="founders-block-content__title">{title}</div>
                <div className="founders-block-content__date">Встреча состоится {moment(date).format('DD MMMM')}</div>
            </div>
        </a>
    )
}

export default FounderBlock;