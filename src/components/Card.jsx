import React from 'react'

const Card = ({img, title, text}) => {
  return (
    <div className='card'>
        <div>
            <img className='card-image' src={img} alt="ux ui image" />
        </div>
        <div className='card-texts'>
            <h2 className="card-title">{title}</h2>
            <p className="text">{text}</p>
            <a className='card-link' href="#">Más...</a>
        </div>
    </div>
  )
}

export default Card