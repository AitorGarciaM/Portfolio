import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <section className="header">
            <section className="nav-bar">
                <NavLink to="/Portfolio/" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>ABOUT ME</NavLink>
                <NavLink to="/Portfolio/games" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>GAMES</NavLink>
                <NavLink to="/Portfolio/resume" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>RESUME</NavLink>
                <NavLink to="/Portfolio/contact" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")} end>CONTACT</NavLink>
            </section>
        </section>
    )
}