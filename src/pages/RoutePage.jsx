import MainLayout from '../layouts/MainLayout'
import AccordionLevels from '../components/AccordionLevels';
import { Button } from '@mui/material';
import AccordionQuestions from '../components/AccordionQuestions';

const RoutePage = () => {
  return (
    <MainLayout>
        <div id='fix' className='container direction separacion'>
          <div className="container banner">
            <h2 className="big-title banner-title">Conviértete en un diseñador UX/UI </h2>
            <img src="assets\image30.png" alt="imagen ux-ui" />
          </div>
          <p className="text big-size color m-b">La ruta de Diseñador UI/UX te llevará a través de 6 niveles progresivos, abarcando temas clave que te convertirán en un profesional experto en diseño de productos digitales.</p>

          <AccordionLevels />
        </div>

        <div className="container direction separacion">
          <h2 className="big-title">Salida Laboral</h2>
          <p className="text big-size sin-margin">Inscribete en la ruta de UX/UI y trabaja en los siguientes roles:</p>
          <div className="container direction full-width">
            <div className="container salida-laboral">
              <p className="text big-size color">UI Designer</p>
              <p className="text big-size color">UX Designer</p>
              <p className="text big-size color">UX Researcher</p>
              <p className="text big-size color">UX Writer</p>
            </div>
            <div className="container salida-laboral">
              <p className="text big-size color">Game Designer</p>
              <p className="text big-size color">Digital Product Designer</p>
              <p className="text big-size color">Interaction Designer</p>
            </div>
            <div className="container salida-laboral">
              <p className="text big-size color">Mobile App Designer</p>
              <p className="text big-size color">UX Strategist</p>
              <p className="text big-size color">Usability Specialist</p>
            </div>
          </div>
        </div>

        <div className="container direction separacion">
          <h2 className="big-title">¿Como aplicar?</h2>
          <p className="text big-size aling">Descubre cómo un pequeño cambio puede transformar tu vida. <br /> ¡Aplica ahora y da el primer paso hacia una carrera que te abrirá nuevas oportunidades!</p>
          <div className="container pasos">
            <div className="container direction paso">
              <img src="assets\iconoaplica_png1.png" alt="icono aplica" />
              <h3 className="big-title">Paso 1</h3>
              <p className="text big-size aling">El primer pasó será aplicar a una de nuestras rutas</p>
            </div>
            <div className="container direction paso">
              <img src="assets\iconoentrevista_png1.png" alt="icono entrevista" />
              <h3 className="big-title">Paso 2</h3>
              <p className="text big-size aling">Tendras una entrevista de admisión con uno de nuestros founders</p>
            </div>
            <div className="container direction paso">
              <img src="assets\suscripcion_png1.png" alt="icono suscripcion" />
              <h3 className="big-title">Paso 3</h3>
              <p className="text big-size aling">Escoge tu tipo de suscripción y ¡listo!</p>
            </div>
          </div>

          <Button
              variant="contained"
              sx={{
                  textTransform: 'none',
                  fontFamily: 'Quicksand, sans-serif',
                  marginTop: '25px',
                  fontWeight: '600',
                  fontSize: '24px',
                  borderRadius: '10px',
                  backgroundColor: '#00BDD6',
                  width: '377px'
              }}
          >Aplica ahora</Button>
        </div>

        <div className="container direction separacion">
          <AccordionQuestions />
        </div>

    </MainLayout>
  )
}

export default RoutePage