import { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import Logo from "./Logo";
import Nav from "./Nav";
import HamburgerMenu from "./HamburgerMenu";
import Container from "./Container";
import { links } from "../constants/constants";

const mappedLinks = links.map(({ text, to }) => {
  return <NavLink
          className='text-5xl text-white transition-colors md:text-base hover:text-blue-600'
          key={text}
          to={to}>
          {text}
        </NavLink>;
})

export default function Header(props) {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setHeaderHeight(document.getElementById('js-header').offsetHeight)
  }, [])
  useEffect(() => {
    if (isActive) {
      setIsMobile(true)
    }

    const handleResize = () => {
      setIsActive(false);
      setIsMobile(false);

      window.removeEventListener('resize', handleResize)
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)

  }, [isActive])
  
  function handleClick(bool) {
    setIsActive(bool)
  }

  return (
    <header
      id="js-header"
      className="relative bg-black border-b-2 border-gray-600 border-solid"
    >
      <Container className="flex items-center justify-between">
        <Link to='/'>
          <Logo size='96px' className='fill-white' />
        </Link>
        <Nav
          className={`${isActive ? 'active' : ''} ${isActive || isMobile ? 'mobile' : ''}`}
          style={{top: headerHeight + 'px'}}
        >
          <div className="flex flex-col gap-8 text-center md:flex-row">
            {mappedLinks}
          </div>
        </Nav>
        <HamburgerMenu active={isActive} lineClasses={'bg-white'} onClick={handleClick} />
      </Container>
    </header>
  );
};
