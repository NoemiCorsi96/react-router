import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
import { Link } from "react-router";

export default function Homepage() {
    return (
        <>
            <header>

            </header>
            <main className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3 text-primary">
                        Welcome to My Website
                    </h1>
                    <p className="lead text-secondary mb-4">
                        Benvenuto nella HomePage del mio sito! <br />
                        Scopri di più su di me e sui miei prodotti navigando tra le sezioni.
                    </p>
                    <Link to="/prodotti" className="btn btn-primary btn-lg">
                        Vai ai prodotti
                    </Link>
                </div>
            </main>

        </>
    )
}