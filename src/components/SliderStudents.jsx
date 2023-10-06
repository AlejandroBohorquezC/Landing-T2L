import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderStudents = () => {
  return (
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
  )
}

export default SliderStudents