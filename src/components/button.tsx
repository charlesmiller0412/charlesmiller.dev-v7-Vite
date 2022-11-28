import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = (props: any) => {
    return (
        <button
            className={props.className}
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
        >
            {props.text}
            <FontAwesomeIcon
                icon={props.icon}
                className={"ml-[.5rem] text-xs"}
            />
        </button>
    );
};
