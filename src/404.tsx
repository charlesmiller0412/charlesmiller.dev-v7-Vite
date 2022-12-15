import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/output.css";
import Lottie from "react-lottie";
import Error from "./assets/logos/errorDino.json";
import { Button } from "./components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logos/logoName.png";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const errorOptions = {
    loop: true,
    autoplay: true,
    animationData: Error,
};

root.render(
    <React.StrictMode>
        <main className="flex justify-center items-center flex-col w-full h-screen">
            <img src={Logo} className="w-3/12 desktop:w-1/12" />
            <div className="z-10 text-center h-1/4 flex justify-center flex-col text-offBlack">
                <h1 className="text-xl desktop:text-xxl">Page Not Found</h1>
                <h2 className="text-sm">
                    I can't seem to reach the page you're looking for
                </h2>
            </div>
            <div className="absolute z-0">
                <Lottie
                    options={errorOptions}
                    // style={{ position: "absolute", zIndex: "0" }}
                />
            </div>
            <div className="z-10 text-center h-1/2 flex items-end text-offBlack">
                <a href="/index.html">
                    <Button
                        className="btn btn__light--blue w-fit px-2 whitespace-nowrap dark:border dark:border-offWhite border border-black"
                        text="Back to my portfolio"
                        icon={faHome}
                    />
                </a>
            </div>
        </main>
    </React.StrictMode>
);
