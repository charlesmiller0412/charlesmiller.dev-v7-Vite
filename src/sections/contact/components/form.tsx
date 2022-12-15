import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../components/button";

export const Form = (props: any) => {
    return (
        <form
            ref={props.form}
            onSubmit={props.handleFormSubmit}
            className="grid grid-cols-2 gap-4 tablet:gap-[2rem] text-xs font-regular placeholder:font-light"
        >
            <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="col-span-1 pl-[2rem] py-[1.5rem] border border-[#384b52a2] dark:border-[#a1dcf0a2] bg-offWhite dark:bg-offBlack focus:outline-offBlack dark:focus:outline-lightBlue"
            />
            <input
                type="tel"
                name="from_phone"
                placeholder="Phone number (Optional)"
                className="col-span-1 pl-[2rem] py-[1.5rem] border border-[#384b52a2] dark:border-[#a1dcf0a2] bg-offWhite dark:bg-offBlack focus:outline-offBlack dark:focus:outline-lightBlue"
            />
            <input
                type="email"
                name="from_email"
                placeholder="E-Mail address"
                required
                className="col-span-2 pl-[2rem] py-[1.5rem] border border-[#384b52a2] dark:border-[#a1dcf0a2] bg-offWhite dark:bg-offBlack focus:outline-offBlack dark:focus:outline-lightBlue"
            />
            <textarea
                name="message"
                placeholder="What's your message?"
                className="col-span-2 pl-[2rem] py-[1.5rem] border border-[#384b52a2] dark:border-[#a1dcf0a2] bg-offWhite dark:bg-offBlack focus:outline-offBlack dark:focus:outline-lightBlue"
            />
            <div className="col-span-2 tablet:col-span-1 items-center justify-items-center grid grid-cols-2 tablet:items-start tablet:text-left gap-10">
                <Button
                    type="reset"
                    text="Clear"
                    className="btn btn__secondary border-2 whitespace-nowrap py-2 w-full"
                    icon={faAnglesRight}
                />
                <Button
                    type="submit"
                    text="Submit"
                    value="submit"
                    className="btn btn__primary border-2 whitespace-nowrap py-2 w-full dark:bg-black"
                    icon={faAnglesRight}
                />
            </div>
        </form>
    );
};
