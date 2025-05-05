import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <section className="header">
            <section className="nav-bar">
                <NavLink to="/" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>ABOUT ME</NavLink>
                <NavLink to="/games" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>GAMES</NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>RESUME</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>CONTACT</NavLink>
            </section>
        </section>
    )
}