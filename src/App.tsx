import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Error from "./pages/error/Error.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Sidebar from "./components/Sidebar.tsx";
import {usePagesContext} from "./providers/PagesProvider.tsx";
import {getPages} from "./api/admin/api.ts";
import {Page} from "./types/Page.ts";


const App = () => {
    const {pages, setPages, PageComponents} = usePagesContext();

    useEffect(() => {
        getPages().then(data => setPages(data));
    }, [setPages]);

    const getPageSlug = (page: Page): string => {
        return page.title === 'Главная' ? '/' : `/${page.slug}`;
    }

    return (
        <>
            <Header/>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="sidebar-col">
                            <Sidebar/>
                        </div>
                        <div className="content-col">
                            <Routes>
                                {pages.map((page: Page) => (
                                    PageComponents.get(page.title) && (
                                        <Route
                                            key={page.slug}
                                            path={getPageSlug(page)}
                                            element={PageComponents.get(page.title)?.(page.id) || null}
                                        />
                                    )
                                ))}
                                <Route path="/*" element={<Error/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App;