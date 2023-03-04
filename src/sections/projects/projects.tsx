import { Button } from "../../components/button";
import { Headings } from "../../components/headings";
import { ProjectCard } from "./components/projectCard";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Projects = (props: any) => {
    return (
        <section
            className="projects min-h-screen grid items-center"
            id="projects"
        >
            <Headings
                className="w-full flex flex-col items-start mb-5 tablet:mb-[5rem]"
                h2className="headings--h2 headings__left--h2"
                h2="Featured Projects"
            />
            <div className="projects__container grid grid-cols-1 landscape:grid-cols-2 tablet:grid-cols-2 desktop:landscape:grid-cols-3 gap-y-14 gap-5 desktop:gap-x-28 place-items-center max-w-[120rem] m-auto min-h-full">
                {props.projects.map((project: any) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
            <a
                href="https://charlesmiller.dev/projectDatabase"
                target="__blank"
            >
                <Button
                    className="mx-auto mt-14 flex btn btn__light--blue bg-blue dark:border-offWhite hover:bg-offWhite border-offBlack border-2 dark:hover:bg-offBlack dark:hover:text-offWhite tablet:whitespace-nowrap w-fit px-20 h-fit items-center"
                    text="View all projects in my database"
                    icon={faAnglesRight}
                />
            </a>
        </section>
    );
};

export default Projects;
