import logo from '@/assets/logo.svg';
import BurgerIcon from '@/components/icons/burger';
import CloseIcon from '@/components/icons/close';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { NavLink } from 'react-router-dom'
import { menuList } from './Sidebar.tsx';
import {MenuItem} from "../types/MenuItem.ts";

interface IState {
    toggle: {
        value: boolean;
    }
}

const Header = () => {
    const openMenu = useAppSelector((state: IState) => state.toggle.value);
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch({type: "toggle/toggleMenu", payload: !openMenu});
        document.body.classList.toggle('active');
    }

    const closeMenu = () => {
        dispatch({type: "toggle/toggleMenu", payload: !openMenu});
        document.body.classList.remove('active');
    }

    return (
        <header className={openMenu ? "header active" : "header"}>
            <div className='container'>
                <div className='row'>
                    <div className='header-logo-col'>
                        <a href="/" className="header-logo">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className='header-right'>
                        <div className="header-slogan">Помогаем бизнесу расти</div>
                        <div onClick={clickHandler}>
                            {openMenu ? <CloseIcon /> : <BurgerIcon />}
                        </div>
                    </div>
                </div>
            </div>
            {openMenu && (
                <>
                    <div className="sidebar-menu">
                        {menuList.map((item: MenuItem) => (
                            <NavLink
                                onClick={closeMenu}
                                to={item.path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="sidebar-ad">Реклама</div>
                </>
            )}
        </header>
    )
}

export default Header;