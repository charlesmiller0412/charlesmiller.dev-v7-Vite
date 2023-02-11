import { useState, useEffect } from "react";
import $ from "jquery";

const useNavScroll = () => {
    // update active link on scroll
    const [activeLink, setActiveLink] = useState<any>("heroLink");

    function handleScroll(activeLink: any) {
        var scroll: any = $(window).scrollTop();
        var projectsOffset = $("#projects").offset()!.top - 100;
        var skillsOffset = $("#skills").offset()!.top - 100;
        var aboutOffset = $("#about").offset()!.top - 350;
        // var blogOffset = $("#blog").offset()!.top - 50;
        var contactOffset = $("#contact").offset()!.top - 500;

        //home
        if (scroll >= 0 && scroll < projectsOffset) {
            setActiveLink("heroLink");
        }
        //projects
        if (scroll >= projectsOffset && scroll < skillsOffset) {
            setActiveLink("projectLink");
        }
        //skills
        if (scroll >= skillsOffset && scroll < aboutOffset) {
            setActiveLink("skillsLink");
        }
        //about
        if (scroll >= aboutOffset && scroll < contactOffset) {
            setActiveLink("aboutLink");
        }
        // // blog
        // if (scroll >= blogOffset && scroll < contactOffset) {
        //     setActiveLink("blogLink");
        // }
        //contact
        if (scroll >= contactOffset) {
            setActiveLink("contactLink");
        }
        return activeLink;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return activeLink;
};

export default useNavScroll;
