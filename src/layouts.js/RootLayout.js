import { Outlet } from "react-router-dom"
import Header from "../pages/Header"

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}