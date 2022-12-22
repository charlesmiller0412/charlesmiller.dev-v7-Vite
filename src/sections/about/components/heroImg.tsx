import HeroImage from "../../../assets/hero/myPhotoTransparent.webp";
export const HeroImg = () => {
    return (
        <div className="container mx-auto relative h-[25rem] w-[25rem]">
            <div className="box bg-[rgb(56,75,82,.1)] dark:bg-[rgba(254,254,254,.1)] h-full w-full">
                <div className="box bg-[rgb(56,75,82,.1)] dark:bg-[rgba(254,254,254,.1)] boxInside">
                    <div className="box bg-[rgb(56,75,82,.2)] dark:bg-[rgba(254,254,254,.2)] boxInside">
                        <div className="box bg-[rgb(56,75,82,.4)] dark:bg-[rgba(254,254,254,.4)] boxInside">
                            <div className="box bg-[rgb(56,75,82,.6)] dark:bg-[rgba(254,254,254,.6)] boxInside">
                                <picture className="box imgBox bg-offWhite dark:bg-offBlack w-full h-full border-[.5rem] border-offBlack dark:border-offWhite absolute overflow-hidden right-0 top-0">
                                    <img
                                        src={HeroImage}
                                        alt="Charles Miller"
                                        className="aspect-auto w-full -bottom-20 left-0 absolute"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
