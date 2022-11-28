import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBriefcase,
    faListCheck,
    faUser,
    faFileLines,
    faPen,
} from "@fortawesome/free-solid-svg-icons";

export const NavLinks = () => {
    return (
        <div className="navbar__links flex flex-col gap-[3rem] overflow-hidden font-medium justify-start">
            <a
                href="#hero"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
            >
                <FontAwesomeIcon
                    icon={faHouse}
                    className="text-[2rem] w-[7rem]"
                />
                Home
            </a>
            <a
                href="#projects"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
            >
                <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-[2rem] w-[7rem]"
                />
                My Work
            </a>
            <a
                href="#skills"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
            >
                <FontAwesomeIcon
                    icon={faListCheck}
                    className="text-[2rem] w-[7rem]"
                />
                My Specialties
            </a>
            <a
                href="#about"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-[2rem] w-[7rem]"
                />
                About Me
            </a>
            <a
                href="#blog"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
            >
                <FontAwesomeIcon
                    icon={faFileLines}
                    className="text-[2rem] w-[7rem]"
                />
                Latest Blogs
            </a>
            <a
                href="#contact"
                className="cursor-pointer w-[25rem] hover:dark:text-blue hover:text-lightBlue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
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
