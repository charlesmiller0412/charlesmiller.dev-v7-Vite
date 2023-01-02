import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";
import Loading from "../../../assets/logos/loadingLogo.webm";
import Error from "../../../assets/logos/errorDino.webm";

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
                        {props.loading ? (
                            <video
                                autoPlay
                                className="flex w-full justify-center items-center"
                                muted
                                loop
                            >
                                <source
                                    src={Loading}
                                    type="video/webm"
                                    height={60}
                                    width={200}
                                />
                            </video>
                        ) : props.error ? (
                            <video
                                autoPlay
                                className="flex w-full justify-center items-center"
                                muted
                                loop
                            >
                                <source
                                    src={Error}
                                    type="video/webm"
                                    height={60}
                                    width={200}
                                />
                            </video>
                        ) : (
                            <picture className="w-full h-full relative aspect-square">
                                <img
                                    src={project.carouselImage}
                                    alt={project.title}
                                    height="50"
                                    width="300"
                                />
                            </picture>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
