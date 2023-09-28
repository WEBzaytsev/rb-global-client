import './style.scss';

const TagsBlock = () => {
    return (
        <div className="tags">
            <div className="tags-title">Популярные теги:</div>
            <div className="tags-list">
                <a href="#">Турция</a>
                <a href="#">Кипр</a>
                <a href="#">ОАЭ</a>
                <a href="#">Португалия</a>
                <a href="#">США</a>
            </div>
        </div>
    )
}

export default TagsBlock;