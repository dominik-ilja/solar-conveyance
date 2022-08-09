import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";

const links = [
  {text: 'Home', to: '/'},
  {text: 'Weather', to: '/weather'},
  {text: 'Launches', to: '/launches'},
]

export default function Header(props) {
  return (
    <header className="bg-dark">
        <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <div>
          <Logo size={'96px'} className="fill-white" />
        </div>
        {/* navigation */}
        <nav className="flex gap-x-8">
          {
            links.map(({text, to}) => (
              <NavLink
                className='text-white'
                to={to}>{text}</NavLink>
            ))
          }
        </nav>
      </div>
    </header>
  );
};
