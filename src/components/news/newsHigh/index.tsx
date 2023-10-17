// TODO: remove moment.js
import moment from "moment";
import 'moment/dist/locale/ru';
import './style.scss';
import {RbArticle} from "../../../types/RbArticle.ts";

moment.locale('ru');

interface Props {
    article: RbArticle;
}

const NewsHigh = (props: Props) => {

    const {title, category, image, url, timestamp, short_description } = props.article;
    const date = new Date(timestamp * 1000);

    return (
        <a href={url} target="_blank" className="news-high">
            <div className="news-high-img">
                <img src={image || ''} alt="" />
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