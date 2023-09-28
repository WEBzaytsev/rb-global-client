import './style.scss';
import { NavLink } from 'react-router-dom'
export const menuList = [
    {
        name: "Главная",
        path: '/',
    },
    {
        name: "Founders Mondays",
        path: '/founders/',
    },
    // {
    //     name: "RB Mates",
    //     path: '/rbmates/',
    // },
    {
        name: "Канал Приехали",
        path: '/channel/',
    },
    {
        name: "Подписки по тегам",
        path: '/subscribe/',
    },
    // {
    //     name: "Кто где",
    //     path: '/whoisho/',
    // },
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
                {menuList.map((item: any) => (
                    <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>{item.name}</NavLink>
                ))}
            </div>
            <div className="sidebar-ad">
                Реклама
            </div>
        </div>
    )
}

export default Sidebar;