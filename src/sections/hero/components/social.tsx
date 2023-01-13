import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faPinterest,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
export const SocialLinks = (props: any) => {
    return (
        <div className={props.className}>
            <a
                href="https://www.github.com/charlesmiller0412"
                target="__blank"
                aria-label="My GitHub Account"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.linkedin.com/in/charlesmiller0412"
                target="__blank"
                aria-label="My LinkedIn Profile"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://twitter.com/millersWebDev"
                target="__blank"
                aria-label="My Twitter Account"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* <a
                href="https://pinterest.com/charlesmiller0412"
                target="__blank"
                aria-label="My Pinterest Account"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faPinterest} />
            </a> */}
            <a
                href="https://instagram.com/millerswebdev"
                target="__blank"
                aria-label="My Instagram Account"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="mailto:charles@charlesmiller.dev"
                target="__blank"
                aria-label="Email me at charles@charlesmiller.dev"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-blue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faAt} />
            </a>
        </div>
    );
};
