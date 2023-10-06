import { rutas } from '../data/routes'
import CardRoute from './CardRoute'

const ListCards = () => {
  return (
    <div className="container full-width">
        {
            rutas.map(({img, text, title, id}) => (
                <CardRoute
                    key={id}
                    img={img}
                    title={title}
                    text={text}
                    id={id}
                />
            ))
        }
    </div>
  )
}

export default ListCards