import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faPinterest,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const SocialLinks = (props: any) => {
    return (
        <div className={props.className}>
            <a
                href="https://www.github.com/charlesmiller0412"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.linkedin.com/in/charlesmiller0412"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://twitter.com/millersWebDev"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
                href="https://pinterest.com/charlesmiller0412"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
                href="https://instagram.com/millerswebdev"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="mailto:charles@charlesmiller.dev"
                target="__blank"
                onClick={props.onClick}
                className="text-icons dark:hover:text-blue hover:text-lightBlue transition-all landscape:text-iconLg"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </a>
        </div>
    );
};
