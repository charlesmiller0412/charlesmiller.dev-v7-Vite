import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/output.css";
import Error from "./assets/logos/errorDino.webm";
import { Button } from "./components/button";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logos/logoName.webp";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <main className="flex justify-center items-center flex-col w-full h-screen bg-offWhite">
            <img src={Logo} className="w-2/12 desktop:w-1/12" />
            <div className="z-10 text-center h-1/4 flex justify-center flex-col text-offBlack">
                <h1 className="text-xl desktop:text-xxl">Page Not Found</h1>
                <h2 className="text-sm">
                    I can't seem to reach the page you're looking for
                </h2>
            </div>
            <div className="absolute z-0 top-1/4">
                <video autoPlay loop muted>
                    <source src={Error} type="video/webm" />
                </video>
            </div>
            <div className="z-10 text-center h-1/2 flex items-end text-offBlack">
                <a href="/">
                    <Button
                        className="btn btn__light--blue w-fit px-2 whitespace-nowrap  border border-black text-black"
                        text="Back to my portfolio"
                        icon={faHome}
                    />
                </a>
            </div>
        </main>
    </React.StrictMode>
);
