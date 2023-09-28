import './style.scss';
import logoBanner from '@/assets/logo-banner.svg';
import bigBanner from '@/assets/big-banner.png';


const NewsBanner = () => {
    return (
        <div className="news-banner">
            <img className='news-banner-img' src={bigBanner} alt="" />
            <div className="news-banner-logo">
                <img src={logoBanner} alt="" />
            </div>
            <div className="news-banner-title">Знай наших: как IT-специалисты<br/>и инженеры из России меняют<br />автомобилестроение</div>
            <a href="/" className="news-banner-btn">Перейти к проекту</a>
        </div>
    )
}

export default NewsBanner;