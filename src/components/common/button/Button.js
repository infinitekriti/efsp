
import "./Button.scss"
const Button = ({title,onClick,img ,alt}) => {
  return (
    <button className="btn-icon" onClick={onClick}>{title} {img && <img src={img} alt={alt} />}  </button>
  )
}

export default Button