import './HamburgerMenu.scss'

export default function HamburgerMenu(props) {
  const handleClick = () => {
    props.onClick(!props.active)
  }
  
  return (
    <button onClick={handleClick} className={`hamburger ${props.active ? 'open' : ''}`}>
      <div className="hamburger__line hamburger__line--1"></div>
      <div className="hamburger__line hamburger__line--2"></div>
      <div className="hamburger__line hamburger__line--3"></div>
    </button>
  );
};
