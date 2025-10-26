import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";

export default function Homepage() {
    return (
        <>
            <header>
                Logo
                <AppNav />
            </header>
            <main>
                Benvuto nella HomePage del mio sito
            </main>
            <AppFooter />
        </>
    )
}