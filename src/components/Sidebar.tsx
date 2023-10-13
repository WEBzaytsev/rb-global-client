import {NavLink} from 'react-router-dom';
import {MenuItem} from "../types/MenuItem.ts";
import {usePagesContext} from "../providers/PagesProvider.tsx";
import {Page} from "../types/Page.ts";

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
        path: '/relocation-map/',
    },
    {
        name: "О проекте",
        path: '/about/',
    }
]

const Sidebar = () => {
    const {pages, PageComponents} = usePagesContext();

    const getPageSlug = (page: Page): string => {
        return page.title === 'Главная' ? '/' : `/${page.slug}/`;
    }

    return (
        <div className='sidebar'>
            <div className="sidebar-menu">
                {pages.map((page: Page, idx: number) => (
                    PageComponents.get(page.title) && (
                        <NavLink
                            key={idx}
                            to={getPageSlug(page)}
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            {page.title}
                        </NavLink>
                    )
                ))}
            </div>
            <div className="sidebar-ad">
                Реклама
            </div>
        </div>
    )
}

export default Sidebar;