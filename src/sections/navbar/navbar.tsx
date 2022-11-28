import React from "react";
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
            className="navbar hidden tablet:flex bg-black dark:bg-offWhite w-[7rem] hover:w-[30rem] h-screen fixed rounded-r-lg z-50 flex-col gap-20 py-[5rem] overflow-hidden justify-between transition-all"
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
                            className="text-[2.4rem] text-offWhite dark:text-offBlack w-[7rem] hover:text-blue hover:dark:text-blue"
                            theme={props.theme}
                            setTheme={props.setTheme}
                            handleTheme={props.handleTheme}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div className="navbar__bottom--resumeLinks w-[25rem] hover:dark:text-offBlack hover:text-white text-white dark:text-offBlack text-sm tracking-[.6rem] grid grid-cols-3 whitespace-nowrap items-center">
                    <div className="navbar__bottom--resumeLinks-resume w-[7rem]">
                        <ResumeBtn />
                    </div>
                    <div className="navbar__bottom--resumeLinks-links">
                        <SocialLinks className="socialLinks text-icons flex gap-5 text-offWhite dark:text-offBlack" />
                    </div>
                </div>
            </div>
        </div>
    );
};
