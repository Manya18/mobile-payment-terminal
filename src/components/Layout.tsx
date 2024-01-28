import Header from "./Header";
import Footer from "./Footer";
import { FC, PropsWithChildren } from "react";

const Layout:FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
    )
}
export default Layout;