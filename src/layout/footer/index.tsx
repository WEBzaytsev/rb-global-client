import './style.scss';

import logo from '@/assets/logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-logo-col'>
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-slogan">Помогаем бизнесу расти</div>
                    </div>
                    <div className='col-right'>
                        <div className="footer-slogan">Помогаем бизнесу расти</div>
                        <div className="footer-right">
                            <div className="footer-right__contacts">
                                Написать <a href="mailto:editor@rb.ru">editor@rb.ru</a>
                            </div>
                            <div className="footer-right__copyright">© 2012-2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;