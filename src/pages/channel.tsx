import Layout from "../layout";
import logoChannel from '@/assets/channel/logo-channel.png';
import bgChannel from '@/assets/channel/bg-channel.png';

const ChannelPage = () => {
    return (
        <Layout>
            <div className="content-text">
                <div className="title">Приехали!</div>
                <div className="paragraph">
                    <p>Телеграм-канал от команды RB.RU о жизни и бизнесе за рубежом. Пишем про важное: документы, финансы, работа, жилье, карьера, люди.</p>
                    <p>Подключайтесь к прямым эфирам в телеграм-канале <a className="text-link" href="#" target="_blank">Приехали!</a> Мы приглашаем предпринимателей, инвесторов и экспертов обсудить бизнес за рубежом: все, что нужно знать о международной экспансии в этом году.</p>
                </div>
                <a href="#" className="btn">Подключиться!</a>
                <div className="logo-channel">
                    <img src={logoChannel} alt="" />
                </div>
            </div>
            <div className="channel-bg">
                <img src={bgChannel} alt="" />
            </div>
        </Layout>
    )
}

export default ChannelPage;