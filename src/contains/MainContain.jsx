import { Button } from "@mui/material"
import ListCards from "../components/ListCards"
import SliderStudents from "../components/SliderStudents"
import SliderMentores from "../components/SliderMentores"
import ListPrices from "../components/ListPrices"

const MainContain = () => {
  return (
    <>
        <div id='fix' className="container separacion">
            <div>
                <h2 className='title'>Construye tu futuro en la industria tech. Aprende, practicá y crece con nuestro programa de mentorías y trabajo simulado en tecnología.</h2>
                <p className='text'>Toma el control de tu futuro en la industria tech. Nuestro programa de mentorías y trabajo simulado está diseñado para enseñarte las habilidades y conocimientos necesarios para ocupar cargos en el apasionante mundo de la tecnología.</p>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        fontFamily: 'Quicksand, sans-serif',
                        marginTop: '25px',
                        fontWeight: '600',
                        fontSize: '24px',
                        borderRadius: '10px',
                        backgroundColor: '#00BDD6'
                    }}
                >Aplica ahora</Button>
            </div>
            <div className='main-image'>
                <img src="assets\image5.png" alt="hombre sentado" />
            </div>
        </div>

        <div className='container direction separacion'>
            <h2 className="title">¿Listo para dar el siguiente paso?</h2>
            <div className='container'>
                <div className='container direction reduccion'>
                    <p className="text big-size">En Tech2Life, estamos para apoyarte en cada paso de tu transformación profesional. Te ofrecemos una sólida ruta de aprendizaje con mentorías junto a profesionales de la industria y la oportunidad de trabajar en proyectos reales en un ambiente laboral simulado.
                        <br /> <br />
                        Además, lo harás sin la presión de cometer errores costosos. </p>
                    <p id='rutas' className='text resalto'>¡No esperes más, da un pequeño pero significativo cambio en tu vida y aplica ahora!</p>
                </div>
                <div className='second-image'>
                    <img src="assets\image31.png" alt="seo image" />
                </div>
            </div>
        </div>

        <div  className="container direction separacion">
            <h2 className='big-title'>Nuestras rutas</h2>
            <p className='text m-t'>Descubre el mundo del desarrollo y preparate en:</p>
            <ListCards />
        </div>

        <div className="container direction margin">
            <h2 className='big-title'>¿Qué dicen nuestros estudiantes?</h2>
            <SliderStudents />
        </div> 

        <div  className="container direction">
            <h2 className='big-title'>Conoce a nuestro equipo</h2>
            <p className="text big-size sin-margin">Expertos guiándote hacia el Éxito</p>
            <SliderMentores />
        </div>

        <div className="container direction">
            <div className='container direction'>
                    <h2 className="big-title">Precios</h2>
                    <p className="text big-size sin-margin">Nuestros planes para que conquistes el mundo digital</p>
            </div>
            <ListPrices />
        </div>

        <div className="container direction">
            <h3 className="big-title">¿Todavia no te decides?</h3>
            <p className="text big-size">Uno de nuestros founders te explica un poco más</p>
            <div>
                <a target="blank" href="https://video.drift.com/v/abMTlR2kxGB2ZO7wFb8ZKbDTgRcziuKo6rOqstr45s9k/?bookMeeting=true">
                    <img className='video' src="assets\image 32.png" alt="video" />
                </a>
            </div>
        </div>
    </>
  )
}

export default MainContain