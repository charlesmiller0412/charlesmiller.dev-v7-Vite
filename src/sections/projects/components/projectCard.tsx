import { Button } from "../../../components/button";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Lottie from "react-lottie";
import Loading from "../../../assets/logos/loadingLogo.json";
import Error from "../../../assets/logos/errorDino.json";

export const ProjectCard = (props: any) => {
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
            <div className="card aspect-auto tablet:h-[26rem] tablet:w-[37rem] bg-offWhite rounded-[.4rem] flex flex-col overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,.25)] dark:shadow-[0_4px_4px_0_rgba(255,255,255,.25)] relative">
                <picture className="card__image w-full h-5/6 relative">
                    <img
                        src={props.project.imgurl}
                        alt={props.project.title}
                        className="card__image aspect-auto"
                        height={400}
                        width={400}
                    />
                </picture>
                <div className="card__links w-full flex justify-evenly self-end z-20 bg-offWhite h-[1/6]">
                    <a href={props.project.siteurl} target="__blank">
                        <Button
                            className="cardBtn cardBtn__light"
                            text="View site"
                            icon={faAnglesRight}
                        />
                    </a>
                    <a href={props.project.codeurl} target="__blank">
                        <Button
                            className="cardBtn cardBtn__dark"
                            text="View code"
                            icon={faAnglesRight}
                        />
                    </a>
                </div>
                <div className="card__overlay absolute top-0 left-0 w-full h-[calc(100%-15%)] tablet:h-5/6 min-h-fit bg-gradient-to-r from-cardBG to-cardBG z-10 flex justify-evenly flex-col px-5 opacity-0 active:opacity-100 hover:opacity-100 hover:cursor-crosshair transition-all tablet:portrait:justify-evenly">
                    <span className="text-base text-blue font-semiBold leading-base">
                        {props.project.title}
                    </span>
                    <p className="font-medium tablet:flex text-xs leading-0 text-white tracking-wide h-1/2 overflow-auto">
                        {props.project.description}
                    </p>
                    <ul className="px-3 mb-3 grid grid-cols-3 gap-3 text-center uppercase">
                        {props.project.languages.map((language: any) => (
                            <li
                                key={uuidv4()}
                                className="bg-blue rounded-xl py-1 text-offBlack text-xxs"
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return <>{content}</>;
};
