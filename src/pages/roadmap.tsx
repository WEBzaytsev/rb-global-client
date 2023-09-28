import Layout from "../layout";
import roadMap from '@/assets/roadmap.png';

const RoadMapPage = () => {
    return (
        <Layout>
            <div className="content-text">
                <div className="title">Куда идти стартапам в разных странах?</div>
                <div className="paragraph">
                    <p>Каждый месяц редакция RB.RU рассказывает, какие возможности разные страны предлагают IT-компаниям. Среди них: бизнес-инкубаторы, акселераторы, стартап-школы, фонды, мероприятия, стартап-визы и многое другое.</p>
                    <p>Параллельно мы разбираем налоговые системы выбранных стран, чтобы предприниматели могли объективнее оценить потенциал своего бизнеса в новой локации.</p>
                    <a href="#" className="btn">Перейти к проекту</a>
                </div>
            </div>
            <div className="roadmap-bg">
                <img src={roadMap} alt="" />
            </div>
        </Layout>
    )
}

export default RoadMapPage;