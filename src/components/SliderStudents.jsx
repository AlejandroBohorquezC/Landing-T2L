import { A11y, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { students } from '../data/students';

const SliderStudents = () => {
  return (
    <Swiper
        className='b-s'
        modules={[ Pagination, A11y]}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
    >
        {
            students.map(({img, text, rol, name}) => (
                <SwiperSlide key={img}>
                    <div className="slider-image">
                        <img src={img} alt={`image ${name}`} />
                    </div>
                    <div className="slider">
                        <img src="assets\Estrellas.png" alt="estrellas" />
                        <p className='text testimonio'>{text}</p>
                        <p className="text big-size testimonio">{name}</p>
                        <p className="text sin-margin">{rol}</p>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default SliderStudents