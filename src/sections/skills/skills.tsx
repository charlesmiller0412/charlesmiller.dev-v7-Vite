import { Headings } from "../../components/headings";
import { SkillsCard } from "./components/skillsCard";
import {
    faPen,
    faLayerGroup,
    faCode,
    faServer,
    faFolderTree,
} from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    const skills = [
        {
            icon: faPen,
            title: "UX/UI Design",
            text: "I create unique user experiences through skillfully created user interface design that stands out among other websites and applications.",
        },
        {
            icon: faLayerGroup,
            title: "Front-end Development",
            text: "This is my true enjoyment in web development. From creating reusable components to customizing MaterialUI & Bootstrap. If It’s CSS and TypeScript/JavaScript, then it’s something I enjoy.",
        },
        {
            icon: faServer,
            title: "Back-end Development",
            text: "While I prefer the front-end cycle of development, I also have to implement database and API data so I make sure to keep up with the latest tech such as MongoDB and Express.",
        },
        {
            icon: faAccessibleIcon,
            title: "Accessibility",
            text: "ADA issues can really hinder your web analytics as well as the user-experience for those with disabilites. From simple things like contrast to screenreaders and animation preferences. These are things often overlooked and shouldn’t be.",
        },
        {
            icon: faCode,
            title: "Clean & Commented Code",
            text: "Maintainable code is a must have. I know I won’t be the only developer working on your project, so proper comments and easily understood variables are key to making sure your project lasts as long as you want it to.",
        },
        {
            icon: faFolderTree,
            title: "Search Engine Optimization",
            text: "What’s the point of having a website if no one can find it? I use my research skills to determine the best tags and meta data to store in your files and put you at the top of the search results page.",
        },
    ];
    return (
        <section className="skills" id="skills">
            <Headings
                className="w-full flex flex-col items-start mb-5 tablet:mb-[5rem]"
                h2="My Skills"
                h2className="headings--h2 headings__left--h2 text-lg"
            />
            <div className="skills__container grid grid-cols-1 landscape:grid-cols-2 landscape:desktop:grid-cols-3 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-20 gap-5 place-items-center max-w-[120rem] m-auto">
                {skills.map((skill: any) => (
                    <SkillsCard
                        icon={skill.icon}
                        title={skill.title}
                        text={skill.text}
                        key={skill.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
