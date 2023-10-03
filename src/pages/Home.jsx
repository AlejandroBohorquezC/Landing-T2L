import NavBar from '../components/NavBar'
import { Button } from '@mui/material'
import Card from '../components/Card'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <NavBar />

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
                <div className="container full-width">
                    <Card
                        img='assets\Rectangle 30.png'
                        title='UX/UI'
                        text='La ruta de UI/UX te llevará a través de diferentes niveles y temas clave para convertirte en un profesional en diseño de productos digit...'
                    />
                    <Card
                        img='assets\Rectangle30.png'
                        title='Project Manager'
                        text='La ruta de Project Manager te llevará a través de diferentes niveles y temas clave para desarrollar habilidades en...'
                    />
                    <Card
                        img='assets\Rectangle30-1.png'
                        title='QA'
                        text='La ruta de QA te proporcionará los conocimientos esenciales para convertirte en un profesional en...'
                    />
                    <Card
                        img='assets\Rectangle30-2.png'
                        title='FullStack Developer'
                        text='A lo largo de esta ruta, desarrollarás las habilidades y conocimientos necesarios para convertirte en un desarrollador versátil y competente...'
                    />
                    <Card
                        img='assets\Rectangle 30-3.png'
                        title='Product Manager'
                        text='La ruta de Product Manager te guiará a través de diferentes niveles y temas clave para convertirte en un profesional en gestión...'
                    />
                    <Card
                        img='assets\Rectangle 30-1.png'
                        title='Liderazgo'
                        text='Descubre una ruta de aprendizaje diseñada para potenciar tu liderazgo y guiarte hacia el éxito profesional. En esta...'
                    />
                </div>
            </div>

            <div className="container direction margin">
                <h2 className='big-title'>¿Qué dicen nuestros estudiantes?</h2>
                <Swiper
                    className='b-s'
                    modules={[ Pagination, A11y]}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="slider-image">
                            <img src="assets\Ellipse7.png" alt="imagen profe" />
                        </div>
                        <div className="slider">
                            <img src="assets\Estrellas.png" alt="estrellas" />
                            <p className='text testimonio'>A mis 34 años decidí dar un giro en mi vida profesional, luego de trabajar por más de 10 años en un campo totalmente diferente, comencé a perseguir mi sueño de ingresar a la industria IT. En esta búsqueda encontré en Tech2life el mejor aliado para acelerar mi aprendizaje, con un roadmap de recursos valiosos, mentorías con referentes de la industria y lo mejor, una simulación del entorno laboral para aplicar en proyectos lo aprendido. Cada día reafirmo que tomé la decisión correcta de ingresar a Tech2life</p>
                            <p className="text big-size testimonio">Cristian Peña</p>
                            <p className="text sin-margin">Profesor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image">
                            <img src="assets\Ellipse7.png" alt="imagen profe" />
                        </div>
                        <div className="slider">
                            <img src="assets\Estrellas.png" alt="estrellas" />
                            <p className='text testimonio'>A mis 34 años decidí dar un giro en mi vida profesional, luego de trabajar por más de 10 años en un campo totalmente diferente, comencé a perseguir mi sueño de ingresar a la industria IT. En esta búsqueda encontré en Tech2life el mejor aliado para acelerar mi aprendizaje, con un roadmap de recursos valiosos, mentorías con referentes de la industria y lo mejor, una simulación del entorno laboral para aplicar en proyectos lo aprendido. Cada día reafirmo que tomé la decisión correcta de ingresar a Tech2life</p>
                            <p className="text big-size testimonio">Cristian Peña</p>
                            <p id='nosotros' className="text sin-margin">Profesor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image">
                            <img src="assets\Ellipse7.png" alt="imagen profe" />
                        </div>
                        <div className="slider">
                            <img src="assets\Estrellas.png" alt="estrellas" />
                            <p className='text testimonio'>A mis 34 años decidí dar un giro en mi vida profesional, luego de trabajar por más de 10 años en un campo totalmente diferente, comencé a perseguir mi sueño de ingresar a la industria IT. En esta búsqueda encontré en Tech2life el mejor aliado para acelerar mi aprendizaje, con un roadmap de recursos valiosos, mentorías con referentes de la industria y lo mejor, una simulación del entorno laboral para aplicar en proyectos lo aprendido. Cada día reafirmo que tomé la decisión correcta de ingresar a Tech2life</p>
                            <p className="text big-size testimonio">Cristian Peña</p>
                            <p className="text sin-margin">Profesor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image">
                            <img src="assets\Ellipse7.png" alt="imagen profe" />
                        </div>
                        <div className="slider">
                            <img src="assets\Estrellas.png" alt="estrellas" />
                            <p className='text testimonio'>A mis 34 años decidí dar un giro en mi vida profesional, luego de trabajar por más de 10 años en un campo totalmente diferente, comencé a perseguir mi sueño de ingresar a la industria IT. En esta búsqueda encontré en Tech2life el mejor aliado para acelerar mi aprendizaje, con un roadmap de recursos valiosos, mentorías con referentes de la industria y lo mejor, una simulación del entorno laboral para aplicar en proyectos lo aprendido. Cada día reafirmo que tomé la decisión correcta de ingresar a Tech2life</p>
                            <p className="text big-size testimonio">Cristian Peña</p>
                            <p className="text sin-margin">Profesor</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 

            <div  className="container direction">
                <h2 className='big-title'>Conoce a nuestro equipo</h2>
                <p className="text big-size sin-margin">Expertos guiándote hacia el Éxito</p>
                <Swiper
                    modules={[ Pagination, A11y]}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="container cards-mentores">
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45.png" alt="Andres Corral" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Andres Corral</h3>
                                    <p className="text rol">Product Manager</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img id='precios' src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-1.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Daniel Lopez</h3>
                                    <p className="text rol">Software Engineer</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-2.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Paul Vidal</h3>
                                    <p className="text rol">Tech Craftsman</p>
                                    <p className="text puesto">Mentor</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container cards-mentores">
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45.png" alt="Andres Corral" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Andres Corral</h3>
                                    <p className="text rol">Product Manager</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-1.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Daniel Lopez</h3>
                                    <p className="text rol">Software Engineer</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-2.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Paul Vidal</h3>
                                    <p className="text rol">Tech Craftsman</p>
                                    <p className="text puesto">Mentor</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container cards-mentores">
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45.png" alt="Andres Corral" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Andres Corral</h3>
                                    <p className="text rol">Product Manager</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-1.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Daniel Lopez</h3>
                                    <p className="text rol">Software Engineer</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-2.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Paul Vidal</h3>
                                    <p className="text rol">Tech Craftsman</p>
                                    <p className="text puesto">Mentor</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container cards-mentores">
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45.png" alt="Andres Corral" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Andres Corral</h3>
                                    <p className="text rol">Product Manager</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-1.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Daniel Lopez</h3>
                                    <p className="text rol">Software Engineer</p>
                                    <p className="text puesto">Co-founder</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                            <div className="container direction b-s card-mentor">
                                <div>
                                    <img src="assets\Rectangle45-2.png" alt="" />
                                </div>
                                <div className='info-mentor'>
                                    <h3 className="text mentor">Paul Vidal</h3>
                                    <p className="text rol">Tech Craftsman</p>
                                    <p className="text puesto">Mentor</p>
                                    <img src="assets\image 14.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="container direction">
                <div className='container direction'>
                        <h2 className="big-title">Precios</h2>
                        <p className="text big-size sin-margin">Nuestros planes para que conquistes el mundo digital</p>
                </div>
                <div className="container heigth">
                    <div className="container direction prices b-s">
                        <div className="container direction">
                            <h3 className="big-title">Plan gratuito</h3>
                            <h4 className="big-title sin-margin">$0</h4>
                            <p className="text aling">Ingresa a nuestra comunidad!</p>
                        </div>
                        <div className="container direction">
                            <div className="container direction prices-info">
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Podras realizar preguntas a la comunidady conocer personas que estan estudiando.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />   
                                    <p className="text sin-margin">Estaras enterado de todos nuestros eventos.</p>
                                </div>
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
                                width: '300px'
                            }}
                        >Aplica ahora</Button>
                    </div>
                    <div className="container direction prices b-s focus">
                        <div className="destacado">
                            <img className='etiqueta' src="assets\Rectangle 52.png" alt="etiqueta destacado" />
                            <p className='text-destacado'>MAS VENDIDO</p>
                        </div>
                        <div className="container direction">
                            <div className="m-t container direction">
                                <h3 className="big-title bold">Plan mensual</h3>
                                <h4 className="big-title sin-margin bold">$25</h4>
                                <p className="text aling">Descubre el camino hacia tu éxito profesional</p>
                            </div>
                            <div className="container direction prices-info">
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Soporte de tutoría personalizada.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Ruta de estudio 100% enfocada en tus objetivos.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Acceso a proyectos prácticos y experiencias de trabajo reales.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Participación en eventos exclusivos y oportunidades de networking.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Actualizaciones de contenido y acceso a nuevas tendencias y tecnologías.</p>
                                </div>
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
                                width: '300px'
                            }}
                        >Aplica ahora</Button>
                    </div>
                    <div className="container direction prices b-s">
                        <div className="container direction">
                            <h3 className="big-title">Plan anual</h3>
                            <h4 className="big-title sin-margin">$250</h4>
                            <p className="text aling">Domina el mundo digital y ahorra US50</p>
                        </div>
                        <div className="container direction">
                            <div className="container direction prices-info">
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Soporte de tutoría personalizada.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Ruta de estudio 100% enfocada en tus objetivos.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Acceso a proyectos prácticos y experiencias de trabajo reales.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Participación en eventos exclusivos y oportunidades de networking.</p>
                                </div>
                                <div className="container">
                                    <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                                    <p className="text sin-margin">Actualizaciones de contenido y acceso a nuevas tendencias y tecnologías.</p>
                                </div>
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
                                width: '300px'
                            }}
                        >Aplica ahora</Button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home