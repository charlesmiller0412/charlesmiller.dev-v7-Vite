import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";

export const ProjectCarousel = (props: any) => {
    return (
        <div className="projectCarousel w-[40rem] tablet:w-[80rem]">
            <Swiper
                effect={"coverflow"}
                centeredSlides={false}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                {props.projects.map((project: any) => (
                    <SwiperSlide key={project._id} className="w-full h-full">
                        <div className="w-full h-full relative">
                            <img
                                src={project.carouselImage}
                                alt={project.title}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
