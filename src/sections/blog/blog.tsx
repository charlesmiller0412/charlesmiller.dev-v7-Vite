import { Button } from "../../components/button";
import { Headings } from "../../components/headings";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../hooks/useFetch";
import Lottie from "react-lottie";
import Loading from "../../assets/logos/loadingLogo.json";
import Error from "../../assets/logos/errorDino.json";

export const Blog = () => {
    const {
        loading,
        error,
        data: articles,
    } = useFetch(
        "https://dev.to/api/articles?username=charlesmiller0412&per_page=3"
    );

    let content;

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: Error,
    };

    if (loading) {
        content = (
            <div className="blog__container w-1/4 translate-x-1/4 m-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-flow-col desktop:auto-cols-auto gap-5 text-black dark:text-white">
                <Lottie options={logoOptions} height={60} width={200} />
            </div>
        );
    } else if (error) {
        content = (
            <div className="blog__container w-1/4 translate-x-1/4 m-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-flow-col desktop:auto-cols-auto gap-5 text-black dark:text-white">
                <Lottie options={errorOptions} />;
            </div>
        );
    } else {
        content = (
            <div className="blog__container w-fit m-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-flow-col desktop:auto-cols-auto gap-5 text-black dark:text-white">
                {articles.map((article: any) => (
                    <div
                        className="blog__card m-auto card w-full tablet:w-[38rem] h-[26rem] bg-white cursor-default rounded-[.3rem] shadow-[0_3px_10px_rgba(0,0,0,.05)] dark:shadow-[0_3px_10px_rgba(255,255,255,.2)] border-[.02rem] border-[rgba(65,65,65,.05)] dark:border-[rgba(150,150,150,0.6)] px-[3rem] pb-[2.6rem] pt-[4.5rem] flex flex-col justify-between text-black"
                        key={uuidv4()}
                    >
                        <h3 className="text-sm">{article.title}</h3>
                        <p className="text-xs">
                            {article.readable_publish_date}
                        </p>
                        <p className="text-xs ml-2">
                            {article.description}
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-end gap-3 text-blue underline hover:overline"
                            >
                                Read More...
                            </a>
                        </p>
                        <ul className="text-xxs flex gap-3">
                            {article.tag_list.map((tag: any) => (
                                <li key={uuidv4()}>#{tag}</li>
                            ))}
                        </ul>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-1/2 items-end gap-3 text-blue underline hover:overline"
                        >
                            Read full article on
                            <img
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                                className="w-[3.5rem]"
                                alt="dev.to"
                            />
                        </a>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <section id="blog" className="blog w-full">
            <Headings
                h5className="headings__right--h5 text-end text-sm"
                h2className="headings--h2 text-lg text-end tablet:text-xl"
                h5="My Discussions"
                h2="Blog"
            />
            {content}
            <a
                href="https://charlesmiller.tech"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    className="flex btn btn__light--blue tablet:whitespace-nowrap w-fit px-20 h-fit items-center my-10 mx-auto bg-blue border-2 hover:bg-offBlack"
                    text="View my blog & social media site"
                    icon={faAnglesRight}
                />
            </a>
        </section>
    );
};
