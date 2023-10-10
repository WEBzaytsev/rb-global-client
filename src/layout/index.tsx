import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import './style.scss';
import {ReactNode} from "react";

interface Props {
    children: string | ReactNode | ReactNode[];
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header />
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="sidebar-col">
                                <Sidebar />
                            </div>
                            <div className="content-col">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    )
}

export default Layout;