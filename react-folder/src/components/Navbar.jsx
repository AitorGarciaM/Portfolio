import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <section className="header">
            <section className="nav-bar">
                <NavLink to="/" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>ABOUT ME</NavLink>
                <NavLink to="/games" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>GAMES</NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>RESUME</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>CONTACT</NavLink>
            </section>
        </section>
    )
}