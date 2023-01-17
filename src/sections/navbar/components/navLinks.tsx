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

    const navLinks = [
        {
            name: "home",
            link: "#hero",
            id: "heroLink",
            icon: faHouse,
        },
        {
            name: "my work",
            link: "#projects",
            id: "projectLink",
            icon: faBriefcase,
        },
        {
            name: "my specialties",
            link: "#skills",
            id: "skillsLink",
            icon: faListCheck,
        },
        {
            name: "about me",
            link: "#about",
            id: "aboutLink",
            icon: faUser,
        },
        {
            name: "contact me",
            link: "#contact",
            id: "contactLink",
            icon: faPen,
        },
    ];
    return (
        <div className="navbar__links flex flex-col gap-[3rem] overflow-hidden font-medium justify-start">
            {navLinks.map((link: any) => (
                <a
                    href={link.link}
                    id={link.id}
                    key={link.name}
                    className={
                        activeLink == link.id
                            ? "active dark:before:bg-black before:bg-offWhite cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-black dark:text-offWhite text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                            : "cursor-pointer w-[25rem] h-[4rem] hover:text-blue dark:hover:text-blue text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 items-center whitespace-nowrap"
                    }
                >
                    <FontAwesomeIcon
                        icon={link.icon}
                        className="text-[2rem] w-[7rem]"
                    />
                    {link.name}
                </a>
            ))}
        </div>
    );
};
