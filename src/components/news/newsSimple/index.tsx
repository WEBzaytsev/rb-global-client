import moment from "moment";
import 'moment/dist/locale/ru';
import './style.scss';

moment.locale('ru');

type IProps = {
    title: string,
    url: string,
    timestamp: number,
    short_description: string
}

const News = ({...props}: IProps) => {
    const {title, url, timestamp, short_description } = props;
    const date = new Date(timestamp * 1000);
    return (
        <a href={url} className='news'>
            <div className="news-content">
                <div className="news-date">{moment(date).format('DD MMMM YYYY')}</div>
                <div className="news-title">{title}</div>
                <div className='news-desc'>{short_description}</div>
            </div>
        </a>
    )
}

export default News;