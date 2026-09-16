import { Button } from "../components/button";
import { Headings } from "../components/headings";
import { faAnglesRight, faImages } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const project_list = [
    {
        id: "planara",
        title: "Planara",
        type: "Cross-Platform App",
        description:
            "A cross-platform personal finance app with native iOS and Android clients and a web dashboard, all sharing a single TypeScript monorepo. Backed by Supabase with TanStack Query for data and NativeWind for styling.",
        tech: [
            "TypeScript",
            "React Native",
            "Expo",
            "Next.js",
            "Supabase",
            "TanStack Query",
        ],
        link: {
            href: "https://planara.app",
            text: "View site",
            icon: faAnglesRight,
        },
    },
    {
        id: "dutchBros",
        title: "Dutch Bros Redesign",
        type: "Frontend & UX",
        description:
            "A usability study and full visual redesign of the Dutch Bros site. Design comps were produced in Photoshop, then built out as responsive, hand-written HTML and CSS across the home, menu, shop, and story pages.",
        tech: ["HTML", "CSS", "UX Research", "Photoshop"],
        link: {
            href: "/dutchbros/index.html",
            text: "View designs",
            icon: faImages,
        },
    },
    {
        id: "natours",
        title: "Natours",
        type: "Frontend",
        description:
            "An animated marketing landing page built to push advanced Sass techniques, featuring custom keyframe animations, clip-path shapes, and a fully responsive layout driven by the BEM methodology.",
        tech: ["HTML", "Sass/SCSS", "BEM"],
        link: {
            href: "https://github.com/charlesmiller0412/natours",
            text: "View code",
            icon: faGithub,
        },
    },
    {
        id: "weatherApp",
        title: "Weather App",
        type: "Frontend",
        description:
            "A React weather app that pulls live conditions from a REST weather API and presents them through a clean Material UI interface with a responsive, component-driven layout.",
        tech: ["React", "JavaScript", "Material UI", "REST API"],
        link: {
            href: "https://github.com/charlesmiller0412/weatherApp",
            text: "View code",
            icon: faGithub,
        },
    },
];

const Projects = () => {
    const renderLink = (link: any) => {
        if (!link) {
            return null;
        }
        return (
            <a
                href={link.href}
                target="__blank"
                rel="noreferrer"
                className="card__link self-start"
            >
                <Button
                    className="cardBtn cardBtn__dark flex items-center border-2 border-offBlack dark:border-offWhite rounded-[.4rem] px-8 py-2 text-offBlack dark:text-offWhite text-xs tracking-wide hover:text-blue dark:hover:text-blue transition-all"
                    text={link.text}
                    icon={link.icon}
                />
            </a>
        );
    };

    const ProjectCard = (props: any) => (
        <div className="card bg-offWhite dark:bg-cardBG rounded-[.4rem] flex flex-col gap-6 p-8 shadow-[0_4px_4px_0_rgba(0,0,0,.25)] dark:shadow-[0_4px_4px_0_rgba(255,255,255,.25)] h-full">
            <div className="card__header flex flex-col gap-1">
                <span className="text-base text-blue font-semiBold leading-base">
                    {props.project.title}
                </span>
                <span className="text-xxs uppercase tracking-[.3rem] text-offBlack dark:text-offWhite">
                    {props.project.type}
                </span>
            </div>
            <p className="card__description font-medium text-xs leading-base text-offBlack dark:text-offWhite tracking-wide">
                {props.project.description}
            </p>
            <ul className="card__tech grid grid-cols-2 tablet:grid-cols-3 gap-3 text-center uppercase mt-auto">
                {props.project.tech.map((item: string) => (
                    <li
                        key={item}
                        className="bg-blue rounded-xl py-1 text-offBlack text-xxs"
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {renderLink(props.project.link)}
        </div>
    );

    return (
        <section
            className="projects min-h-screen grid items-center"
            id="projects"
        >
            <Headings
                className="w-full flex flex-col items-start mb-5 tablet:mb-[5rem]"
                h2className="headings--h2 headings__left--h2"
                h2="My Work"
            />
            <div className="projects__container grid grid-cols-1 tablet:grid-cols-2 gap-y-14 gap-5 desktop:gap-x-28 place-items-stretch max-w-[120rem] m-auto w-full">
                {project_list.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <a
                href="https://github.com/charlesmiller0412"
                target="__blank"
                rel="noreferrer"
            >
                <Button
                    className="btn__primary mx-auto text-white mt-14 flex btn btn__light--blue dark:border-offWhite border-offBlack border-2 dark:hover:text-offWhite tablet:whitespace-nowrap w-fit px-20 h-fit items-center"
                    text="See more on GitHub"
                    icon={faAnglesRight}
                />
            </a>
        </section>
    );
};

export default Projects;
