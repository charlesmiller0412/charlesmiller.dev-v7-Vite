import { useRef } from "react";
import { Headings } from "../../components/headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialLinks } from "../hero/components/social";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form } from "./components/form";
import useThemeStore from "../../appStore";

const Contact = () => {
    const theme = useThemeStore((state: any) => state.theme);

    const form = useRef();

    const handleFormSubmit = (e: any) => {
        const SERVICE_ID = "service_vbemywk";
        const TEMPLATE_ID = "template_i0d498p";
        const USER_ID = "dMWjLU5PXNQ0ufq1N";

        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };

    return (
        <section
            className="contact w-full bg-white dark:bg-offBlack relative"
            id="contact"
        >
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 0L0 0 892.25 114.72 1200 0z"
                        className={
                            theme == "dark" ? "fill-black" : "fill-offWhite"
                        }
                    ></path>
                </svg>
            </div>
            <Headings
                h2className="headings--h2 headings__left--h2 text-lg text-start"
                h2="Contact"
            />
            <div className="contact__container w-full flex justify-between max-w-[120rem] m-auto flex-col tablet:flex-row tablet:mt-[5rem] text-black dark:text-white z-10">
                <div className="contact__container--left w-full tablet:w-1/3 justify-evenly h-fit grid grid-cols-2 tablet:gap-x-32">
                    <div className="contact__container--left-location items-start hidden tablet:flex w-full tablet:items-center tablet:w-full flex-col tablet:flex-row h-fit">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-lg w-20 text-black dark:text-blue mt-10"
                        />
                        <div className="text-xs desktop:text-sm border-t tablet:border-l tablet:border-t-0 border-offBlack dark:border-offWhite p-5 desktop:p-10 mt-4 tablet:mt-10 tablet:ml-5 whitespace-nowrap">
                            <span className="uppercase font-bold text-base block">
                                Location:
                            </span>
                            Pensacola, FL USA
                        </div>
                    </div>
                    <div className="contact__container--left-email items-end hidden tablet:flex w-fit tablet:items-center tablet:w-full flex-col tablet:flex-row">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-lg w-20 text-black dark:text-blue mt-10"
                        />
                        <div className="text-xs desktop:text-sm border-t tablet:border-l tablet:border-t-0 border-offBlack dark:border-offWhite p-5 desktop:p-10 mt-4 tablet:mt-10 tablet:ml-5 whitespace-nowrap">
                            <span className="uppercase font-bold text-base block">
                                Email:
                            </span>
                            charles@charlesmiller.dev
                        </div>
                    </div>
                    <SocialLinks className="socialLinks text-icons w-full m-auto col-span-2 flex justify-between mb-8 tablet:my-12 max-w-[25rem]" />
                </div>
                <div className="contact__container--right w-full tablet:w-1/2 items-end z-10">
                    <Form handleFormSubmit={handleFormSubmit} form={form} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
