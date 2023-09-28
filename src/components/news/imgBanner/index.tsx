import './style.scss';

type IProps = {
    url: string,
    urlImg: string
}

const ImgBanner = ({url, urlImg}: IProps) => {
    return (
        <a href={url} className="img-banner">
            <img src={urlImg} />
        </a>
    )
}

export default ImgBanner;