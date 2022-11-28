import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useThemeStore from "../../../appStore";

export const ThemeToggle = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);
    const setTheme = useThemeStore((state: any) => state.setTheme);

    return (
        <button
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            {theme === "dark" ? (
                <div className="sun cursor-pointer w-[25rem] grid grid-cols-3 items-end hover:text-blue">
                    <FontAwesomeIcon icon={faSun} className={props.className} />
                    <span className="hidden tablet:flex  text-white dark:text-offBlack text-sm tracking-[.6rem] whitespace-nowrap">
                        Dark Mode
                    </span>
                </div>
            ) : (
                <div className="sun cursor-pointer w-[25rem] grid grid-cols-3 items-end hover:text-blue">
                    <FontAwesomeIcon
                        icon={faMoon}
                        className={props.className}
                    />
                    <span className="hidden tablet:flex text-white dark:text-offBlack text-sm tracking-[.6rem] whitespace-nowrap">
                        Light Mode
                    </span>
                </div>
            )}
        </button>
    );
};
