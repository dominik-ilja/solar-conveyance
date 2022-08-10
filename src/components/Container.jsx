export default function Container(props) {
  return (
    <div className={`container mx-auto px-2 md:px-4 ${props.className || ''}`}>
      {props.children}
    </div>
  );
};
