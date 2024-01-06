import { Headings } from "../components/headings";
import {
    faPen,
    faLayerGroup,
    faCode,
    faServer,
    faFolderTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

    const skills = [
        {
            icon: faPen,
            title: "UX/UI Design",
            text: "I specialize in creating unique user experiences by skillfully designing user interfaces, setting a compelling standard that distinguishes my work among websites and applications. Through a meticulous approach, I ensure that each design not only stands out aesthetically but also enhances overall usability, creating a lasting impact for users.",
        },
        {
            icon: faLayerGroup,
            title: "Front-end Development",
            text: "This is where my true passion is. I take pleasure in creating reusable components and customizing interfaces using TailwindCSS, MaterialUI, Bootstrap, or even in-depth (but organized) SCSS trees. Whether it’s working with CSS or TypeScript/JavaScript, these aspects of the craft bring me genuine enjoyment.",
        },
        {
            icon: faServer,
            title: "Back-end Development",
            text: "Beyond creating engaging user interfaces, I seamlessly integrate database and API data, incorporating cutting-edge technologies like MongoDB, PostgreSQL, and Express. This ensures not only visually appealing designs but also robust and efficient functionality, delivering a comprehensive user experience.",
        },
        {
            icon: faAccessibleIcon,
            title: "Accessibility",
            text: "Issues within ADA compliance can significantly impede both web analytics and user experiences, especially for individuals with disabilities. Considerations ranging from contrast to screen reader compatibility and animation preferences are often overlooked but play a pivotal role in ensuring inclusivity. It’s crucial to create a web environment that is accessible and user-friendly for everyone.",
        },
        {
            icon: faCode,
            title: "Clean & Commented Code",
            text: "Ensuring code maintainability is imperative. Recognizing that multiple developers may contribute to your project, I prioritize incorporating proper comments and easily understandable variables. These practices are fundamental in guaranteeing the longevity of your project, allowing it to endure and evolve seamlessly over time.",
        },
        {
            icon: faFolderTree,
            title: "Search Engine Optimization",
            text: "The purpose of a website is defeated if it goes unnoticed. Leveraging my research skills, I strategically determine optimal tags and metadata to embed in your files, ensuring that your website not only ranks high but stands out prominently on search results pages. This meticulous approach enhances visibility, making your online presence both impactful and easily discoverable.",
        },
    ];

    const SkillsCard = (props: any) => {
      return (
          <div
              className={
                  "skillsCard transition-all relative w-full tablet:landscape:w-[37rem] tablet:w-[38rem] h-full tablet:h-[26rem] bg-black dark:bg-white cursor-default rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.2)] border-[.02rem] border-[rgba(65,65,65,.05)] dark:border-[rgba(150,150,150,0.6)] px-[3rem] tablet:px-[3.5rem] pb-[2.6rem] pt-[4.5rem] flex flex-col justify-between " +
                  props.className
              }
          >
              <div className="skillCard__icon bg-lightBlue text-lg rounded-full w-[7rem] h-[7rem] absolute top-0 -translate-y-1/2 left-[3.5rem] grid place-items-center text-black">
                  <FontAwesomeIcon icon={props.icon} />
              </div>
              <span className="text-sm capitalize tablet:text-md whitespace-nowrap text-white dark:text-black font-semiBold leading-[3.3rem]">
                  {props.title}
              </span>
              <p className="text-xxs tablet:text-sm font-regular leading-md tablet:leading-lg text-offWhite dark:text-offBlack">
                  {props.text}
              </p>
          </div>
      );
  };

    return (
        <section className="skills min-h-screen grid items-center" id="skills">
            <Headings
                className="w-full flex flex-col items-start mb-5 tablet:mb-[5rem]"
                h2="My Skills"
                h2className="headings--h2 headings__left--h2"
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
