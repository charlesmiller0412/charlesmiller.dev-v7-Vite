import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../../components/themeToggle";
import { useLoaded } from "../../../../hooks/useLoaded";
export const MobileIcon = (props: any) => {
    const loaded = useLoaded();

    return (
        <div className="mobileIcon fixed top-0 left-0 w-full flex justify-between z-50 bg-none h-[5rem] items-center select-none">
            <div className="mobileIcon__theme pl-[5vw] h-full flex w-[10rem]">
                {loaded ? <ThemeToggle className="text-lg text-blue" /> : ""}
            </div>
            <div className="mobileIcon__hamburger text-blue text-xl pr-[5vw] z-40">
                {props.showMenu === false ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        className=" hover:cursor-pointer"
                        onClick={props.handleClick}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className=" hover:cursor-pointer"
                        onClick={props.handleClick}
                    />
                )}
            </div>
        </div>
    );
};
