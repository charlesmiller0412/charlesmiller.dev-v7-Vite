export const ResumeBtn = (props: any) => {
    return (
        <button
            onClick={() => {
                window.open(
                    "https://charlesmiller.dev/" +
                        import.meta.env.VITE_CURRENT_RESUME,
                    "_blank"
                );
            }}
            className={
                props.className +
                "navbar__right--resume w-52 tablet:w-auto border-2 flex items-center justify-center text-xs h-fit m-auto font-medium transition-all order-0 self-stretch shadow-[-4px_4px_0_0_#12252b] dark:shadow-[-4px_4px_0_0_#efefef] py-[1rem] px-[.5rem] hover:bg-blue"
            }
        >
            R&egrave;sum&egrave;
        </button>
    );
};
