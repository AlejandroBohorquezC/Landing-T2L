import { Button } from '@mui/material'
import CardPrice from './CardPrice'

const ListPrices = () => {
  return (
    <div className="container heigth">
        <CardPrice 
            title='Plan gratuito' 
            cost='$0' 
            message='Ingresa a nuestra comunidad!' 
            contain={[
                'Podras realizar preguntas a la comunidady conocer personas que estan estudiando.', 
                'Estaras enterado de todos nuestros eventos.'
            ]} 
        />
        <CardPrice 
            title='Plan mensual' 
            cost='$25' 
            message='Descubre el camino hacia tu éxito profesional' 
            focus={true}
            contain={[
                'Soporte de tutoría personalizada.',
                'Ruta de estudio 100% enfocada en tus objetivos.',
                'Acceso a proyectos prácticos y experiencias de trabajo reales.',
                'Participación en eventos exclusivos y oportunidades de networking.',
                'Actualizaciones de contenido y acceso a nuevas tendencias y tecnologías.',
            ]} 
        />
        <CardPrice 
            title='Plan anual' 
            cost='$250' 
            message='Domina el mundo digital y ahorra US50' 
            contain={[
                'Soporte de tutoría personalizada.',
                'Ruta de estudio 100% enfocada en tus objetivos.',
                'Acceso a proyectos prácticos y experiencias de trabajo reales.',
                'Participación en eventos exclusivos y oportunidades de networking.',
                'Actualizaciones de contenido y acceso a nuevas tendencias y tecnologías.',
            ]} 
        />
    </div>
  )
}

export default ListPrices