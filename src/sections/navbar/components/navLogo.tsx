import LogoLight from "../../../assets/logos/navLogoLight.png";
import LogoDark from "../../../assets/logos/logoDarkNew.png";
import useThemeStore from "../../../appStore";

export const NavLogo = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <div className={props.className}>
            <a href="/">
                <img
                    src={theme === "dark" ? LogoLight : LogoDark}
                    alt="logo"
                    width="64px"
                    height="18px"
                />
            </a>
        </div>
    );
};
