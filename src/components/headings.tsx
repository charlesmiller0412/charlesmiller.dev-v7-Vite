export const Headings = (props: any) => {
    return (
        <div className={"headings " + props.className}>
            <h2 className={props.h2className}>{props.h2}</h2>
        </div>
    );
};
