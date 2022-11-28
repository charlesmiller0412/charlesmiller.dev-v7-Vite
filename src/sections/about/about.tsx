import { Headings } from "../../components/headings";
import { GitCommits } from "./components/gitCommits";
import { GithubLanguages } from "./components/githubLanguages";
import { ExperienceCard } from "./components/experienceCard";
import { AboutText } from "./components/aboutText";
import { HeroImg } from "./components/heroImg";

export const About = (props: any) => {
    return (
        <section className="about w-full h-auto tablet:h-screen " id="about">
            <Headings
                h5className="headings__left--h5 text-sm "
                h2className="headings--h2 text-lg tablet:text-xl"
                h5="My Life"
                h2="About Me"
            />
            <div className="about__container w-full h-full tablet:h-3/5 grid grid-cols-1 gap-10 tablet:grid-cols-2 landscape:grid-cols-2 tablet:flex-row tablet:mt-[5rem] max-w-[120rem] m-auto mt-5">
                <div className="about__left w-full grid h-full gap-y-5">
                    <HeroImg />
                    <AboutText />
                </div>

                <div className="w-full m-auto ">
                    <ExperienceCard />
                    <GitCommits />
                    <GithubLanguages />
                </div>
            </div>
        </section>
    );
};
