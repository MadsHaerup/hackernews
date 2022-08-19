import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import 'swiper/css';
import CarouselData from '../../types/carousel';
import dateFormat from '../../utils/dateFormat';
import styles from '../../styles/Carousel.module.scss';

const Carousel = ({stories}:CarouselData) => {

  const config:SwiperProps = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 60
      }
    },
    autoplay:{
      delay: 2300,
      disableOnInteraction: true,
    },
    modules:[Autoplay],
  };
  return (
    <Swiper
      className={styles.container}
    {...config}
    >
      <>
      {
        stories.map((story)=>(
          <SwiperSlide key={story.id}>
            <a rel="noreferrer" href={story.url} target="blank">
            <div className={styles.meta}>
              <strong className={styles.author}>{story.by}</strong>
              <span>{dateFormat(story.time)}</span>
            </div>
            <h2 className={styles.title}>{story.title}</h2>
          </a>
          </SwiperSlide>

        ))
      }
      </>
    </Swiper>
  );
};

export default Carousel;