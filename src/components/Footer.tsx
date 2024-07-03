import Link from "next/link";
import { ArrowUpRight, Github, Cloud, Linkedin, Mail } from "lucide-react";
import { buttonVariants } from "./ui/Button";

type footerLinkType = {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

type footerLinksType = footerLinkType[];

const footerLinks: footerLinksType = [
  {
    href: "https://github.com/NotSooShariff",
    icon: <Github size={20} strokeWidth={1.5} />,
    ariaLabel: "GitHub Icon",
  },
  {
    href: "https://linkedin.com/in/owais-shariff",
    icon: <Linkedin size={20} strokeWidth={1.5} />,
    ariaLabel: "LinkedIn Icon",
  },
  {
    href: "https://tryhackme.com/p/NotSooShariff",
    icon: <Cloud size={20} strokeWidth={1.5} />,
    ariaLabel: "TryHackMe Icon",
  },
  {
    href: "mailto:owais.ahmed.shariff@gmail.com",
    icon: <Mail size={20} strokeWidth={1.5} />,
    ariaLabel: "Mail Icon",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-5  justify-between view-container items-center my-20">
      <div className="font-mono px-7 py-5 bg-muted-2 rounded-lg mx-auto md:mx-0">
        <p className="">Want to Steal this Website?</p>
        <Link
          href="https://github.com/NotSooShariff/portfolio"
          className="flex gap-2 items-center before:block relative before:absolute before:w-full w-fit mx-auto md:mx-0 before:h-[1px] before:-bottom-0.5 before:left-0 before:bg-muted-white-2 hover:before:scale-x-0 before:origin-left before:transition-transform"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Repository <ArrowUpRight size={20} strokeWidth={1.5} />
        </Link>
      </div>
      <div className="grid grid-cols-4 place-items-center mx-auto md:mx-0 md:grid-cols-2 gap-4">
        {footerLinks.map((link: footerLinkType) => (
          <Link
            key={link.href}
            href={link.href}
            className={buttonVariants({ variant: "icon", size: "icon" })}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.ariaLabel}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
