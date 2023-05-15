import { Button } from '@material-tailwind/react';
import { GithubLogo, LinkedinLogo } from '../svg/Svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 px-5 py-3 bg-white shadow-app-top-light dark:shadow-app-top dark:bg-black md:px-10 text-slate-800 dark:text-slate-300">
      <div className="flex items-center justify-between ">
        <div>
          <p className="font-medium text-sky-400">© {year} Steven Elias</p>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Button className="rounded-sm" variant="text">
            <a href="https://www.linkedin.com/in/steevened/" target="_blank">
              <LinkedinLogo />
            </a>
          </Button>

          <Button className="rounded-sm" variant="text">
            <a href="https://github.com/steevened" target="_blank">
              <GithubLogo />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
