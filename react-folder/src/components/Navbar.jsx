import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <section className="header">
            <section className="nav-bar">
                <NavLink to="/Portfolio/about_me" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>ABOUT ME</NavLink>
                <NavLink to="/Portfolio/games" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>GAMES</NavLink>
                <NavLink to="/Portfolio/resume" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>RESUME</NavLink>
                <NavLink to="/Portfolio/contact" className={({ isActive }) => (isActive ? "route-link-active" : "nav-link")}>CONTACT</NavLink>
            </section>
        </section>
    )
}