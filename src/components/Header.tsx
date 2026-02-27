import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { FaRegFilePdf } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="view-container mt-16 md:mt-20">
      <p className="font-mono text-primary-light text-base md:text-xl">
        Hi, I&apos;m Owais Shariff.
      </p>
      <h1 className="font-semibold text-[34px] md:text-5xl lg:text-[66px] flex flex-col mt-5 leading-snug">
        <span className="text-muted-white-2">Professionally paranoid.</span>
        <span className="text-muted-white-1 md:mt-2">
          Occasionally right about it.
        </span>
      </h1>
      <p className="max-w-xl text-base lg:text-xl text-muted-foreground mt-10 leading-normal">
        Cybersecurity consultant at Optiv Security. I spend my days studying how attackers think, so the people defending against them don&apos;t have to guess.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <Link
          href="/resume.pdf"
          className={`${buttonVariants({})} flex items-center justify-center`}
        >
          <FaRegFilePdf className="mr-3" /> View Resume
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "default" })}
          href="https://www.linkedin.com/in/owais-shariff/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Connect on LinkedIn
        </Link>
      </div>
    </header>
  );
};

export default Header;
