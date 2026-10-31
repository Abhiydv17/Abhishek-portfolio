import "./App.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  Menu,
  Play,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type Profile = {
  id: string;
  title: string;
  description: string;
};

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  github: string;
  link?: string;
};

const profiles: Profile[] = [
  {
    id: "recruiter",
    title: "Recruiter",
    description: "Explore my skills, experience and projects.",
  },
  {
    id: "developer",
    title: "Developer",
    description: "Explore the code, technology and things I build.",
  },
  {
    id: "creative",
    title: "Creative",
    description: "Discover my journey, ideas and experiments.",
  },
];

const projects: Project[] = [
  {
    number: "01",
    title: "QuickBus",
    category: "FULL STACK WEB APPLICATION",
    description:
      "A bus ticket booking system built with Java technologies. Users can register, log in, search buses, book tickets, view bookings and cancel reservations. It also includes an admin bus management module.",
    technologies: [
      "Java",
      "Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "Bootstrap",
    ],
    color: "project-red",
    github: "https://github.com/Abhiydv17",
  },
  {
    number: "02",
    title: "Hello World Website",
    category: "CLOUD DEPLOYMENT",
    description:
      "A static website created with HTML and deployed using GitHub, AWS CodeBuild and Amazon S3 static website hosting.",
    technologies: ["HTML", "GitHub", "AWS CodeBuild", "Amazon S3"],
    color: "project-blue",
    github: "https://github.com/Abhiydv17/hello-world-website",
    link: "http://abhiydv17-hello-world-site-2026.s3-website.eu-north-1.amazonaws.com",
  },
  {
    number: "03",
    title: "Quantium Data Analytics",
    category: "JOB SIMULATION",
    description:
      "Completed the Quantium Data Analytics Job Simulation on Forage, gaining practical exposure to data analytics tasks and business problem-solving.",
    technologies: ["Data Analytics", "Python", "Business Analysis"],
    color: "project-purple",
    github: "https://www.theforage.com/simulations/quantium/data-analytics-rqkb",
    link: "https://www.theforage.com/simulations/quantium/data-analytics-rqkb",
  },
  {
  number: "04",
  title: "Abhishek — The Series",
  category: "PERSONAL PORTFOLIO",
  description:
    "A cinematic and interactive developer portfolio showcasing my skills, projects, achievements and development journey.",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Framer Motion",
    "GSAP",
    "CSS"
  ],
  color: "project-purple",
  github: "https://github.com/Abhiydv17/abhishek-portfolio",
  link: "https://abhiydv17.github.io/abhishek-portfolio/",
}
];

const skills = [
  "Java",
  "Python",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "JSP",
  "Servlets",
  "JDBC",
  "MySQL",
  "Git",
  "GitHub",
  "AWS Fundamentals",
  "VS Code",
];

const journey = [
  {
    year: "2024 — PRESENT",
    title: "Bachelor of Computer Applications",
    place: "Amity University",
    description:
      "Building a foundation in programming, databases, software development and computer science.",
    icon: GraduationCap,
  },
  {
    year: "PROJECT EXPERIENCE",
    title: "Building QuickBus",
    place: "Java Full Stack Development",
    description:
      "Developing a bus ticket booking application using Java, JSP, Servlets, JDBC and MySQL.",
    icon: Code2,
  },
  {
    year: "CLOUD LEARNING",
    title: "AWS Static Website Deployment",
    place: "GitHub + AWS",
    description:
      "Created and deployed a static website using GitHub, AWS CodeBuild and Amazon S3.",
    icon: Layers3,
  },
];

function App() {
  const [showProfiles, setShowProfiles] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const introMessages = [
    "WELCOME TO MY WORLD.",
    "IDEAS INTO CODE.",
    "LET'S BUILD SOMETHING.",
  ];

  const enterPortfolio = () => {
    setShowProfiles(false);
    setShowIntro(true);
    setIntroStep(0);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const timer = window.setTimeout(() => {
      if (introStep < introMessages.length - 1) {
        setIntroStep((current) => current + 1);
      } else {
        setShowIntro(false);
      }
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [showIntro, introStep, introMessages.length]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <AnimatePresence>
        {showProfiles && (
          <motion.div
            className="profile-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
          >
            <div className="profile-content">
              <p className="eyebrow">A PERSONAL PORTFOLIO EXPERIENCE</p>

              <motion.h1
                className="profile-heading"
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                WHO'S
                <br />
                WATCHING<span>?</span>
              </motion.h1>

              <p className="profile-subtitle">
                Choose your experience.
              </p>

              <div className="profile-grid">
                {profiles.map((profile, index) => (
                  <motion.button
                    className="profile-card"
                    key={profile.id}
                    onClick={enterPortfolio}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className={`profile-avatar avatar-${profile.id}`}>
                      {profile.id === "recruiter" && (
                        <BriefcaseBusiness size={34} />
                      )}
                      {profile.id === "developer" && <Code2 size={34} />}
                      {profile.id === "creative" && <Sparkles size={34} />}
                    </div>

                    <h3>{profile.title}</h3>
                    <p>{profile.description}</p>
                  </motion.button>
                ))}
              </div>

              <p className="profile-footer">
                ABHISHEK YADAV <span>•</span> PORTFOLIO
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={introStep}
              className="intro-message"
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5 }}
            >
              <span>ABHISHEK ORIGINAL SERIES</span>
              <h1>{introMessages[introStep]}</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="portfolio">
        <header className="navbar">
          <a className="brand" href="#home">
            ABHISHEK<span>.</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="#journey" onClick={closeMenu}>JOURNEY</a>
            <a href="#projects" onClick={closeMenu}>PROJECTS</a>
            <a href="#skills" onClick={closeMenu}>SKILLS</a>
            <a href="#contact" onClick={closeMenu}>CONTACT</a>
          </nav>

          <a
            className="nav-cta"
            href="https://github.com/Abhiydv17"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={15} />
          </a>
        </header>

        <main>
          <section className="hero-section" id="home">
            <div className="hero-background">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-glow" />
              <div className="hero-visual">
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-core">
              <span>AY</span>
              <small>DEVELOPER</small>
             </div>
  <div className="floating-tech tech-java">JAVA</div>
  <div className="floating-tech tech-react">REACT</div>
  <div className="floating-tech tech-python">PYTHON</div>
  <div className="floating-tech tech-sql">MYSQL</div>
</div>
            </div>

            <div className="hero-content">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES
              </motion.p>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                ABHISHEK
                <br />
                <span>THE SERIES.</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Turning ideas into code, one project at a time.
                <br />
                BCA student. Developer. Lifelong learner.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <a className="primary-button" href="#projects">
                  EXPLORE MY WORK <ArrowRight size={17} />
                </a>

                <a className="secondary-button" href="#about">
                  DISCOVER MY STORY
                </a>
              </motion.div>

              <div className="hero-meta">
                <span>BASED IN INDIA</span>
                <span>SCROLL TO EXPLORE <ArrowDown size={14} /></span>
                <span>01 — 05</span>
              </div>
            </div>

            <div className="hero-side-label">THE DEVELOPER EDITION</div>
          </section>

          <section className="about-section section-padding" id="about">
            <div className="section-heading">
              <p className="eyebrow">01 / THE STORY</p>
              <h2>
                NOT JUST A
                <br />
                <span>CODER.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p className="about-lead">
                  Hey, I'm Abhishek Yadav — a BCA student passionate about
                  technology, programming and building useful digital
                  experiences.
                </p>

                <p className="about-text">
                  I enjoy turning ideas into working applications, learning
                  new technologies and solving problems through code. My
                  journey is about consistent improvement, practical projects
                  and becoming a better software developer every day.
                </p>

                <a className="text-link" href="#journey">
                  MORE ABOUT MY JOURNEY <ArrowRight size={16} />
                </a>
              </div>

              <div className="about-stat-grid">
                <div className="stat-card">
                  <Code2 size={25} />
                  <h3>CODE</h3>
                  <p>Learning by building</p>
                </div>

                <div className="stat-card">
                  <Zap size={25} />
                  <h3>GROW</h3>
                  <p>Improving every day</p>
                </div>

                <div className="stat-card">
                  <Layers3 size={25} />
                  <h3>BUILD</h3>
                  <p>Turning ideas into projects</p>
                </div>

                <div className="stat-card">
                  <Sparkles size={25} />
                  <h3>CREATE</h3>
                  <p>Exploring new possibilities</p>
                </div>
              </div>
            </div>
          </section>

          <section className="journey-section section-padding" id="journey">
            <div className="section-heading">
              <p className="eyebrow">02 / THE JOURNEY</p>
              <h2>
                EVERY STEP
                <br />
                <span>COUNTS.</span>
              </h2>
            </div>

            <div className="timeline">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="timeline-item"
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="timeline-icon">
                      <Icon size={23} />
                    </div>

                    <div className="timeline-content">
                      <p className="eyebrow">{item.year}</p>
                      <h3>{item.title}</h3>
                      <span>{item.place}</span>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="projects-section section-padding" id="projects">
            <div className="section-heading">
              <p className="eyebrow">03 / THE PROJECTS</p>
              <h2>
                BUILT WITH
                <br />
                <span>PURPOSE.</span>
              </h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  className={`project-card ${project.color}`}
                  key={project.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="project-top">
                    <span>PROJECT {project.number}</span>
                    <button
                      className="project-open"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View ${project.title} details`}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                 
                 <div className="project-art">
                 <div className="project-art-icon">
               {index === 0 && <Code2 size={55} />}
                {index === 1 && <Layers3 size={55} />}
                   {index === 2 && <Award size={55} />}
              {index === 3 && <Sparkles size={55} />}
                 </div>
                 <span>0{index + 1}</span>
                     </div>


                  <div className="project-info">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <button
                      className="text-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      VIEW PROJECT <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="skills-section section-padding" id="skills">
            <div className="section-heading">
              <p className="eyebrow">04 / THE TOOLKIT</p>
              <h2>
                MY TECH
                <br />
                <span>UNIVERSE.</span>
              </h2>
            </div>

            <p className="skills-description">
              Technologies and tools I have explored through learning,
              coursework and hands-on projects.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-item"
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
                  whileHover={{ scale: 1.06, y: -5 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{skill}</h3>
                  <ArrowUpRight size={17} />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="achievements-section section-padding">
            <div className="section-heading">
              <p className="eyebrow">05 / THE HIGHLIGHTS</p>
              <h2>
                SMALL WINS.
                <br />
                <span>BIG GROWTH.</span>
              </h2>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <Award size={34} />
              </div>

              <div>
                <p className="eyebrow">FORAGE JOB SIMULATION</p>
                <h3>Quantium Data Analytics</h3>
                <p>
                  Completed a practical job simulation focused on data
                  analytics and business problem-solving.
                </p>
                <a
                  className="text-link"
                  href="https://www.theforage.com/simulations/quantium/data-analytics-rqkb"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SIMULATION <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section className="contact-section section-padding" id="contact">
            <p className="eyebrow">THE NEXT CHAPTER STARTS HERE</p>

            <h2>
              LET'S BUILD
              <br />
              <span>SOMETHING.</span>
            </h2>

            <p>
              Open to learning opportunities, collaborations and connecting
              with people who love building things.
            </p>

            <a
              className="primary-button"
              href="https://github.com/Abhiydv17"
              target="_blank"
              rel="noreferrer"
            >
              CONNECT ON GITHUB <ArrowUpRight size={17} />
            </a>

            <div className="contact-bottom">
              <span>ABHISHEK YADAV</span>
              <span>TURNING IDEAS INTO CODE.</span>
              <span>© 2026</span>
            </div>
          </section>
        </main>

        <footer className="footer">
          <a className="brand" href="#home">
            ABHISHEK<span>.</span>
          </a>
          <p>DESIGNED WITH CURIOSITY. BUILT WITH CODE.</p>
          <a href="#home">
            BACK TO TOP <Play size={13} />
          </a>
        </footer>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X size={22} />
              </button>

              <p className="eyebrow">
                PROJECT {selectedProject.number} / {selectedProject.category}
              </p>

              <h2>{selectedProject.title}</h2>
              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="technology-list">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  className="primary-button"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW DETAILS <ArrowUpRight size={16} />
                </a>

                {selectedProject.link && (
                  <a
                    className="secondary-button"
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    OPEN PROJECT <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
