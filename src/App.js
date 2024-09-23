import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import design from "./assets/design.webp";
import code from "./assets/code.webp";
import web1 from "./assets/web1.webp";
import web2 from "./assets/web2.webp";
import web3 from "./assets/web3.webp";
import web4 from "./assets/web4.webp";
import web5 from "./assets/web5.webp";
import web6 from "./assets/web6.webp";
import web7 from "./assets/web7.webp";
import web8 from "./assets/web8.webp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* Navbar */}
        <section className="mb-20">
          <nav className="py-10 mb-6 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Joshy Johny</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Joshy Johny
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              With a strong foundation in both development and design, I am
              passionate about creating innovative digital solutions that drive
              business success. My experience spans multiple industries, where I
              have contributed to building robust, scalable applications and
              designing user-centric interfaces.
            </p>

            {/* Social Links */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/JoshyJohny3530?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joshy-johny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section>
          <div className="mb-10">
            <h3 className="text-3xl py-1 dark:text-white">What I Do</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my career, I’ve worked with teams to develop
              cutting-edge web applications, design intuitive user interfaces,
              and deliver high-quality digital products. My goal is to blend
              functionality with aesthetics, ensuring that each project not only
              performs well but also provides an exceptional user experience.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            <ServiceCard
              title="Design Excellence"
              description="Crafting visually appealing and functional designs to enhance user experience and brand identity."
              tools={["Adobe Photoshop", "Adobe Illustrator", "Figma", "InDesign"]}
              image={design}
            />
            <ServiceCard
              title="Frontend Development"
              description="Creating engaging and intuitive user interfaces that enhance user experiences."
              tools={["ReactJS", "AngularJS", "Vue.js", "jQuery", "Next.js"]}
              image={code}
            />
            <ServiceCard
              title="Backend Development"
              description="Building reliable and efficient server-side solutions to power applications."
              tools={["Node.js", "Express.js", "TypeScript", "ASP.NET Core", "Python", "PHP"]}
              image={code}
            />
            <ServiceCard
              title="Databases"
              description="Designing and managing data storage solutions to ensure robust data handling and retrieval."
              tools={["MongoDB", "MySQL", "PostgreSQL", "Firebase"]}
              image={code}
            />
            <ServiceCard
              title="CI/CD & Version Control"
              description="Streamlining development workflows and maintaining code quality."
              tools={["Jenkins", "AWS", "Git", "GitHub", "GitLab"]}
              image={code}
            />
            <ServiceCard
              title="APIs"
              description="Developing and integrating APIs to enable seamless communication between systems."
              tools={["REST", "GraphQL"]}
              image={code}
            />
            <ServiceCard
              title="Mobile Development"
              description="Building responsive and functional mobile applications."
              tools={["Flutter", "Android Development"]}
              image={code}
            />
            <ServiceCard
              title="Testing"
              description="Ensuring the quality and reliability of applications through rigorous testing."
              tools={["Selenium", "PyTest"]}
              image={code}
            />
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the projects I've worked on, showcasing my skills
              in development and design.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            {[web1, web2, web3, web4, web5, web6, web7, web8].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Project ${idx + 1}`}
                className="rounded-lg w-80 h-80"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ServiceCard({ title, description, tools, image }) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
      <img src={image} alt={title} className="m-auto" width={100} height={100} />
      <h1 className="text-xl pt-8 pb-2 font-bold">{title}</h1>
      <p className="py-2">{description}</p>
      <h4 className="py-4 text-teal-600 font-bold">Tools I Use</h4>
      {tools.map((tool, index) => (
        <p key={index} className="italic text-gray-800 py-1">
          {tool}
        </p>
      ))}
    </div>
  );
}

export default App;
