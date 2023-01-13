import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../../components/themeToggle";
import { useLoaded } from "../../../../hooks/useLoaded";
export const MobileIcon = (props: any) => {
    const loaded = useLoaded();

    return (
        <div className="mobileIcon fixed top-0 left-0 w-full flex justify-between z-50 bg-none h-[5rem] items-center select-none">
            <div className="mobileIcon__theme pl-[5vw] h-full w-[10rem] flex items-center mt-5">
                <div className="mobileIcon__theme--container flex h-fit bg-black dark:bg-offWhite w-fit p-2 rounded-lg">
                    {loaded ? (
                        <ThemeToggle className="text-lg text-blue mx-auto w-[3rem] h-[2.5rem]" />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="mobileIcon__hamburger text-blue text-xl pr-[5vw] z-40 mt-5">
                <div className="mobileIcon__theme--container flex h-fit bg-black dark:bg-offWhite w-fit p-2 rounded-lg">
                    {props.showMenu === false ? (
                        <FontAwesomeIcon
                            icon={faBars}
                            className=" hover:cursor-pointer w-[3rem] h-[2.5rem]"
                            onClick={props.handleClick}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faXmark}
                            className=" hover:cursor-pointer w-[3rem] h-[2.5rem]"
                            onClick={props.handleClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
