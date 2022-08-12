import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Container, HamburgerMenu, Logo, Nav } from '../components'
import { links } from "../constants"

export default function Header(props) {
  // const [headerHeight, setHeaderHeight] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // setHeaderHeight(document.getElementById('js-header').offsetHeight)
  }, [])
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = 'hidden';
      setIsMobile(true)
    }
    else {
      document.body.style.overflowY = '';
    }

    const handleResize = () => {
      setIsActive(false)
      setIsMobile(false)

      window.removeEventListener("resize", handleResize)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isActive])
  function handleToggleClick(bool) {
    setIsActive(bool)
  }
  function handleLinkClick() {
    setIsActive(false)
  }

  return (
    <header
      id="js-header"
      className="relative bg-black border-b-2 border-gray-600 border-solid"
    >
      <Container className="flex items-center justify-between">
        <Link to="/">
          <Logo size="96px" className="fill-white" />
        </Link>
        <Nav
          className={`${isActive ? 'active' : ''} ${isActive || isMobile ? 'mobile' : ''}`}
          // style={{top: headerHeight + 'px'}}
        >
          <div className="flex flex-col justify-center h-full text-center gap-x-8 md:flex-row">
            {
              links.map(({ text, to }) => (
                <NavLink
                  className='py-4 text-5xl text-white transition-colors md:text-base hover:text-blue-600'
                  onClick={handleLinkClick}
                  key={text}
                  to={to}>
                  {text}
                </NavLink>
              ))
            }
          </div>
        </Nav>
        <HamburgerMenu active={isActive} lineClasses={'bg-white'} onClick={handleToggleClick} />
      </Container>
    </header>
  )
}
