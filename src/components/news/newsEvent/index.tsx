import { Link } from 'react-router-dom';
import './style.scss';
// TODO: remove moment.js
import moment from "moment";

interface Props {
    timestamp: number,
    short_description: string
}

const NewsEvent = (props: Props) => {
    const {timestamp, short_description } = props;
    const date = new Date(timestamp * 1000);

    return (
        <div className='news news-event'>
            <div className="news-info">
                <div className="news-info__city">Лондон</div>
                <div className="news-info__date">{moment(date).format('D/MM/YY')}</div>
            </div>
            <div className="news-content">
                <div className="news-title">{short_description}</div>
                <Link to="/founders/" className='news-desc'>Все встречи</Link>
            </div>
        </div>
    )
}

export default NewsEvent;