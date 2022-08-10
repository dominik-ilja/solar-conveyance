import './Nav.scss'

export default function Nav(props) {
  return (
    <nav
      className={`nav ${props.className}`}
      style={props.style}
    >
      {props.children}
    </nav>
  );
};
