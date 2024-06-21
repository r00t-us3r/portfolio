import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hello, World!"',
              "I'm a backend developer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I build web applications and websites using modern technologies.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Passion for Continuous Learning",
      description:
        "I actively seek out new technologies and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "User-Centric Approach",
      description:
        "My goal is to create user-friendly applications that solve real-world problems.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Senior Backend Developer",
      company: "HREF Agency LTD",
      timePeriod: "March 2024 - Current",
      location: "Altrincham, Cheshire",
    },
    {
      title: "Developer & IT Support",
      company: "AV Sundries & Distribution LTD",
      timePeriod: "Oct 2022 - Jan 2024",
      location: "Widnes, Cheshire",
    },
    {
      title: "Developer & Director",
      company: "XHOSTUK LTD",
      timePeriod: "Feb 2021 - Oct 2022",
      location: "Blackburn, Lancashire",
    },
    {
      title: "PHP Developer",
      company: "Mediablanket LTD",
      timePeriod: "Jan 2020 - Feb 2021",
      location: "Manchester",
    },
    {
      title: "Freelance Developer",
      company: "~",
      timePeriod: "Mar 2019 - Dec 2019",
      location: "Liverpool, Merseyside",
    },
    {
      title: "Blockchain Developer",
      company: "Electroneum LTD",
      timePeriod: "June 2017 - March 2019",
      location: "Maidstone, Kent",
    },
    {
      title: "PHP Developer",
      company: "Retortal LTD",
      timePeriod: "June 2015 - June 2017",
      location: "Maidstone, Kent",
    },
    {
      title: "Junior PHP Developer",
      company: "Retortal LTD",
      timePeriod: "Nov 2014 - June 2015",
      location: "Maidstone, Kent",
    },
    {
      title: "Junior PHP Developer",
      company: "24/7 Spares",
      timePeriod: "May 2013 - Sept 2024",
      location: "Grays, Essex",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Motorbike Network",
      description:
        "Motorbike Network aims to be a one stop social network for bikers. Specialising in bringing bikers together as the community that we are.",
      link: "https://play.google.com/store/apps/details?id=app.motorbike.network",
      type: "Close Source",
      icon: "logos:react",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "logos:php",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "skill-icons:laravel-dark",
    "skill-icons:tailwindcss-dark",
    "devicon:nodejs",
    "logos:mariadb-icon",
    "skill-icons:docker",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Values />*/}
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}
