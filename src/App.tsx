import React, { useState, useEffect } from "react";
import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Hero } from "./sections/hero/hero";
import { MobileNav } from "./sections/navbar/mobileNav/mobileNav";
import { Navbar } from "./sections/navbar/navbar";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import useThemeStore from "./appStore";
import { Blog } from "./sections/blog/blog";

function App() {
    const theme = useThemeStore((state: any) => state.theme);
    const setTheme = useThemeStore((state: any) => state.setTheme);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projects, setProjects] = useState([]);
    const [articles, setArticles] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://dbserver.onrender.com/api/projects/favorites"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            setError(false);
            return;
        } catch (err: any) {
            setError(true);
            console.error(err.message);
        }
    };
    const fetchArticles = async () => {
        try {
            const response = await fetch(
                "https://dev.to/api/articles?username=charlesmiller0412&per_page=3"
            );
            const json = await response.json();
            setArticles(json);
            setLoading(false);
            setError(false);
            return;
        } catch (err: any) {
            setError(true);
            console.error(err.message);
        }
    };

    function handleTheme() {
        theme === "dark"
            ? document.getElementById("main")?.classList.add("dark")
            : document.getElementById("main")?.classList.remove("dark");
    }
    useEffect(() => {
        fetchProjects();
        fetchArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <>
            <main
                className="overflow-x-hidden dark bg-offWhite dark:bg-black flex motion-reduce:transition-none"
                id="main"
            >
                <div className="hidden landscape:flex landscape:w-[rem]">
                    <Navbar theme={theme} setTheme={setTheme} />
                </div>
                <div className="w-full">
                    <MobileNav />
                    <Hero theme={theme} projects={projects} />
                    <Projects
                        projects={projects}
                        error={error}
                        loading={loading}
                    />
                    <Skills />
                    <About />
                    <Blog articles={articles} error={error} loading={loading} />
                    <Contact />
                </div>
            </main>
            <footer className="bg-offWhite dark:bg-black h-[2rem] text-black dark:text-white text-xs flex justify-center items-center">
                {new Date().getFullYear()} Copyright &copy; Charles Miller. All
                rights reserved.
            </footer>
        </>
    );
}

export default App;
