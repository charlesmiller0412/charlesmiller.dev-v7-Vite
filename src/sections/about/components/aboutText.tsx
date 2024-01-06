export const AboutText = () => {
    return (
        <div className="aboutText w-full font-regular text-black dark:text-white p-5 desktop:p-0">
            <p className="text-sm tablet:text-base">
                I’m a{" "}
                <span className="text-sm tablet:text-base font-semiBold">
                    Front-End Software Engineer & UX/UI Designer
                </span>{". "}
                specializing in semantic HTML, JavaScript, React, SCSS, Express, Node, and PostgreSQL. I bring a focused expertise to the realm of front-end development and UX/UI Design. With a robust skill set encompassing both development and design aspects, I am adept at seamlessly integrating these technologies to deliver sophisticated projects. My proficiency extends to utilizing these tools to create dynamic, responsive and visually compelling user experiences. As a dedicated enthusiast in both fields, I actively pursue continuous learning, consistently expanding my skill set. By leveraging my passion for design and proficiency in coding, I excel in bringing intricate projects to fruition.
            </p>
            <p className="text-sm tablet:text-base mt-5">
                <span className="text-sm tablet:text-base font-semiBold block">
                    Have a job opportunity, project idea, need freelance web
                    work performed, or would just like to connect?
                </span>
                Feel free to reach out through any of the platforms listed in my <a className='text-sm tablet:text-base text-blue dark:text-lightBlue underline' href='#contact'>contact section</a>.
            </p>
        </div>
    );
};
