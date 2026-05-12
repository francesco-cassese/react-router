import { Link, Outlet } from "react-router"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

function LayoutPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default LayoutPage