import { useState, useEffect } from "react";
import $ from "jquery";

const useNavScroll = () => {
    // update active link on scroll
    const [activeLink, setActiveLink] = useState<any>("heroLink");

    function handleScroll(activeLink: any) {
        var scroll: any = $(window).scrollTop();
        var projectsOffset = $("#projects").offset()!.top - 50;
        var skillsOffset = $("#skills").offset()!.top - 50;
        var aboutOffset = $("#about").offset()!.top - 50;
        var blogOffset = $("#blog").offset()!.top - 50;
        var contactOffset = $("#contact").offset()!.top - 400;

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
        if (scroll >= aboutOffset && scroll < blogOffset) {
            setActiveLink("aboutLink");
        }
        // blog
        if (scroll >= blogOffset && scroll < contactOffset) {
            setActiveLink("blogLink");
        }
        //contact
        if (scroll >= contactOffset) {
            setActiveLink("contactLink");
        }
        return activeLink;

        // // show mobileNav after scroll
        // if (scroll >= 50) {
        //     $("#mobileNav").css({ opacity: "1", transition: "all .3s" });
        // } else {
        //     $("#mobileNav").css({ opacity: "0", transition: "all .3s" });
        // }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return activeLink;
};

export default useNavScroll;
