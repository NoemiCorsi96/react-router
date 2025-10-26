import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
export default function DefaultLayout() {
    return (
        <>
            <AppNav />
            <Outlet />
            <AppFooter />

        </>
    )
}