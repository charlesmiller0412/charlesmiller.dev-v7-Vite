import HTMLIcon from '../../../assets/icons/HTML.webp';
import CSSIcon from '../../../assets/icons/CSS.webp';
import JavascriptIcon from '../../../assets/icons/JavaScript.webp';
import TypescriptIcon from '../../../assets/icons/TypeScript.webp';
import MongoDB from '../../../assets/icons/MongoDB.webp';
import ReactIcon from '../../../assets/icons/ReactIcon.webp';
import NextIcon from '../../../assets/icons/NextJS.webp';
import ExpressIcon from '../../../assets/icons/ExpressJS.webp';
import NodeIcon from '../../../assets/icons/NodeJS.webp';
import jQueryIcon from '../../../assets/icons/JQuery.webp';
import Sass from '../../../assets/icons/Sass.webp';
import Bootstrap from '../../../assets/icons/Bootstrap.webp';
import TailwindIcon from '../../../assets/icons/TailwindCSS.webp';
import Git from '../../../assets/icons/Git.webp';
import PostgresIcon from '../../../assets/icons/postgres.png';
import JSONIcon from '../../../assets/icons/json.webp';
import Markdown from '../../../assets/icons/Markdown.webp';
import APIIcon from '../../../assets/icons/RestAPI.webp';
import VSCode from '../../../assets/icons/VSCode.webp';
import NPMIcon from '../../../assets/icons/NPMIcon.webp';
import BEMIcon from '../../../assets/icons/BEM.webp';
import Github from '../../../assets/icons/Github.webp';
import Figma from '../../../assets/icons/Figma.webp';
import Photoshop from '../../../assets/icons/Photoshop.webp';
import XDIcon from '../../../assets/icons/xd.webp';
import Illustrator from '../../../assets/icons/Illustrator.webp';

export const AboutSkills = () => {
  return (
    <div className='aboutSkills grid gap-12 mx-auto grid-cols-1 tablet:grid-cols-3 w-full'>
      <div>
        <h4 className='text-center mb-5'>specialties</h4>
        <div className='experience flex flex-wrap w-full tablet:w-[24rem] gap-3 justify-center m-auto'>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='HTML'
          >
            <img src={HTMLIcon} alt='HTML' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='CSS'
          >
            <img src={CSSIcon} alt='CSS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='JavaScript'
          >
            <img src={JavascriptIcon} alt='JavaScript' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='React.JS'
          >
            <img src={ReactIcon} alt='React.JS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Express.JS'
          >
            <img src={ExpressIcon} alt='Express.JS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Node.JS'
          >
            <img src={NodeIcon} alt='Node.JS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Sass'
          >
            <img src={Sass} alt='Sass' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Bootstrap'
          >
            <img src={Bootstrap} alt='Bootstrap' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='TailwindCSS'
          >
            <img src={TailwindIcon} alt='TailwindCSS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='PostgreSQL'
          >
            <img src={PostgresIcon} alt='PostgreSQL' />
          </picture>
        </div>
      </div>
      <div>
        <h4 className='text-center mb-5'>experience</h4>
        <div className='experience flex flex-wrap w-full tablet:w-[20rem] gap-3 justify-center m-auto'>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='TypeScript'
          >
            <img src={TypescriptIcon} alt='TypeScript' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='MongoDB'
          >
            <img src={MongoDB} alt='MongoDB' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Next.JS'
          >
            <img src={NextIcon} alt='Next.JS' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='jQuery'
          >
            <img src={jQueryIcon} alt='jQuery' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Git'
          >
            <img src={Git} alt='Git' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='JSON'
          >
            <img src={JSONIcon} alt='JSON' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Markdown'
          >
            <img src={Markdown} alt='Markdown' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Rest API'
          >
            <img src={APIIcon} alt='Rest API' />
          </picture>
        </div>
      </div>
      <div>
        <h4 className='text-center mb-5'>tools</h4>
        <div className='tools flex flex-wrap w-full tablet:w-[20rem] gap-3 justify-center m-auto'>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='VS Code'
          >
            <img src={VSCode} alt='Visual Studio Code' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Node Package Manager (NPM)'
          >
            <img src={NPMIcon} alt='Node Package Manager (NPM)' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Block Element Modifier'
          >
            <img src={BEMIcon} alt='BEM' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Github'
          >
            <img src={Github} alt='Github' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Figma'
          >
            <img src={Figma} alt='Figma' />
          </picture>

          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Photoshop'
          >
            <img src={Photoshop} alt='Photoshop' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='Illustrator'
          >
            <img src={Illustrator} alt='Illustrator' />
          </picture>
          <picture
            className='tooltip aspect-square w-[2.5rem] h-[2.5rem] relative tablet:w-[3.5rem] tablet:h-[3.5rem]'
            data-tooltip='XD'
          >
            <img src={XDIcon} alt='XD' />
          </picture>
        </div>
      </div>
    </div>
  );
};
