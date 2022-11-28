export const Headings = (props: any) => {
    return (
        <div className={"headings" + props.className}>
            <h5 className={props.h5className}>{props.h5}</h5>
            <h2 className={props.h2className}>{props.h2}</h2>
        </div>
    );
};
