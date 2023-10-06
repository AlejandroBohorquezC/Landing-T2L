
const CardMentor = ({image, mentor, rol, puesto}) => {
  return (
    <div className="container direction b-s card-mentor">
        <div>
            <img src={image} alt="mentor" />
        </div>
        <div className='info-mentor'>
            <h3 className="text mentor">{mentor}</h3>
            <p className="text rol">{rol}</p>
            <p className="text puesto">{puesto}</p>
            <img id='precios' src="assets\image 14.png" alt="" />
        </div>
    </div>
  )
}

export default CardMentor