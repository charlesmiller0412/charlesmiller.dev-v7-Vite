import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SkillsCard = (props: any) => {
    return (
        <div
            className={
                "skillsCard transition-all relative w-full tablet:landscape:w-[37rem] tablet:w-[38rem] h-full tablet:h-[26rem] bg-white hover:bg-blue cursor-default rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.2)] border-[.02rem] border-[rgba(65,65,65,.05)] dark:border-[rgba(150,150,150,0.6)] px-[3rem] tablet:px-[3.5rem] pb-[2.6rem] pt-[4.5rem] flex flex-col justify-between" +
                props.className
            }
        >
            <div className="skillCard__icon bg-lightBlue text-lg rounded-full w-[7rem] h-[7rem] absolute top-0 -translate-y-1/2 left-[3.5rem] grid place-items-center text-black">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h4 className="text-sm tablet:text-md whitespace-nowrap text-black font-semiBold leading-[3.3rem]">
                {props.title}
            </h4>
            <p className="text-xxs tablet:text-sm font-regular leading-md tablet:leading-lg text-offBlack">
                {props.text}
            </p>
        </div>
    );
};
