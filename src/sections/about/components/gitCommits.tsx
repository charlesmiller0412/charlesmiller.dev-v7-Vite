import React, { useState, useEffect } from "react";

export const GitCommits = () => {
    const [data, setData] = useState<any>([]);

    const getData = async () => {
        let list = [];
        try {
            const gitResponse = await fetch(
                "https://api.github.com/users/charlesmiller0412/events/public"
            );
            const gitData = await gitResponse.json();
            for (let i = 0; i < gitData.length; i++) {
                if (gitData[i].type === "PushEvent") {
                    if (list.length < 5) {
                        list.push(gitData[i]);
                    }
                }
            }
            setData(list);
            return;
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="gitCommits flex w-full h-fit min-h-fit text-black bg-white text-center rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.05)] border-[.02rem] border-[rgba(65,65,65,.5)]  flex-col justify-between py-[1.2rem] whitespace-nowrap overflow-hidden">
            <h3 className="gitCommits__title font-light text-sm tracking-[.75rem] leading-lg uppercase text-offBlack">
                recent git commits
            </h3>
            <ul className="flex flex-col justify-between h-full">
                {data.map((item: any) => (
                    <li
                        key={item.id}
                        className="w-full h-fit flex justify-between px-3 tablet:px-12 text-xxs"
                    >
                        <span className="font-bold text-left w-[13rem]">
                            <a
                                href={"https://github.com/" + item.repo.name}
                                target="__blank"
                                className="hover:text-blue text-xxs"
                            >
                                {item.repo.name.split("/").pop()}
                            </a>
                        </span>
                        <span className="font-regular whitespace-nowrap px-5 overflow-hidden text-xxs">
                            {item.payload.commits[0].message}
                        </span>
                        <span className="font-semiBold text-right pl-3 text-xxs">
                            {item.created_at.substring(5, 10)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
