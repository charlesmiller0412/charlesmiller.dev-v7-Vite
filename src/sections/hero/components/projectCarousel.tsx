import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";
import Lottie from "react-lottie";
import Loading from "../../../assets/logos/loadingLogo.json";
import Error from "../../../assets/logos/errorDino.json";

export const ProjectCarousel = (props: any) => {
    let content;

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: Error,
    };

    if (props.loading) {
        content = (
            <div className="flex w-full justify-center items-center">
                <Lottie options={logoOptions} height={60} width={200} />
            </div>
        );
    } else if (props.error) {
        content = <Lottie options={errorOptions} />;
    } else {
        content = (
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
                        <picture className="w-full h-full relative aspect-square">
                            <img
                                src={project.carouselImage}
                                alt={project.title}
                            />
                        </picture>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
    return (
        <div className="projectCarousel w-[40rem] tablet:w-[80rem]">
            {content}
        </div>
    );
};
