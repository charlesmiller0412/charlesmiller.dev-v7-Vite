export const GithubLanguages = () => {
    return (
        <picture className="githubData text-black bg-white text-center rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.05)] border-[.02rem] border-[rgba(65,65,65,.5)] flex flex-col justify-between relative h-1/3">
            <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=charlesmiller0412&langs_count=10&layout=compact&&bg_color=f9f9f9&border_color=f9f9f9&text_color=384b52&title_color=12252b"
                alt="GitHub Data"
                className="w-4/5 m-auto h-full aspect-auto"
            />
        </picture>
    );
};
