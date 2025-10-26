import { NavLink } from "react-router";
export default function AppNav() {
    const menu = [
        {
            id: 1,
            link: '/',
            text: 'Home'
        },
        {
            id: 2,
            link: '/about',
            text: 'About'
        },
        {
            id: 3,
            link: '/prodotti',
            text: 'Prodotti'
        }
    ]
    return (
        <nav className="navbar navbar-expand bg-light border-bottom">
            <div className="container">

                <span className="navbar-brand fw-bold">Logo</span>

                {/* utilizzo di active */}
                <div className="navbar-nav ms-auto">
                    {menu.map(item => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-semibold text-primary" : ""}`
                            }
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}