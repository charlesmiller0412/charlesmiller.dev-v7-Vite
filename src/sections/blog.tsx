import { Headings } from "../components/headings";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../hooks/useFetch";
import Loading from "../../assets/logos/loadingLogo.webm";
import Error from "../../assets/logos/errorDino.webm";

const Blog = () => {
    const {
        loading,
        error,
        data: articles,
    } = useFetch(
        "https://dev.to/api/articles?username=charlesmiller0412&per_page=3"
    );

    let content;

    if (loading) {
        content = (
            <video
                autoPlay
                loop
                muted
                className="blog__container w-1/4 translate-x-1/4 m-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-flow-col desktop:auto-cols-auto gap-5 text-black dark:text-white"
            >
                <source
                    src={Loading}
                    type="video/webm"
                    height={60}
                    width={200}
                />
            </video>
        );
    } else if (error) {
        content = (
            <video
                autoPlay
                loop
                muted
                className="blog__container w-1/4 translate-x-1/4 m-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-flow-col desktop:auto-cols-auto gap-5 text-black dark:text-white"
            >
                <source src={Error} type="video/webm" height={60} width={200} />
                ;
            </video>
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
                                className="flex items-end gap-3 text-gray underline hover:overline"
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
                            className="flex w-1/2 items-end gap-3 text-gray underline hover:overline"
                        >
                            Read full article on
                            <img
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                                className="w-[3.5rem] aspect-auto"
                                alt="dev.to"
                            />
                        </a>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <section id="blog" className="blog w-full h-fit py-40">
            <Headings
                h2className="headings--h2 headings__right--h2 text-lg text-end mb-[5rem]"
                h2="Blog"
            />
            {content}
        </section>
    );
};

export default Blog;
