import React, {createContext, ReactNode, useContext, useState} from "react";
import Home from "../pages/home/Home.tsx";
import Channel from "../pages/channel/Channel.tsx";
import Subscribe from "../pages/subscribe/Subscribe.tsx";
import Roadmap from "../pages/roadmap/Roadmap.tsx";
import Founders from "../pages/founders/Founders.tsx";
import RelocationMap from "../pages/relocationMap/RelocationMap.tsx";
import About from "../pages/about/About.tsx";
/** Types */
import {Page} from "../types/Page.ts";

interface Props {
    children: React.ReactElement;
}

interface PagesProviderValue {
    pages: Page[];
    setPages: React.Dispatch<React.SetStateAction<Page[]>>;
    PageComponents: Map<string, (id: number) => ReactNode>;
}

const PagesContext = createContext<PagesProviderValue | null>(null);

const PagesProvider = (props: Props): React.ReactElement => {
    const {children} = props;
    const [pages, setPages] = useState<Page[]>([]);
    const PageComponents = new Map<string, (id: number) => ReactNode>([
        ['Главная', (id: number) => <Home id={id} />],
        ['Founders Mondays', (id: number) => <Founders id={id} />],
        ['Канал Приехали', (id) => <Channel id={id} />],
        ['Подписки по тегам',(id: number) => <Subscribe id={id} />],
        ['Куда ехать', (id: number) => <Roadmap id={id} />],
        ['Relocation Map', (id: number) => <RelocationMap id={id} />],
        ['О проекте', (id: number) => <About id={id} />],
    ])

    return (
        <PagesContext.Provider value={{
            pages,
            setPages,
            PageComponents,
        }}>
            {children}
        </PagesContext.Provider>
    )
}

export const usePagesContext = (): PagesProviderValue => {
    const context = useContext(PagesContext);
    if (context === null) {
        throw new Error("usePagesContext must be used within an PagesProviderValue");
    }
    return context;
};

export default PagesProvider;