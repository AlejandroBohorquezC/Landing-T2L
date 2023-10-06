import { Link } from "react-router-dom"

const CardRoute = ({img, title, text, id}) => {
  return (
    <div className='card'>
        <div>
            <img className='card-image' src={img} alt="ux ui image" />
        </div>
        <div className='card-texts'>
            <h2 className="card-title">{title}</h2>
            <p className="text">{text}</p>
            <Link className='card-link' to={`/:${id}`}>Más...</Link>
        </div>
    </div>
  )
}

export default CardRoute