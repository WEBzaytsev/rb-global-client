import Layout from "../layout";
import recolationBg from '@/assets/relocationMap.png';
import lineGray from '@/assets/relocation-line-gray.png';
import lineGold from '@/assets/relocation-line-gold.png';

const RelocationMapPage = () => {
    return (
        <Layout>
            <div className="content-text content--relocation">
                <div className="title">Relocation map</div>
                <div className="relocatin-block-text">
                    <div className="description">
                        <p>Relocation Map — это интерактивный гид по сервисам, компаниям и сообществам, связанным с релокацией.</p>
                        <p>Мы собрали более 200 проектов, которые станут для предпринимателя подспорьем при переезде или масштабировании бизнеса в любую страну.</p>
                    </div>
                    <a href="#" className="btn">Перейти к проекту</a>
                    <div className="relocation-block-img">
                        <div className="relocation-line relocation-line--gray">
                            <img src={lineGray} alt="" />
                        </div>
                        <img src={recolationBg} alt="" />
                        <div className="relocation-line relocation-line--gold">
                            <img src={lineGold} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RelocationMapPage;