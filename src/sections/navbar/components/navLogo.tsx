import LogoLight from "../../../assets/logos/logo.svg";
import LogoDark from "../../../assets/logos/LogoDark.svg";
import useThemeStore from "../../../appStore";

export const NavLogo = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <div className={props.className}>
            <a href="/">
                <img src={theme === "dark" ? LogoLight : LogoDark} alt="logo" />
            </a>
        </div>
    );
};
