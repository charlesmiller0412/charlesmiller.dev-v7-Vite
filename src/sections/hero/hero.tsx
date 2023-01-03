import { Button } from "../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectCarousel } from "./components/projectCarousel";

export const Hero = (props: any) => {
    return (
        <section
            className="hero w-full m-auto portrait:h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] tablet:h-screen landscape:h-screen grid place-items-center before:bg-hero-image-light dark:before:bg-hero-image-dark before:bg-no-repeat before:bg-cover before:w-full before:overflow-hidden before:h-screen before:absolute before:-z-10 relative z-10 grid-rows-3 gap-20 grid-cols-1 py-0 tablet:py-10 landscape:py-10"
            id="hero"
        >
            <div className="hero__main font-medium text-md tablet:text-lg desktop:text-xl text-center text--offBlack dark:text-offWhite tracking-widest row-span-2 self-end">
                <div className="font-rival dark:text-lightBlue text-lightBlue text-lg tablet:text-xl desktop:text-xxl font-semiBold grid place-items-center">
                    <div className="typingHello w-[13rem] tablet:w-[19rem] desktop:w-[27rem]">
                        Hello World!
                    </div>
                </div>

                <h1 className="font-rival text-lg tablet:text-xl desktop:text-xxl font-bold tracking-widest">
                    <span className="font-rival text-lg tablet:text-xl desktop:text-xxl font-bold tracking-widest mr-5">
                        I'm
                    </span>
                    Charles Miller
                </h1>
                <div className="font-light">
                    Front-end developer | UX/UI Designer <br /> ...and this is
                    my portfolio.
                </div>
                <div className="hero__buttons grid grid-cols-2 desktop:gap-36 mt-10 desktop:mt-20 place-items-center">
                    <a href="#projects" className="w-fit">
                        <Button
                            className="btn btn__primary w-[12rem] tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                            text="See my work"
                            icon={faAnglesRight}
                        />
                    </a>
                    <a href="#contact" className="w-fit">
                        <Button
                            className="btn btn__secondary w-[12rem] tablet:landscape:w-[12rem] landscape:w-[10rem] whitespace-nowrap dark:border dark:border-offWhite border border-black"
                            text="Contact Me"
                            icon={faAnglesRight}
                        />
                    </a>
                </div>
            </div>
            <div className="hero__bottom self-center row-span-2 tablet:self-end landscape:self-center justify-self-center">
                <ProjectCarousel projects={props.projects} />
            </div>
        </section>
    );
};
