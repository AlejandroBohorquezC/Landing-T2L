import React from 'react'
import NavBar from '../components/NavBar'
import { Button } from '@mui/material'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
        <NavBar />

        <div className="container separacion">
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
                    <p className='text resalto'>¡No esperes más, da un pequeño pero significativo cambio en tu vida y aplica ahora!</p>
                </div>
                <div className='second-image'>
                    <img src="assets\image31.png" alt="seo image" />
                </div>
            </div>
        </div>

        <div className="container direction separacion">
            <h2 className='big-title'>Nuestras rutas</h2>
            <p className='text m-t'>Descubre el mundo del desarrollo y preparate en:</p>
            <div className="container full-width">
                <Card className='card'>Hola</Card>
                <p className='card'>hola</p>
                <p className='card'>hola</p>
                <p className='card'>hola</p>
                <p className='card'>hola</p>
                <p className='card'>hola</p>
            </div>
        </div>
    </>
  )
}

export default Home