import TagsBlock from "../components/tags";
import Layout from "../layout";

import hashtagSubs from '@/assets/hashtag.svg';

const SubscribePage = () => {
    return (
        <Layout>
            <div className="content-text">
                <div className="title">Подписки по тегам</div>
                <div className="title-h2">Как подписаться на новости и статьи по конкретной стране?</div>
                <div className="description">RB.RU предлагает актуальный сервис для пользователей — теперь вы можете подписаться на интересные вам темы и получать подборку свежих материалов раз в неделю на email.</div>
                <div className="paragraph">
                    <p>Сервис доступен для авторизованных пользователей RB.RU с заполненным email. Вы можете выбрать для подписки любой тег: выберите тег из списка  и перейдите на страницу тега. В шапке вы увидите возможность подписаться на тему или отменить подписку, если вы до этого были подписаны на тег. </p>
                    <p>Раз в неделю вы будете получать письмо с подборкой материалов по всем тегам, на которые вы подписаны, за последние 7 дней, если были тематические новости. Рекомендуем добавить адрес отправителя — <a className="text-link" href="mailto:news@rb.ru">news@rb.ru</a> — в контакты в своем почтовом клиенте, чтобы письма не попадали в спам.</p>
                </div>
                <TagsBlock />
            </div>
            <div className="hashtag">
                <img src={hashtagSubs} alt="" />
            </div>
        </Layout>
    )
}

export default SubscribePage;