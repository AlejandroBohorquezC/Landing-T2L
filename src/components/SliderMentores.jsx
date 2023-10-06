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
                <CardMentor image='assets\Rectangle45.png' name='Andrés Corral' rol='Product Manager' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-1.png' name='Daniel Lopez' rol='Software Engineer' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-2.png' name='Paul Vidal' rol='Tech Craftsman' puesto='Mentor' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='assets\Rectangle45.png' name='Andrés Corral' rol='Product Manager' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-1.png' name='Daniel Lopez' rol='Software Engineer' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-2.png' name='Paul Vidal' rol='Tech Craftsman' puesto='Mentor' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='assets\Rectangle45.png' name='Andrés Corral' rol='Product Manager' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-1.png' name='Daniel Lopez' rol='Software Engineer' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-2.png' name='Paul Vidal' rol='Tech Craftsman' puesto='Mentor' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="container cards-mentores">
                <CardMentor image='assets\Rectangle45.png' name='Andrés Corral' rol='Product Manager' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-1.png' name='Daniel Lopez' rol='Software Engineer' puesto='Co-founder' />
                <CardMentor image='assets\Rectangle45-2.png' name='Paul Vidal' rol='Tech Craftsman' puesto='Mentor' />
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default SliderMentores