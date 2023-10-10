import './style.scss';

interface Props {
    url: string,
    urlImg: string
}

const ImgBanner = (props: Props) => {
    const {url, urlImg} = props;

    return (
        <a href={url} className="img-banner">
            <img src={urlImg} />
        </a>
    )
}

export default ImgBanner;