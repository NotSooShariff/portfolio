import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "./Button";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  scope: string;
  description: string;
  image?: StaticImageData | string | null;
  imageAlt?: string;
  placeholder?: React.ReactNode;
  sourceLink?: string;
  liveLink?: string;
  technologies: string[];
  className?: string;
}

const ProjectCard = ({
  title,
  scope,
  description,
  image,
  imageAlt,
  placeholder,
  sourceLink,
  liveLink,
  technologies,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-5 p-4 md:p-7 border-2 border-muted-1 border-dashed rounded-lg ${className}`}
    >
      <div className="flex-1 min-h-[200px] md:min-h-0">
        {image ? (
          typeof image === "string" ? (
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={imageAlt ?? title}
              className="rounded w-full object-cover"
            />
          )
        ) : placeholder ? (
          <div className="rounded w-full h-full min-h-[200px]">{placeholder}</div>
        ) : (
          <div className="rounded w-full h-full min-h-[200px] bg-muted-2 flex items-center justify-center">
            <span className="font-mono text-muted-foreground text-sm">no preview</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-muted-white-1">
            {title}
          </h3>
          <div className="flex gap-4">
            {sourceLink && (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={sourceLink}
                className={buttonVariants({ variant: "icon", size: "icon" })}
                aria-label={`${title} source code`}
              >
                <Github width={20} height={20} strokeWidth={1.5} />
              </Link>
            )}
            {liveLink && (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={liveLink}
                className={buttonVariants({ variant: "icon", size: "icon" })}
                aria-label={`${title} live demo`}
              >
                <ExternalLink width={20} height={20} strokeWidth={1.5} />
              </Link>
            )}
          </div>
        </div>
        <p className="uppercase tracking-wider font-mono text-muted-white-2 text-sm">
          {scope}
        </p>
        <p className="text-base md:text-xl leading-normal mt-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 font-mono mt-5">
          {technologies.map((technology) => (
            <div
              className="text-xs md:text-sm px-2 py-1 bg-muted-1 rounded-full text-muted-white-2"
              key={technology}
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
