import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBriefcase,
    faListCheck,
    faUser,
    faFileLines,
    faPen,
} from "@fortawesome/free-solid-svg-icons";
import useNavScroll from "../../../hooks/useNavScroll";

export const NavLinks = () => {
    const activeLink = useNavScroll();

    return (
        <div className="navbar__links flex flex-col gap-[3rem] overflow-hidden font-medium justify-start">
            <a
                href="#hero"
                id="heroLink"
                className={
                    activeLink == "heroLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faHouse}
                    className="text-[2rem] w-[7rem]"
                />
                Home
            </a>
            <a
                href="#projects"
                className={
                    activeLink == "projectLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-[2rem] w-[7rem]"
                />
                My Work
            </a>
            <a
                href="#skills"
                className={
                    activeLink == "skillsLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faListCheck}
                    className="text-[2rem] w-[7rem]"
                />
                My Specialties
            </a>
            <a
                href="#about"
                className={
                    activeLink == "aboutLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-[2rem] w-[7rem]"
                />
                About Me
            </a>
            {/* <a
                href="#blog"
                className={
                    activeLink == "blogLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faFileLines}
                    className="text-[2rem] w-[7rem]"
                />
                Latest Blogs
            </a> */}
            <a
                href="#contact"
                className={
                    activeLink == "contactLink"
                        ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                        : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                }
            >
                <FontAwesomeIcon
                    icon={faPen}
                    className="text-[2rem] w-[7rem]"
                />
                Contact Me
            </a>
        </div>
    );
};
