import { NavLogo } from "./components/navLogo";
import { NavLinks } from "./components/navLinks";
import { ThemeToggle } from "./components/themeToggle";
import { ResumeBtn } from "./components/resumeBtn";
import { useLoaded } from "../../hooks/useLoaded";
import { SocialLinks } from "../hero/components/social";

export const Navbar = (props: any) => {
    const loaded = useLoaded();

    return (
        <div
            id="navbar"
            className="navbar group hidden tablet:flex bg-black dark:bg-offWhite w-[7rem] hover:w-[25rem] h-screen fixed rounded-r-lg z-50 flex-col gap-20 py-[5rem] overflow-hidden justify-between transition-all"
        >
            <div className="navbar__logo--container px-[.3rem] w-[7rem] grid grid-cols-1 mx-auto">
                <NavLogo />
            </div>
            <div className="navbar__links">
                <NavLinks />
            </div>
            <div className="navbar__bottom">
                <div className="navbar__bottom--theme overflow-hidden mb-5">
                    {loaded ? (
                        <ThemeToggle
                            className="text-[2.4rem] w-[7rem]"
                            theme={props.theme}
                            setTheme={props.setTheme}
                            handleTheme={props.handleTheme}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div className="navbar__bottom--resumeLinks w-[7rem] group-hover:w-[25rem] hover:dark:text-offBlack hover:text-white text-white dark:text-offBlack text-sm flex flex-col gap-3 whitespace-nowrap items-center transition-all">
                    <div className="navbar__bottom--resumeLinks-resume w-full transition-all">
                        <ResumeBtn />
                    </div>
                    <div className="navbar__bottom--resumeLinks-links w-full transition-all flex justify-center">
                        <SocialLinks className="socialLinks text-icons flex gap-5 text-offWhite dark:text-offBlack" />
                    </div>
                </div>
            </div>
        </div>
    );
};
