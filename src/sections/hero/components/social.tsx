import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
export const SocialLinks = (props: any) => {
    const socialLinks = [
        {
            name: "github",
            link: "https://www.github.com/charlesmiller0412",
            icon: faGithub,
            label: "My GitHub Account",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/charlesmiller0412",
            icon: faLinkedin,
            label: "My LinkedIn Profile",
        },
        {
            name: "instagram",
            link: "https://instagram.com/millerswebdev",
            icon: faInstagram,
            label: "My Instagram Account",
        },
        {
            name: "email",
            link: "mailto:charles@charlesmiller.dev",
            icon: faAt,
            label: "Email me at charles@charlesmiller.dev",
        },
    ];

    return (
        <div className={props.className}>
            {socialLinks.map((link: any) => (
                <a
                    href={link.link}
                    target="__blank"
                    aria-label={link.label}
                    key={link.name}
                    onClick={props.onClick}
                    className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
                >
                    <FontAwesomeIcon icon={link.icon} />
                </a>
            ))}
        </div>
    );
};
