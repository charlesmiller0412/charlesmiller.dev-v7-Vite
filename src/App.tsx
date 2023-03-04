import { useEffect } from "react";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import { Hero } from "./sections/hero/hero";
import { MobileNav } from "./sections/navbar/mobileNav/mobileNav";
import { Navbar } from "./sections/navbar/navbar";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Blog from "./sections/blog/blog";
import useThemeStore from "./appStore";
import useFetch from "./hooks/useFetch";

function App() {
    const theme = useThemeStore((state: any) => state.theme);
    const setTheme = useThemeStore((state: any) => state.setTheme);
    const {
        loading,
        error,
        data: projects,
    } = useFetch("https://dbserver.onrender.com/api/projects/favorites");

    function handleTheme() {
        if (theme === "dark") {
            document.getElementById("main")?.classList.add("dark");
            document.getElementById("header")?.classList.add("dark");
        } else {
            document.getElementById("main")?.classList.remove("dark");
            document.getElementById("header")?.classList.remove("dark");
        }
    }

    useEffect(() => {
        handleTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <>
            <header className="bg-offWhite dark:bg-black dark" id="header">
                <Navbar
                    theme={theme}
                    setTheme={setTheme}
                    error={error}
                    loading={loading}
                />
            </header>
            <main
                className="overflow-x-hidden dark bg-offWhite dark:bg-black flex"
                id="main"
            >
                <div className="hidden landscape:flex landscape:w-[7rem]"></div>
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
                    {/* <Blog /> */}
                    <Contact />
                </div>
            </main>
            <footer className="bg-offWhite dark:bg-black h-[2rem] text-black dark:text-white text-xxs tablet:text-xs flex items-center justify-center font-rival">
                {new Date().getFullYear()} Copyright &copy; Charles Miller. All
                rights reserved.
                <a
                    href="https://www.freepik.com/free-vector/earth-with-blue-light_2179489.htm#query=blue%20planet%20background&position=0&from_view=search&track=ais"
                    className="text-xxs tablet:text-xs font-rival mx-1"
                >
                    Background by brgfx
                </a>
                on Freepik
            </footer>
        </>
    );
}

export default App;
