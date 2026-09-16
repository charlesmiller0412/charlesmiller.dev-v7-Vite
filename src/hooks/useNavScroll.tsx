import { useState, useEffect } from "react";
import $ from "jquery";

const useNavScroll = () => {
    // update active link on scroll
    const [activeLink, setActiveLink] = useState<any>("heroLink");

    function handleScroll() {
        var scroll: any = $(window).scrollTop();
        var skillsElement = $("#skills").offset();
        var aboutElement = $("#about").offset();
        var contactElement = $("#contact").offset();

        // Exit early if elements don't exist yet
        if (!skillsElement || !aboutElement || !contactElement) {
            return;
        }

        var skillsOffset = skillsElement.top - 100;
        var aboutOffset = aboutElement.top - 100;
        var contactOffset = contactElement.top - 400;

        //home
        if (scroll >= 0 && scroll < skillsOffset) {
            setActiveLink("heroLink");
        }
        //skills
        else if (scroll >= skillsOffset && scroll < aboutOffset) {
            setActiveLink("skillsLink");
        }
        //about
        else if (scroll >= aboutOffset && scroll < contactOffset) {
            setActiveLink("aboutLink");
        }
        //contact
        else if (scroll >= contactOffset) {
            setActiveLink("contactLink");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeLink;
};

export default useNavScroll;
