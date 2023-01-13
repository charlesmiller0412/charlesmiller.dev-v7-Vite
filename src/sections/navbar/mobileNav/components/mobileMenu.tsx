import { SocialLinks } from "../../../hero/components/social";
import { MobileLogo } from "../components/mobileLogo";
import { ResumeBtn } from "../../components/resumeBtn";
import useNavScroll from "../../../../hooks/useNavScroll";

export const MobileMenu = (props: any) => {
    const activeLink = useNavScroll();

    return (
        <div
            className={
                props.showMenu === true
                    ? "mobileMenu fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-40 flex flex-col items-center justify-evenly text-center duration-1000 text-black dark:text-white pt-[7vh] landscape:pt-0 landscape:flex-row landscape:text-left landscape:top-0 landscape:h-full opacity-100"
                    : "mobileMenu fixed top-0 left-[200%] w-full h-screen bg-white dark:bg-black z-40 flex flex-col items-center justify-evenly text-center duration-1000 text-black dark:text-white pt-[7vh] landscape:flex-row landscape:text-left landscape:-top-[200%] landscape:left-0"
            }
        >
            <ul className="">
                <li className="py-[1.5vh]">
                    {
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            href="#"
                            className={
                                activeLink == "heroLink"
                                    ? "text-md font-bold hover:text-blue text-blue"
                                    : "text-md font-bold hover:text-blue"
                            }
                            onClick={props.handleClick}
                        >
                            Home
                        </a>
                    }
                </li>
                <li className="py-[1.5vh]">
                    <a
                        href="#projects"
                        className={
                            activeLink == "projectLink"
                                ? "text-md font-bold hover:text-blue text-blue"
                                : "text-md font-bold hover:text-blue"
                        }
                        onClick={props.handleClick}
                    >
                        My Work
                    </a>
                </li>
                <li className="py-[1.5vh]">
                    <a
                        href="#skills"
                        className={
                            activeLink == "skillsLink"
                                ? "text-md font-bold hover:text-blue text-blue"
                                : "text-md font-bold hover:text-blue"
                        }
                        onClick={props.handleClick}
                    >
                        My Specialties
                    </a>
                </li>
                <li className="py-[1.5vh]">
                    <a
                        href="#about"
                        className={
                            activeLink == "aboutLink"
                                ? "text-md font-bold hover:text-blue text-blue"
                                : "text-md font-bold hover:text-blue"
                        }
                        onClick={props.handleClick}
                    >
                        About Me
                    </a>
                </li>
                <li className="py-[1.5vh]">
                    <a
                        href="#contact"
                        className={
                            activeLink == "contactLink"
                                ? "text-md font-bold hover:text-blue text-blue"
                                : "text-md font-bold hover:text-blue"
                        }
                        onClick={props.handleClick}
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
            <div className="mobileMenu__social w-3/4 landscape:w-1/2 landscape:flex landscape:flex-col landscape:items-center landscape:justify-between landscape:h-1/2">
                <MobileLogo className="navbar__logo w-[8.7rem] h-[2.5rem] relative m-auto portrait:mb-12" />
                <ResumeBtn className="text-black" type="light" />
                <SocialLinks
                    className="w-full flex justify-between py-12 landscape:w-1/2 landscape:m-auto landscape:py-0"
                    onClick={props.handleClick}
                />
            </div>
        </div>
    );
};
