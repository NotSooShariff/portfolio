import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { FaRegFilePdf } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="view-container mt-16 md:mt-20">
      <p className="font-mono text-primary-light text-base md:text-xl">
        Hi, I'm Owais Shariff.
      </p>
      <h1 className="font-semibold text-[34px] md:text-5xl lg:text-[66px] flex flex-col mt-5 leading-snug">
        <span className="text-muted-white-2">I help uncover vulnerabilities</span>
        <span className="text-muted-white-1 md:mt-2">
          and build security solutions
        </span>
      </h1>
      <p className="max-w-xl text-base lg:text-xl text-muted-foreground mt-10 leading-normal">
        Passionate freelance Security Researcher and designer, crafting functional
        websites for startups. Dedicated open-source contributor and community
        builder.
      </p>
      <div className="flex gap-5 mt-10">
        <Link
          href="/resume.pdf"
          className={`${buttonVariants({})} flex items-center`}
        >
          <FaRegFilePdf className="mr-3"/> View Resume 
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "default" })}
          href="https://bento.me/notsooshariff"
          rel="noopener noreferrer"
          target="_blank"
        >
          Connect with Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
