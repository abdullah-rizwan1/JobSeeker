import { Outlet, NavLink } from "react-router-dom"

export const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Webiste Help</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, nam!</p>
        <nav>
            <NavLink to='faq'>View the FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
