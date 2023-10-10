import './style.scss';
import { NavLink } from 'react-router-dom'
import {MenuItem} from "../../types/MenuItem.ts";

export const menuList: MenuItem[] = [
    {
        name: "Главная",
        path: '/',
    },
    {
        name: "Founders Mondays",
        path: '/founders/',
    },
    {
        name: "Канал Приехали",
        path: '/channel/',
    },
    {
        name: "Подписки по тегам",
        path: '/subscribe/',
    },
    {
        name: "Куда ехать",
        path: '/roadmap/',
    },
    {
        name: "Relocation Map",
        path: '/relocationmap/',
    },
    {
        name: "О проекте",
        path: '/about/',
    }
]

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-menu">
                {menuList.map((item: MenuItem, idx: number) => (
                    <NavLink
                        key={idx}
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
            <div className="sidebar-ad">
                Реклама
            </div>
        </div>
    )
}

export default Sidebar;