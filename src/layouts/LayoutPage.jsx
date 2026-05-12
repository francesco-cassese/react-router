import { Link, Outlet } from "react-router"

function LayoutPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default LayoutPage