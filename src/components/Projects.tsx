import projects from "./projects.json";
import { ChevronRight } from "lucide-react";
import classNames from "classnames";
import { useEffect, useRef } from "react";

type Project = {
  title: string;
  image: string;
  logo: string;
  description: string;
  longDescription: string;
  tags: string[];
  codeUrl: string;
  caseStudyUrl: string;
  appUrl: string;
};

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {

  const refImage = useRef<HTMLImageElement | null>(null);

  return (
    <div
      className={classNames(
        `flex flex-row w-full h-auto overflow-hidden p-b-2 transition-all ease-in duration-300 dark:bg-black/20 p-6 lg:p-12`,
        {
          "bg-fuchsia-100 dark:bg-fuchsia-900/10": project.title === "Graphem",
          "bg-red-100 dark:bg-red-900/10": project.title === "ScannerCam",
          "bg-blue-100 dark:bg-blue-900/10": project.title === "Dreamify",
          "bg-green-100 dark:bg-green-900/10": project.title === "Hackbank",
          "bg-yellow-100 dark:bg-yellow-900/10": project.title === "1spaceX",
          "bg-lime-100 dark:bg-lime-900/10": project.title === "PlatKey",
        }
      )}
    >
      <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto group py-12 lg:py-28">
        <div className="lg:w-6/12">
          <h3 className="flex space-x-2 items-center text-4xl min-h-18 tracking-tight font-inter font-semibold gap-x-3">
            <img
              src={project.logo}
              className="project-logo"
              aria-hidden="true"
              width={0}
              height={0}
            />
            {project.title}
          </h3>
          <h4 className="text-xl pt-2 font-semibold">Web Extension</h4>
          <h5 className="text-xl my-2">{project.description}</h5>
          <p>{project.longDescription}</p>
          <div className="flex gap-y-2 flex-row gap-x-3 lg:gap-x-6 py-2 text-center">
            <a
              href="https://github.com/360macky"
              className={classNames(
                "text-lg flex justify-center items-center gap-x-1 hover:underline underline-offset-8",
                {
                  "text-fuchsia-900 dark:text-fuchsia-200":
                    project.title === "Graphem",
                  "text-red-900 dark:text-red-200":
                    project.title === "ScannerCam",
                  "text-blue-900 dark:text-blue-200":
                    project.title === "Dreamify",
                  "text-green-900 dark:text-green-200":
                    project.title === "Hackbank",
                  "text-yellow-900 dark:text-yellow-200":
                    project.title === "1spaceX",
                  "text-lime-900 dark:text-lime-200":
                    project.title === "PlatKey",
                }
              )}
            >
              Open app
              <ChevronRight />
            </a>
            <a
              href="https://github.com/360macky"
              className={classNames(
                "text-lg flex justify-center items-center gap-x-1 hover:underline underline-offset-8",
                {
                  "text-fuchsia-900 dark:text-fuchsia-200":
                    project.title === "Graphem",
                  "text-red-900 dark:text-red-200":
                    project.title === "ScannerCam",
                  "text-blue-900 dark:text-blue-200":
                    project.title === "Dreamify",
                  "text-green-900 dark:text-green-200":
                    project.title === "Hackbank",
                  "text-yellow-900 dark:text-yellow-200":
                    project.title === "1spaceX",
                  "text-lime-900 dark:text-lime-200":
                    project.title === "PlatKey",
                }
              )}
            >
              Case study
              <ChevronRight />
            </a>
          </div>
        </div>
        <div className="md:w-6/12">
          <img
            src={project.image}
            alt="Laptop"
            className="lg:group-hover:scale-150 transition duration-1000 m-auto"
            ref={refImage}
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className="flex flex-col lg:gap-y-5 w-full mx-auto mb-18 items-start transition-opacity duration-400 ease-in lg:px-4"
      id="projects-grid"
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={{
            title: project.name,
            image: project.image,
            logo: project.logo,
            description: project.description,
            tags: project.tags,
            codeUrl: project.url_repo,
            caseStudyUrl: project.url_learn,
            appUrl: project.url_deploy,
            longDescription: project.longDescription,
          }}
        />
      ))}
    </div>
  );
};

export default Projects;
