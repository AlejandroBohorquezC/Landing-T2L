import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import CardMentor from './CardMentor';

const SliderMentores = () => {
  return (
    <Swiper
        modules={[ Pagination, A11y]}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
    >
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='assets/Rectangle45.png' mentor='Andrés Corral' rol='Product Manager' puesto='Co-founder' />
                <CardMentor image='assets/Rectangle45-1.png' mentor='Daniel Lopez' rol='Software Engineer' puesto='Co-founder' />
                <CardMentor image='assets/Rectangle45-2.png' mentor='Paul Vidal' rol='Tech Craftsman' puesto='Mentor' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='/assets/angello.png' mentor='Angello Vásquez' rol='Product Analyst' puesto='Mentor' />
                <CardMentor image='/assets/emmanuel.png' mentor='Emmanuel Cervera' rol='Engineering Manager' puesto='Tech Mentor' />
                <CardMentor image='/assets/kiara.png' mentor='Kiara Ferruzo' rol='Sr UX-UI designer' puesto='Mentora' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='/assets/juan_carlos.png' mentor='Juan Carlos Rodriguez' rol='Mobile Dev' puesto='Tech Mentor' />
                <CardMentor image='/assets/shon.png' mentor='Jhon Rojas' rol='Project Manager' puesto='Mentor' />
                <CardMentor image='/assets/sebastian.png' mentor='Sebastian Aldana' rol='Full-Stack Web Developer' puesto='Tech Mentor' />
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default SliderMentores