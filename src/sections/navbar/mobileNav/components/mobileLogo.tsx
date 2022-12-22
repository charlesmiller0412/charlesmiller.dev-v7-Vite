import LogoLight from "../../../../assets/logos/logo.webp";
import LogoDark from "../../../../assets/logos/LogoDark.webp";
import useThemeStore from "../../../../appStore";

export const MobileLogo = (props: any) => {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <div className={props.className}>
            <a href="/">
                <img
                    src={theme === "dark" ? LogoDark : LogoLight}
                    alt="logo"
                    width="87px"
                    height="25px"
                />
            </a>
        </div>
    );
};
