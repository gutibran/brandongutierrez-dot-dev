import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            {/* <Header /> */}
            <main className="flex flex-col">{children}</main>
            {/* <Footer /> */}
        </>
    )
}