"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Github, Twitter } from "lucide-react";
import Badge from "./ui/Badge";
import { Button, buttonVariants } from "./ui/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((value) => !value);
  const closeMenu = () => setIsOpen(false);

  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      setIp(data.ip);
    };

    fetchIp();
  }, []);

  return (
    <nav className="mt-5 font-mono flex items-center nav-container">
      <div className="flex gap-4 items-center min-w-fit grow">
        <Badge color="green" className="w-[180px]">
          {ip}
        </Badge>
      </div>
      <button
        aria-label="Menu button"
        className="lg:hidden"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      <div
        className={`absolute lg:static top-0 ${
          isOpen ? "left-0" : "left-full"
        } transition-[left] z-10 w-full h-screen lg:h-fit bg-background flex flex-col lg:flex-row lg:items-center lg:grow gap-10 lg:gap-6 px-5 lg:px-0`}
      >
        <div className="lg:hidden flex justify-between items-center mt-[9px]">
          <span className="font-medium text-lg text-primary-light">
            Owais Shariff
          </span>
          <button
            aria-label="Close menu button"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>
        <div className="lg:ml-6 flex gap-4 mt-10 lg:mt-0">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/NotSooShariff"
            className={buttonVariants({ variant: "icon", size: "icon" })}
            aria-label="GitHub Profile Link"
            onClick={closeMenu}
          >
            <Github width={20} height={20} strokeWidth={1.5} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href=""
            className={buttonVariants({ variant: "icon", size: "icon" })}
            aria-label="Twitter Profile Link"
            onClick={closeMenu}
          >
            <Twitter width={20} height={20} strokeWidth={1.5} />
          </Link>
        </div>
        <ul className="flex flex-col lg:flex-row gap-6 text-lg lg:ml-auto">
          <li>
            <Link
              href="/"
              className="flex gap-3 hover:text-primary-light focus-visible:text-primary-light transition-colors"
              onClick={closeMenu}
            >
              <span className="text-primary">1.</span>Home
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="flex gap-3 hover:text-primary-light focus-visible:text-primary-light transition-colors"
              onClick={closeMenu}
            >
              <span className="text-primary">2.</span>Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex gap-3 hover:text-primary-light focus-visible:text-primary-light transition-colors"
              onClick={closeMenu}
            >
              <span className="text-primary">3.</span>About
            </Link>
          </li>
        </ul>
        <Link
          href="mailto:owais.ahmed.shariff@gmail.com"
          className={`${buttonVariants({ variant: "outline" })} lg:ml-6`}
          onClick={closeMenu}
        >
          Say Hello
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
