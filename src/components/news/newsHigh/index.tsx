import moment from "moment";
import 'moment/dist/locale/ru';
import './style.scss';

moment.locale('ru');

type IProps = {
    title: string,
    category: {
        name: string
    },
    image: string,
    url: string,
    timestamp: number,
    short_description: string
}

const NewsHigh = ({...props}: IProps) => {
    const {title, category, image, url, timestamp, short_description } = props;
    const date = new Date(timestamp * 1000);
    return (
        <a href={url} target="_blank" className="news-high">
            <div className="news-high-img">
                <img src={image} alt="" />
                <div className="news-high-tags">
                    <span>{category.name}</span>
                </div>
            </div>
            <div className="news-content">
                <div className="news-date">{moment(date).format('DD MMMM YYYY')}</div>
                <div className="news-title">{title}</div>
                <div className='news-desc'>{short_description}</div>
            </div>
        </a>
    )
}

export default NewsHigh;