import './Spinner.scss'

/* 
    props.className
    props.borderWidth
    props.borderColor
    props.spinnerColor
*/

export default function Spinner(props) {


  return (
    <div className="flex justify-center">
      <div
        style={{
          borderColor: `${props.spinnerColor || props.borderColor} ${props.borderColor} ${props.borderColor}`,
          borderWidth: props.borderWidth,
        }}
        className={`spinner ${props.className || ''}`}
      ></div>
    </div>
  );
};
