"use client";

import React, { useEffect, useMemo, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  details: string;
  tech: string[];
  result: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "MARKETPULSE AI",
    category: "AI / FINTECH / FULL STACK",
    description:
      "A production-focused market intelligence platform that combines financial data, analytics, forecasting, authentication and Generative AI insights.",
    details:
      "Built around a FastAPI backend with market APIs, historical data, crypto data, PostgreSQL persistence, SQLAlchemy, JWT authentication, Alembic migrations, caching, rate limiting, CORS, logging and AI-assisted market analysis.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "Gemini",
      "JWT",
      "YFinance",
    ],
    result: "Production-style AI market product",
    link: "https://github.com/DeepNema7/MarketPulseAI",
  },
  {
    number: "02",
    title: "DOCUMIND AI",
    category: "GENERATIVE AI / RAG",
    description:
      "A document intelligence system that lets users ask questions about private documents using retrieval-augmented generation.",
    details:
      "Uses embeddings, vector search and LLMs to retrieve relevant document context before generating answers. Designed for document Q&A, knowledge discovery and grounded responses.",
    tech: ["Python", "RAG", "FAISS", "Embeddings", "LLMs", "Streamlit"],
    result: "Context-aware document Q&A",
    link: "https://github.com/DeepNema7/DocuMindAI",
  },
  {
    number: "03",
    title: "VITAL-MART",
    category: "FULL STACK / RETAIL",
    description:
      "A retail management and analytics platform that connects operational workflows with business intelligence.",
    details:
      "Designed as a practical full-stack product with data management, analytics and a user-facing interface for turning retail data into useful business information.",
    tech: ["React", "JavaScript", "SQL", "REST APIs", "Analytics"],
    result: "Full-stack retail analytics product",
    link: "https://github.com/DeepNema7/vital-mart",
  },
  {
    number: "04",
    title: "CRYPTO MARKET ANALYTICS",
    category: "DATA / FINANCIAL ANALYTICS",
    description:
      "A cryptocurrency analytics platform that consumes market APIs and processes price and market information.",
    details:
      "Uses REST APIs, Python and Pandas to collect, transform and analyze cryptocurrency market data for monitoring and analytical use cases.",
    tech: ["Python", "REST APIs", "CoinGecko", "Pandas", "Analytics"],
    result: "1000+ market records processed daily",
    link: "https://github.com/DeepNema7/cryptocurrency-market-analytics",
  },
  {
    number: "05",
    title: "BRAIN TUMOR CNN",
    category: "MACHINE LEARNING / COMPUTER VISION",
    description:
      "A CNN-based image classification project for identifying brain tumor patterns from MRI images.",
    details:
      "Covers image preparation, convolutional neural network training, evaluation and prediction using a deep-learning workflow.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision"],
    result: "95% model accuracy",
    link: "https://github.com/DeepNema7/Brain-Tumor-Detection-CNN",
  },
];

const SKILLS = [
  {
    group: "LANGUAGES",
    items: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "AI / ML",
    items: [
      "Generative AI",
      "RAG",
      "LLMs",
      "Embeddings",
      "FAISS",
      "Prompt Engineering",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    group: "BACKEND",
    items: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "JWT",
      "Alembic",
    ],
  },
  {
    group: "DATA / BI",
    items: ["Pandas", "Power BI", "Excel", "Data Analytics", "Time Series"],
  },
  {
    group: "FRONTEND / TOOLS",
    items: ["React", "Streamlit", "Git", "GitHub", "GCP", "Jupyter", "Docker"],
  },
];

const EXPERIENCE = [
  {
    date: "2025",
    title: "SAIKET SYSTEMS",
    role: "SDE INTERN",
    description:
      "Contributed to an AI-powered data query platform using Google Gemini, working across application logic, SQL, BigQuery and intelligent retrieval workflows. Focused on building reliable query-generation and data-access features for a practical developer-facing product.",
    highlights: [
      "Google Gemini + prompt engineering",
      "Python + SQL + BigQuery",
      "Embeddings + semantic search",
      "RAG + Role Level Security",
      "Query generation workflows",
      "Production-oriented development",
    ],
  },
];

const EDUCATION = {
  period: "2022 — 2026",
  institute: "VIT BHOPAL UNIVERSITY",
  degree: "B.TECH — COMPUTER SCIENCE",
  specialization: "Health Informatics",
};

const CERTIFICATIONS = [
  ["ORACLE", "Java Developer SE 11 Professional"],
  ["IBM", "Generative AI — watsonx.ai"],
  ["COURSERA", "Machine Learning"],
  ["MICROSOFT", "Power BI Data Analyst"],
  ["GOOGLE CLOUD SKILLS BOOST", "BigQuery and Cloud Data Analytics"],
  ["HACKOSQUAD", "CTF 2026 — Rank #100"],
];

const SOCIALS = {
  github: "https://github.com/DeepNema7",
  linkedin: "https://www.linkedin.com/in/deep-nema-b38517335/",
  email: "mailto:deepnema7@gmail.com",
  phone: "tel:+918302692414",
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [motion, setMotion] = useState(true);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);

    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    const scroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    if (!motion || loading) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [motion, loading]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const rotateProject = (direction: number) => {
    setActiveProject((current) => {
      const next = current + direction;
      if (next < 0) return PROJECTS.length - 1;
      if (next >= PROJECTS.length) return 0;
      return next;
    });
  };

  const active = useMemo(() => PROJECTS[activeProject], [activeProject]);

  if (loading) {
    return (
      <div className="proLoader">
        <div className="loaderTop">
          <strong>DN<span>.</span></strong>
          <span>PORTFOLIO / 2026</span>
        </div>

        <div className="loaderCenter">
          <div className="loaderVisual">
            <div className="loaderOrbit loaderOrbitA" />
            <div className="loaderOrbit loaderOrbitB" />
            <div className="loaderOrbit loaderOrbitC" />
            <div className="loaderAxis loaderAxisX" />
            <div className="loaderAxis loaderAxisY" />
            <div className="loaderCore">DN</div>
          </div>

          <div className="loaderTitle">
            <span>DEEP</span>
            <span>NEMA<span className="loaderAccent">.</span></span>
          </div>

          <div className="loaderMeta">
            <div>
              <span>INITIALIZING PORTFOLIO</span>
              <strong>AI / DATA / SOFTWARE</strong>
            </div>
            <div className="loaderStatus"><i /> SYSTEM READY</div>
          </div>
        </div>

        <div className="loaderBottom">
          <div className="loaderProgress"><span /></div>
          <div><span>CREATIVE ENGINEERING</span><span>INDIA / 2026</span></div>
        </div>

        <style jsx global>{`
          * { box-sizing: border-box; }
          html, body { margin: 0; background: #050607; }
          .proLoader {
            min-height: 100vh; width: 100%; padding: 28px 38px;
            display: flex; flex-direction: column; justify-content: space-between;
            overflow: hidden; position: relative; color: #f5f2eb;
            font-family: Arial, Helvetica, sans-serif;
            background:
              radial-gradient(circle at 50% 48%, rgba(255,76,48,.08), transparent 20%),
              #050607;
          }
          .proLoader::before {
            content:""; position:absolute; inset:0; pointer-events:none; opacity:.35;
            background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
              linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
            background-size:80px 80px;
          }
          .proLoader::after {
            content:""; position:absolute; left:0; right:0; top:4px; height:1px;
            background:#ff5537; box-shadow:0 0 18px rgba(255,85,55,.7);
          }
          .loaderTop,.loaderBottom {
            position:relative; z-index:2; display:flex; justify-content:space-between;
            color:#62686d; font-size:8px; letter-spacing:.2em;
          }
          .loaderTop strong { color:#f5f2eb; font-size:21px; letter-spacing:-.12em; }
          .loaderTop strong span { color:#ff5537; }
          .loaderCenter {
            position:relative; z-index:2; width:min(1050px,90vw); margin:auto;
            display:grid; grid-template-columns:.8fr 1.2fr; align-items:center; gap:60px;
          }
          .loaderVisual {
            position:relative; width:min(320px,55vw); aspect-ratio:1;
            margin:auto; display:grid; place-items:center;
          }
          .loaderCore {
            width:92px; height:92px; border:1px solid rgba(255,85,55,.65);
            border-radius:50%; display:grid; place-items:center; font-size:18px;
            font-weight:900; letter-spacing:-.08em;
            box-shadow:0 0 65px rgba(255,85,55,.09), inset 0 0 35px rgba(255,85,55,.04);
          }
          .loaderCore::after {
            content:""; position:absolute; width:7px; height:7px; border-radius:50%;
            background:#ff5537; top:8%; right:16%; box-shadow:0 0 18px #ff5537;
          }
          .loaderOrbit {
            position:absolute; border:1px solid rgba(255,255,255,.11); border-radius:50%;
          }
          .loaderOrbitA { inset:0; border-left-color:#ff5537; animation:loaderSpin 9s linear infinite; }
          .loaderOrbitB { inset:35px -35px; transform:rotate(58deg); border-right-color:rgba(255,85,55,.42); animation:loaderSpinR 12s linear infinite; }
          .loaderOrbitC { inset:-35px 55px; transform:rotate(-38deg); animation:loaderSpin 16s linear infinite; }
          .loaderAxis { position:absolute; background:rgba(255,255,255,.08); }
          .loaderAxisX { left:-30px; right:-30px; top:50%; height:1px; }
          .loaderAxisY { top:-30px; bottom:-30px; left:50%; width:1px; }
          .loaderTitle {
            display:flex; flex-direction:column; font-size:clamp(70px,11vw,165px);
            line-height:.76; letter-spacing:-.095em; font-weight:950;
          }
          .loaderTitle > span:last-child { color:transparent; -webkit-text-stroke:1px #70757a; }
          .loaderAccent { color:#ff5537 !important; -webkit-text-stroke:0 !important; }
          .loaderMeta {
            grid-column:1 / -1; display:flex; justify-content:space-between;
            border-top:1px solid rgba(255,255,255,.08); padding-top:18px;
          }
          .loaderMeta > div:first-child { display:flex; flex-direction:column; gap:7px; }
          .loaderMeta span,.loaderMeta strong,.loaderStatus { font-size:8px; letter-spacing:.18em; }
          .loaderMeta span { color:#63696e; }
          .loaderMeta strong { color:#aaaeb1; font-weight:500; }
          .loaderStatus { display:flex; align-items:center; gap:8px; color:#63696e; }
          .loaderStatus i {
            width:6px; height:6px; border-radius:50%; background:#ff5537;
            box-shadow:0 0 13px #ff5537; animation:loaderPulse 1.1s infinite;
          }
          .loaderProgress { width:230px; height:1px; background:rgba(255,255,255,.1); overflow:hidden; }
          .loaderProgress span {
            display:block; height:100%; width:0; background:#ff5537;
            box-shadow:0 0 12px #ff5537; animation:loaderProgress 1.3s ease-out forwards;
          }
          .loaderBottom { align-items:center; }
          .loaderBottom > div:last-child { display:flex; gap:30px; }
          @keyframes loaderSpin { to { transform:rotate(360deg); } }
          @keyframes loaderSpinR { to { transform:rotate(-360deg); } }
          @keyframes loaderPulse { 50% { opacity:.35; transform:scale(.65); } }
          @keyframes loaderProgress { to { width:100%; } }
          @media (max-width:700px) {
            .proLoader { padding:22px; }
            .loaderCenter { grid-template-columns:1fr; gap:35px; }
            .loaderVisual { width:230px; }
            .loaderTitle { font-size:clamp(62px,20vw,110px); }
            .loaderMeta { grid-column:auto; }
            .loaderBottom > div:last-child { display:none; }
          }
          @media (prefers-reduced-motion:reduce) {
            .loaderOrbit,.loaderStatus i,.loaderProgress span { animation:none !important; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div
        className={`site ${motion ? "motion-on" : "motion-off"}`}
        style={
          {
            "--mouse-x": `${mouse.x}%`,
            "--mouse-y": `${mouse.y}%`,
          } as React.CSSProperties
        }
      >
        <div className="topProgress" style={{ width: `${scrollProgress}%` }} />

        <div className="cursorGlow" />
        <div className="noise" />

        <div className="orbitalSystem" aria-hidden="true">
          <div className="orbit orbitOne">
            <span className="orbitDot" />
          </div>
          <div className="orbit orbitTwo">
            <span className="orbitDot" />
          </div>
          <div className="orbit orbitThree">
            <span className="orbitDot" />
          </div>
          <div className="orbitalCore">
            <span>DN</span>
          </div>
        </div>

        <nav className="nav">
          <button className="logo" onClick={() => scrollTo("home")}>
            DN<span>.</span>
          </button>

          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>HOME</button>
            <button onClick={() => scrollTo("work")}>WORK</button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
            <button onClick={() => scrollTo("experience")}>EXPERIENCE</button>
            <button onClick={() => scrollTo("contact")}>CONTACT</button>
          </div>

          <div className="navActions">
            <a
              href="/deepnema(Resume).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resumeButton">
              RESUME <span>↗</span>
            </a>

            <button
              className="motionButton"
              onClick={() => setMotion((value) => !value)}
            >
              <span className={motion ? "liveDot" : "deadDot"} />
              {motion ? "MOTION ON" : "MOTION OFF"}
            </button>
          </div>

          <button
            className="menuButton"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </nav>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="heroMeta">
            <span>PORTFOLIO / 2026</span>
            <span>INDIA / SOFTWARE + AI</span>
          </div>

          <div className="heroMain">
            <div className="heroIntro" data-reveal>
              <span className="eyebrow">DEEP NEMA</span>
              <p>
                AI • DATA • SOFTWARE
                <br />
                BUILDING USEFUL DIGITAL PRODUCTS
              </p>
            </div>

            <h1 className="heroTitle">
              DEEP
              <br />
              <span>NEMA.</span>
            </h1>

            <div className="heroBottom" data-reveal>
              <div className="heroRole">
                <span>01 / 05</span>
                <strong>
                  AI ENGINEER
                  <br />
                  DATA & FULL-STACK DEVELOPER
                </strong>
              </div>

              <div className="heroActions">
                <a
                href="/deepnema(Resume).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resumeHeroButton">
                VIEW RESUME <span>↗</span>
                </a>
                <button className="scrollCue" onClick={() => scrollTo("work")}>
                  <span>EXPLORE WORK</span>
                  <b>↓</b>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-label="Areas of focus">
          <div className="marqueeTrack">
            <div className="marqueeSet">
              <span>SOFTWARE DEVELOPMENT</span>
              <i>✦</i>
              <span>GENERATIVE AI</span>
              <i>✦</i>
              <span>DATA ENGINEERING</span>
              <i>✦</i>
              <span>FULL STACK</span>
              <i>✦</i>
            </div>
            <div className="marqueeSet" aria-hidden="true">
              <span>SOFTWARE DEVELOPMENT</span>
              <i>✦</i>
              <span>GENERATIVE AI</span>
              <i>✦</i>
              <span>DATA ENGINEERING</span>
              <i>✦</i>
              <span>FULL STACK</span>
              <i>✦</i>
            </div>
          </div>
        </div>

        {/* WORK */}
        <section id="work" className="work section">
          <div className="sectionTop" data-reveal>
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                THINGS
                <br />
                <span>I&apos;VE BUILT.</span>
              </h2>
            </div>
            <span className="sectionIndex">02 / 05</span>
          </div>

          <div className="projectStage" data-reveal>
            <div className="projectVisual">
              <div className="projectGrid" />
              <div className="projectOrb">
                <span>{active.number}</span>
              </div>
              <div className="projectCorner">
                <span>CASE STUDY</span>
                <span>{active.number} / 0{PROJECTS.length}</span>
              </div>
            </div>

            <div className="projectInfo">
              <div className="projectNumber">{active.number}</div>

              <p className="projectCategory">{active.category}</p>

              <h3>{active.title}</h3>

              <p className="projectDescription">{active.description}</p>

              <p className="projectDetails">{active.details}</p>

              <div className="resultLine">
                <span>RESULT</span>
                <strong>{active.result}</strong>
              </div>

              <div className="techList">
                {active.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projectActions">
                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="primaryButton"
                >
                  VIEW GITHUB <span>↗</span>
                </a>

                <div className="projectControls">
                  <button onClick={() => rotateProject(-1)}>←</button>
                  <span>
                    {String(activeProject + 1).padStart(2, "0")} /{" "}
                    {String(PROJECTS.length).padStart(2, "0")}
                  </span>
                  <button onClick={() => rotateProject(1)}>→</button>
                </div>
              </div>
            </div>
          </div>

          <div className="projectRail" data-reveal>
            {PROJECTS.map((project, index) => (
              <button
                key={project.title}
                className={`projectMini ${
                  activeProject === index ? "active" : ""
                }`}
                onClick={() => setActiveProject(index)}
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <em>↗</em>
              </button>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about section">
          <div className="sectionTop" data-reveal>
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h2>
                CURIOUS
                <br />
                <span>BY NATURE.</span>
              </h2>
            </div>
            <span className="sectionIndex">03 / 05</span>
          </div>

          <div className="aboutLayout">
            <div className="aboutStatement" data-reveal>
              <p>
                I like working where <strong>software, data and AI</strong>{" "}
                meet real-world problems.
              </p>
              <p>
                My focus is not just making something work — it is turning an
                idea into a product that is understandable, useful and ready
                to grow.
              </p>
            </div>

            <div className="aboutFacts" data-reveal>
              <div>
                <span>01</span>
                <strong>BUILD</strong>
                <p>
                  Backend APIs, full-stack products and data-driven
                  applications.
                </p>
              </div>
              <div>
                <span>02</span>
                <strong>LEARN</strong>
                <p>
                  GenAI, RAG, machine learning, analytics and modern software
                  engineering.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>IMPROVE</strong>
                <p>
                  I enjoy taking rough ideas and turning them into cleaner,
                  more useful experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="statsStrip" data-reveal>
            <div>
              <strong>5+</strong>
              <span>FEATURED PROJECTS</span>
            </div>
            <div>
              <strong>AI + DATA</strong>
              <span>CORE FOCUS</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>GRADUATING YEAR</span>
            </div>
            <div>
              <strong>INDIA</strong>
              <span>BASED IN</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section">
          <div className="sectionTop" data-reveal>
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <h2>
                TOOLS
                <br />
                <span>I USE.</span>
              </h2>
            </div>
            <span className="sectionIndex">03.5 / 05</span>
          </div>

          <div className="skillsGrid">
            {SKILLS.map((skill, groupIndex) => (
              <div
                className="skillGroup"
                data-reveal
                key={skill.group}
                style={
                  { "--delay": `${groupIndex * 80}ms` } as React.CSSProperties
                }
              >
                <div className="skillGroupHead">
                  <span>0{groupIndex + 1}</span>
                  <strong>{skill.group}</strong>
                </div>
                <div className="skillItems">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="experience section">
          <div className="sectionTop" data-reveal>
            <div>
              <p className="eyebrow">EXPERIENCE & EDUCATION</p>
              <h2>
                EXPERIENCE
                <br />
                <span>& EDUCATION.</span>
              </h2>
            </div>
            <span className="sectionIndex">04 / 05</span>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((item, index) => (
              <article
                className="timelineItem"
                data-reveal
                key={item.title}
                style={
                  { "--delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <div className="timelineDate">{item.date}</div>

                <div className="timelineDot">
                  <span />
                </div>

                <div className="timelineContent">
                  <p className="timelineRole">{item.role}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="highlightTags">
                    {item.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>

                <span className="timelineArrow">↗</span>
              </article>
            ))}
          </div>

          <article className="educationCard" data-reveal>
            <div className="educationNumber">EDUCATION</div>
            <div>
              <p>{EDUCATION.period}</p>
              <h3>{EDUCATION.institute}</h3>
              <strong>{EDUCATION.degree}</strong>
              <span>SPECIALIZATION — {EDUCATION.specialization}</span>
            </div>
            <div className="educationBadge">VIT</div>
          </article>
        </section>

        {/* CERTIFICATIONS */}
        <section className="certifications section">
          <div className="sectionTop" data-reveal>
            <div>
              <p className="eyebrow">CERTIFICATIONS & COURSES</p>
              <h2>
                ALWAYS
                <br />
                <span>LEARNING.</span>
              </h2>
              <p className="sectionNote">
                Professional certifications and completed learning programs —
                listed separately from work experience.
              </p>
            </div>
          </div>

          <div className="certGrid">
            {CERTIFICATIONS.map(([issuer, name], index) => (
              <div className="certCard" data-reveal key={name}>
                <span>0{index + 1}</span>
                <small>{issuer}</small>
                <strong>{name}</strong>
                <em>↗</em>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="contactOrbit" aria-hidden="true">
            <div className="contactRing contactRing1" />
            <div className="contactRing contactRing2" />
            <div className="contactRing contactRing3" />
            <span>✦</span>
          </div>

          <div className="contactTop" data-reveal>
            <p className="eyebrow">CONTACT / 05</p>
            <h2>
              LET&apos;S
              <br />
              <span>CREATE.</span>
            </h2>
          </div>

          <div className="contactBody" data-reveal>
            <p>
              Have an opportunity, project, internship, collaboration or
              product idea?
              <br />
              Let&apos;s turn it into something useful.
            </p>

            <div className="contactDetails">
              <a href={SOCIALS.email}>deepnema7@gmail.com</a>
              <a href={SOCIALS.phone}>+91 8302692414</a>
            </div>

            <a className="bigMail" href={SOCIALS.email}>
              <span>START A CONVERSATION</span>
              <b>↗</b>
            </a>
          </div>

          <div className="socialGrid" data-reveal>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer">
              <span>01</span>
              <strong>GITHUB</strong>
              <em>DeepNema7 ↗</em>
            </a>

            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
              <span>02</span>
              <strong>LINKEDIN</strong>
              <em>Deep Nema ↗</em>
            </a>

            <a href={SOCIALS.email}>
              <span>03</span>
              <strong>EMAIL</strong>
              <em>deepnema7@gmail.com ↗</em>
            </a>

            <a href={SOCIALS.phone}>
              <span>04</span>
              <strong>PHONE</strong>
              <em>+91 8302692414 ↗</em>
            </a>
          </div>

          <footer>
            <span>DEEP NEMA / 2026</span>
            <span>AI • DATA • SOFTWARE</span>
            <span>BUILT WITH CURIOSITY + CODE</span>
          </footer>
        </section>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #060708;
        }

        body {
          margin: 0;
          background: #060708;
          color: #f5f2eb;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        a {
          font: inherit;
        }

        button {
          color: inherit;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          --bg: #060708;
          --panel: #0b0d0f;
          --panel2: #0e1012;
          --text: #f5f2eb;
          --muted: #7f858b;
          --line: rgba(255, 255, 255, 0.1);
          --accent: #ff5537;
          --accent2: #ff8068;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 73, 45, 0.055),
              transparent 25%
            ),
            radial-gradient(
              circle at 78% 12%,
              rgba(76, 91, 118, 0.06),
              transparent 24%
            ),
            var(--bg);
        }

        .site::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.45;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.018) 1px,
              transparent 1px
            );
          background-size: 100px 100px;
          mask-image: linear-gradient(to bottom, black, transparent 75%);
        }

        .noise {
          position: fixed;
          inset: -50%;
          z-index: 20;
          pointer-events: none;
          opacity: 0.055;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
          animation: noiseMove 0.22s steps(2) infinite;
        }

        .cursorGlow {
          position: fixed;
          z-index: 1;
          width: 420px;
          height: 420px;
          left: var(--mouse-x);
          top: var(--mouse-y);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(255, 79, 53, 0.08),
            transparent 68%
          );
          filter: blur(18px);
          transition: left 0.25s ease, top 0.25s ease;
        }

        .topProgress {
          position: fixed;
          left: 0;
          top: 0;
          height: 2px;
          background: var(--accent);
          z-index: 100;
          box-shadow: 0 0 18px rgba(255, 85, 55, 0.8);
        }

        .nav {
          height: 78px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 38px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(6, 7, 8, 0.66);
          backdrop-filter: blur(18px);
        }

        .logo {
          border: 0;
          background: none;
          font-weight: 1000;
          letter-spacing: -0.12em;
          font-size: 22px;
          cursor: pointer;
        }

        .logo span {
          color: var(--accent);
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-left: auto;
          margin-right: 28px;
        }

        .navLinks button,
        .motionButton {
          border: 0;
          background: none;
          cursor: pointer;
          color: #777c82;
          font-size: 9px;
          letter-spacing: 0.16em;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .navLinks button:hover,
        .motionButton:hover {
          color: white;
          transform: translateY(-2px);
        }

        .motionButton {
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 9px 12px;
          display: flex;
          gap: 7px;
          align-items: center;
        }
        .navActions { display:flex; align-items:center; gap:9px; }
        .resumeButton {
          border:1px solid rgba(255,85,55,.5); padding:9px 12px;
          display:inline-flex; align-items:center; gap:12px; font-size:9px;
          letter-spacing:.15em; transition:.3s ease;
        }
        .resumeButton span { color:var(--accent); font-size:14px; }
        .resumeButton:hover { background:var(--accent); color:#120a08; transform:translateY(-2px); }
        .resumeButton:hover span { color:#120a08; }


        .liveDot,
        .deadDot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          display: inline-block;
        }

        .liveDot {
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }

        .deadDot {
          background: #555;
        }

        .menuButton {
          display: none;
          background: none;
          border: 0;
          cursor: pointer;
        }

        .section {
          position: relative;
          z-index: 2;
          padding: 145px 6vw 150px;
          border-top: 1px solid var(--line);
        }

        .hero {
          min-height: 100vh;
          padding: 145px 6vw 70px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .heroMeta {
          display: flex;
          justify-content: space-between;
          color: #5f6469;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .heroMain {
          max-width: 1500px;
          width: 100%;
          margin: auto;
          padding-top: 70px;
          position: relative;
        }

        .heroIntro {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          color: var(--muted);
          margin-bottom: 25px;
        }

        .heroIntro p {
          margin: 0;
          text-align: right;
          font-size: 9px;
          line-height: 1.8;
          letter-spacing: 0.16em;
        }

        .eyebrow {
          color: var(--accent);
          font-size: 9px;
          letter-spacing: 0.23em;
          margin: 0 0 15px;
        }

        .heroTitle {
          font-size: clamp(110px, 19vw, 330px);
          line-height: 0.73;
          letter-spacing: -0.095em;
          margin: 0;
          font-weight: 950;
          position: relative;
        }

        .heroTitle span {
          color: transparent;
          -webkit-text-stroke: 1px #6e747a;
          transition: -webkit-text-stroke-color 0.4s ease;
        }

        .heroTitle:hover span {
          -webkit-text-stroke-color: var(--accent);
        }

        .heroBottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 60px;
        }

        .heroRole {
          display: flex;
          gap: 25px;
          align-items: flex-start;
        }

        .heroRole span {
          color: var(--accent);
          font-size: 9px;
        }

        .heroRole strong {
          font-size: 11px;
          line-height: 1.55;
          letter-spacing: 0.13em;
        }


        .heroActions { display:flex; align-items:center; gap:10px; }
        .resumeHeroButton {
          border:1px solid rgba(255,85,55,.55); background:rgba(255,85,55,.08);
          padding:14px 17px; display:flex; align-items:center; gap:28px;
          font-size:9px; letter-spacing:.15em; transition:.35s ease;
        }
        .resumeHeroButton span { color:var(--accent); font-size:17px; }
        .resumeHeroButton:hover { background:var(--accent); color:#120a08; transform:translateY(-5px); }
        .resumeHeroButton:hover span { color:#120a08; }

        .scrollCue {
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.02);
          padding: 14px 17px;
          display: flex;
          align-items: center;
          gap: 28px;
          cursor: pointer;
          color: #92979b;
          font-size: 9px;
          letter-spacing: 0.15em;
          transition: 0.35s ease;
        }

        .scrollCue:hover {
          border-color: rgba(255, 85, 55, 0.5);
          color: white;
          transform: translateY(-5px);
        }

        .scrollCue b {
          color: var(--accent);
          font-size: 17px;
          font-weight: 400;
        }

        .marquee {
          position: relative;
          z-index: 3;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 22px 0;
          color: #555b61;
          background: rgba(5, 6, 7, 0.32);
        }

        .marqueeTrack {
          width: max-content;
          display: flex;
          align-items: center;
          animation: marquee 24s linear infinite;
          will-change: transform;
        }

        .marqueeSet {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .marquee span {
          display: inline-flex;
          align-items: center;
          padding: 0 40px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.24em;
        }

        .marquee i {
          color: var(--accent);
          font-size: 13px;
          font-style: normal;
          text-shadow: 0 0 12px rgba(255, 85, 55, 0.45);
        }

        .marquee:hover .marqueeTrack {
          animation-play-state: paused;
        }

        .sectionTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 75px;
        }

        .sectionTop h2,
        .contactTop h2 {
          margin: 0;
          font-size: clamp(65px, 9vw, 145px);
          line-height: 0.8;
          letter-spacing: -0.08em;
        }

        .sectionTop h2 span,
        .contactTop h2 span {
          color: transparent;
          -webkit-text-stroke: 1px #686e73;
        }

        .sectionIndex {
          color: #555b60;
          font-size: 9px;
          letter-spacing: 0.18em;
        }
        .sectionNote {
          max-width: 380px;
          margin: 22px 0 0;
          color: #666c71;
          font-size: 10px;
          line-height: 1.7;
          letter-spacing: 0.04em;
        }


        /* ORBITAL BACKGROUND */
        .orbitalSystem {
          position: fixed;
          right: -120px;
          top: 20%;
          width: 430px;
          height: 430px;
          z-index: 1;
          pointer-events: none;
          opacity: 0.7;
        }

        .orbitalCore {
          position: absolute;
          inset: 45%;
          border: 1px solid rgba(255, 85, 55, 0.35);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #666c71;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .orbitOne {
          inset: 0;
          animation: spin 18s linear infinite;
        }

        .orbitTwo {
          inset: 45px -40px;
          transform: rotate(55deg);
          animation: spinReverse 25s linear infinite;
        }

        .orbitThree {
          inset: -40px 55px;
          transform: rotate(-35deg);
          animation: spin 31s linear infinite;
        }

        .orbitDot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          top: 50%;
          right: -3px;
          box-shadow: 0 0 20px rgba(255, 85, 55, 0.8);
        }

        /* WORK */
        .projectStage {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          min-height: 620px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.015);
        }

        .projectVisual {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255, 85, 55, 0.1), transparent 25%),
            #090b0d;
          border-right: 1px solid var(--line);
        }

        .projectGrid {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(60deg) scale(1.4);
          transform-origin: center bottom;
        }

        .projectOrb {
          width: 270px;
          height: 270px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(255, 85, 55, 0.55);
          display: grid;
          place-items: center;
          box-shadow:
            0 0 90px rgba(255, 85, 55, 0.1),
            inset 0 0 70px rgba(255, 85, 55, 0.05);
        }

        .projectOrb::before,
        .projectOrb::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
        }

        .projectOrb::before {
          inset: 28px -40px;
          transform: rotate(55deg);
        }

        .projectOrb::after {
          inset: -30px 45px;
          transform: rotate(-35deg);
        }

        .projectOrb span {
          font-size: 90px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 85, 55, 0.6);
          letter-spacing: -0.1em;
        }

        .projectCorner {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 24px;
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 0.16em;
          color: #5e646a;
        }

        .projectInfo {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .projectNumber {
          font-size: 10px;
          color: var(--accent);
          margin-bottom: 28px;
        }

        .projectCategory {
          color: #777d82;
          font-size: 9px;
          letter-spacing: 0.17em;
          margin: 0 0 12px;
        }

        .projectInfo h3 {
          margin: 0 0 25px;
          font-size: clamp(40px, 5vw, 80px);
          letter-spacing: -0.07em;
          line-height: 0.9;
        }

        .projectDescription {
          color: #c4c7c8;
          font-size: 16px;
          line-height: 1.7;
          max-width: 570px;
          margin: 0 0 15px;
        }

        .projectDetails {
          color: #73797e;
          font-size: 12px;
          line-height: 1.8;
          max-width: 570px;
          margin: 0 0 28px;
        }

        .resultLine {
          display: flex;
          gap: 25px;
          align-items: center;
          border-top: 1px solid var(--line);
          padding-top: 17px;
          margin-bottom: 20px;
        }

        .resultLine span {
          color: var(--accent);
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .resultLine strong {
          color: #d5d7d7;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .techList {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .techList span,
        .highlightTags span {
          padding: 7px 9px;
          border: 1px solid var(--line);
          color: #7c8287;
          font-size: 8px;
          letter-spacing: 0.08em;
        }

        .projectActions {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .primaryButton {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 13px 15px;
          background: var(--accent);
          color: #120a08;
          font-weight: 800;
          font-size: 9px;
          letter-spacing: 0.13em;
          transition: 0.35s ease;
        }

        .primaryButton:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(255, 85, 55, 0.15);
        }

        .primaryButton span {
          font-size: 17px;
        }

        .projectControls {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #6e7479;
          font-size: 9px;
        }

        .projectControls button {
          width: 34px;
          height: 34px;
          border: 1px solid var(--line);
          background: transparent;
          color: #b5b8ba;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .projectControls button:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .projectRail {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border: 1px solid var(--line);
          border-top: 0;
        }

        .projectMini {
          border: 0;
          border-right: 1px solid var(--line);
          background: transparent;
          color: #686e73;
          padding: 20px;
          text-align: left;
          cursor: pointer;
          min-height: 90px;
          display: grid;
          grid-template-columns: 30px 1fr 20px;
          gap: 10px;
          align-items: center;
          transition: 0.3s ease;
        }

        .projectMini:last-child {
          border-right: 0;
        }

        .projectMini:hover,
        .projectMini.active {
          background: rgba(255, 85, 55, 0.055);
          color: white;
        }

        .projectMini span {
          color: var(--accent);
          font-size: 9px;
        }

        .projectMini strong {
          font-size: 10px;
          letter-spacing: 0.06em;
        }

        .projectMini em {
          font-style: normal;
        }

        /* ABOUT */
        .aboutLayout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 10vw;
        }

        .aboutStatement {
          max-width: 780px;
        }

        .aboutStatement p {
          color: #989da1;
          font-size: clamp(28px, 4vw, 54px);
          line-height: 1.15;
          letter-spacing: -0.04em;
          margin: 0 0 28px;
        }

        .aboutStatement strong {
          color: #f1eee8;
          font-weight: 500;
        }

        .aboutFacts {
          border-top: 1px solid var(--line);
        }

        .aboutFacts > div {
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 40px 120px 1fr;
          gap: 20px;
        }

        .aboutFacts span {
          color: var(--accent);
          font-size: 9px;
        }

        .aboutFacts strong {
          font-size: 10px;
          letter-spacing: 0.13em;
        }

        .aboutFacts p {
          color: #777d82;
          font-size: 11px;
          line-height: 1.7;
          margin: 0;
        }

        .statsStrip {
          margin-top: 100px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .statsStrip div {
          min-height: 145px;
          padding: 25px;
          border-right: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .statsStrip div:last-child {
          border-right: 0;
        }

        .statsStrip strong {
          font-size: 34px;
          letter-spacing: -0.06em;
        }

        .statsStrip span {
          color: #676d72;
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        /* SKILLS */
        .skills {
          background:
            linear-gradient(
              110deg,
              rgba(255,255,255,0.015),
              transparent 55%
            ),
            #080a0c;
        }

        .skillsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .skillGroup {
          background: #090b0d;
          padding: 32px;
          min-height: 220px;
          transition: 0.45s ease;
        }

        .skillGroup:hover {
          background: #0d1012;
          transform: translateY(-4px);
          box-shadow: 0 20px 70px rgba(0,0,0,0.25);
        }

        .skillGroupHead {
          display: flex;
          justify-content: space-between;
          margin-bottom: 45px;
        }

        .skillGroupHead span {
          color: var(--accent);
          font-size: 9px;
        }

        .skillGroupHead strong {
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .skillItems {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skillItems span {
          border: 1px solid var(--line);
          padding: 11px 13px;
          color: #a3a7aa;
          font-size: 10px;
          transition: 0.25s ease;
        }

        .skillItems span:hover {
          border-color: rgba(255,85,55,0.45);
          color: white;
          transform: translateY(-3px);
        }

        /* EXPERIENCE */
        .timeline {
          border-top: 1px solid var(--line);
        }

        .timelineItem {
          position: relative;
          display: grid;
          grid-template-columns: 180px 40px 1fr 40px;
          gap: 25px;
          padding: 45px 0;
          border-bottom: 1px solid var(--line);
          align-items: start;
        }

        .timelineDate {
          color: #62686d;
          font-size: 9px;
          letter-spacing: 0.13em;
          line-height: 1.5;
        }

        .timelineDot {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .timelineDot::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: -75px;
          width: 1px;
          background: var(--line);
        }

        .timelineItem:last-child .timelineDot::before {
          bottom: 0;
        }

        .timelineDot span {
          position: relative;
          z-index: 1;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 16px rgba(255,85,55,0.45);
        }

        .timelineRole {
          margin: 0 0 10px;
          color: var(--accent);
          font-size: 8px;
          letter-spacing: 0.17em;
        }

        .timelineContent h3 {
          margin: 0 0 15px;
          font-size: clamp(25px, 3vw, 42px);
          letter-spacing: -0.05em;
        }

        .timelineContent > p:not(.timelineRole) {
          max-width: 760px;
          color: #777d82;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .highlightTags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 20px;
        }

        .timelineArrow {
          color: #6c7277;
          font-size: 22px;
          transition: 0.3s ease;
        }

        .timelineItem:hover .timelineArrow {
          color: var(--accent);
          transform: translate(5px, -5px);
        }

        .educationCard {
          margin-top: 60px;
          border: 1px solid var(--line);
          background:
            radial-gradient(circle at 90% 50%, rgba(255,85,55,0.07), transparent 30%),
            #0a0c0e;
          padding: 38px;
          display: grid;
          grid-template-columns: 180px 1fr 100px;
          gap: 35px;
          align-items: center;
        }

        .educationNumber {
          color: var(--accent);
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .educationCard p {
          color: #666c71;
          font-size: 9px;
          letter-spacing: 0.12em;
          margin: 0 0 13px;
        }

        .educationCard h3 {
          margin: 0 0 8px;
          font-size: 28px;
          letter-spacing: -0.05em;
        }

        .educationCard strong,
        .educationCard span {
          display: block;
          font-size: 10px;
          color: #858b90;
          letter-spacing: 0.08em;
        }

        .educationBadge {
          width: 72px;
          height: 72px;
          border: 1px solid rgba(255,85,55,0.45);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--accent);
          font-weight: 900;
          font-size: 13px;
        }

        /* CERTIFICATIONS */
        .certGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--line);
          background: var(--line);
          gap: 1px;
        }

        .certCard:last-child {
          grid-column: span 1;
        }

        .certCard {
          min-height: 230px;
          background: #090b0d;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.35s ease;
        }

        .certCard:hover {
          background: #0e1113;
          transform: translateY(-5px);
        }

        .certCard > span {
          color: var(--accent);
          font-size: 9px;
        }

        .certCard small {
          color: #666c71;
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .certCard strong {
          max-width: 250px;
          font-size: 21px;
          letter-spacing: -0.04em;
        }

        .certCard em {
          color: #62686d;
          font-style: normal;
          align-self: flex-end;
          font-size: 18px;
        }

        /* CONTACT */
        .contact {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 80% 25%,
              rgba(255,85,55,0.07),
              transparent 30%
            ),
            #070809;
        }

        .contactTop {
          position: relative;
          z-index: 3;
        }

        .contactBody {
          position: relative;
          z-index: 3;
          margin-top: 75px;
          max-width: 760px;
        }

        .contactBody > p {
          color: #8d9296;
          font-size: 17px;
          line-height: 1.8;
        }

        .contactDetails {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 40px;
          gap: 9px;
        }

        .contactDetails a {
          font-size: clamp(24px, 3vw, 43px);
          letter-spacing: -0.05em;
          border-bottom: 1px solid transparent;
          transition: 0.3s ease;
        }

        .contactDetails a:hover {
          color: var(--accent);
          border-bottom-color: var(--accent);
          transform: translateX(10px);
        }

        .bigMail {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 25px 0;
          font-size: 11px;
          letter-spacing: 0.16em;
          transition: 0.3s ease;
        }

        .bigMail:hover {
          color: var(--accent);
          padding-left: 10px;
          padding-right: 10px;
        }

        .bigMail b {
          font-size: 24px;
          font-weight: 300;
        }

        .socialGrid {
          margin-top: 100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .socialGrid a {
          min-height: 170px;
          padding: 22px;
          border-right: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.35s ease;
        }

        .socialGrid a:last-child {
          border-right: 0;
        }

        .socialGrid a:hover {
          background: rgba(255,85,55,0.045);
          transform: translateY(-6px);
        }

        .socialGrid span {
          color: var(--accent);
          font-size: 8px;
        }

        .socialGrid strong {
          font-size: 18px;
          letter-spacing: -0.03em;
        }

        .socialGrid em {
          color: #686e73;
          font-size: 9px;
          font-style: normal;
        }

        footer {
          margin-top: 80px;
          padding-top: 25px;
          border-top: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          color: #4f555a;
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        /* CONTACT ORBITS */
        .contactOrbit {
          position: absolute;
          right: -80px;
          top: 25%;
          width: 550px;
          height: 550px;
          opacity: 0.5;
          pointer-events: none;
        }

        .contactRing {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
        }

        .contactRing1 {
          animation: spin 22s linear infinite;
        }

        .contactRing2 {
          inset: 70px -40px;
          transform: rotate(60deg);
          border-color: rgba(255,85,55,0.16);
          animation: spinReverse 28s linear infinite;
        }

        .contactRing3 {
          inset: -40px 75px;
          transform: rotate(-40deg);
          animation: spin 32s linear infinite;
        }

        .contactOrbit > span {
          position: absolute;
          left: 50%;
          top: 50%;
          color: var(--accent);
          font-size: 28px;
        }

        /* REVEALS */
        [data-reveal] {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--delay, 0ms);
        }

        [data-reveal].visible {
          opacity: 1;
          transform: translateY(0);
        }

        .motion-off [data-reveal] {
          opacity: 1;
          transform: none;
          transition: none;
        }

        .motion-off .orbit,
        .motion-off .orbitDot,
        .motion-off .contactRing,
        .motion-off .marqueeTrack {
          animation: none !important;
        }

        /* KEYFRAMES */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes marquee {
          to { transform: translateX(-50%); }
        }

        @keyframes noiseMove {
          0% { transform: translate(0,0); }
          25% { transform: translate(2%, -1%); }
          50% { transform: translate(-1%, 2%); }
          75% { transform: translate(1%, 1%); }
          100% { transform: translate(0,0); }
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .nav {
            padding: 0 22px;
          }

          .navLinks {
            gap: 15px;
            margin-right: 15px;
          }

          .orbitalSystem {
            right: -220px;
          }

          .projectStage {
            grid-template-columns: 1fr;
          }

          .projectVisual {
            min-height: 430px;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .projectRail {
            grid-template-columns: repeat(3, 1fr);
          }

          .aboutLayout {
            grid-template-columns: 1fr;
            gap: 70px;
          }

          .skillsGrid {
            grid-template-columns: 1fr;
          }

          .socialGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .socialGrid a:nth-child(2) {
            border-right: 0;
          }

          .socialGrid a:nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 700px) {
          .nav {
            height: 68px;
          }

          .navLinks {
            position: fixed;
            top: 68px;
            left: 15px;
            right: 15px;
            padding: 18px;
            flex-direction: column;
            align-items: stretch;
            background: rgba(10, 12, 14, 0.97);
            border: 1px solid var(--line);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: 0.3s ease;
          }

          .navLinks.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .navLinks button {
            text-align: left;
            padding: 14px 5px;
          }

          .navActions { margin-left:auto; margin-right:14px; }
          .resumeButton { padding:8px 10px; }
          .motionButton { display:none; }

          .menuButton {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .menuButton span {
            width: 24px;
            height: 1px;
            background: white;
          }

          .hero,
          .section {
            padding-left: 22px;
            padding-right: 22px;
          }

          .hero {
            padding-top: 110px;
          }

          .heroMeta {
            font-size: 7px;
          }

          .heroIntro {
            display: block;
          }

          .heroIntro p {
            text-align: left;
            margin-top: 12px;
          }

          .heroTitle {
            font-size: clamp(82px, 25vw, 180px);
            margin-top: 50px;
          }

          .heroBottom {
            align-items:flex-start; flex-direction:column; gap:35px;
          }
          .heroActions { width:100%; flex-direction:column; align-items:stretch; }
          .resumeHeroButton,.scrollCue { justify-content:space-between; }

          .section {
            padding-top: 100px;
            padding-bottom: 100px;
          }

          .sectionTop h2,
          .contactTop h2 {
            font-size: clamp(54px, 18vw, 100px);
          }

          .projectInfo {
            padding: 30px 22px;
          }

          .projectVisual {
            min-height: 350px;
          }

          .projectOrb {
            width: 190px;
            height: 190px;
          }

          .projectOrb span {
            font-size: 65px;
          }

          .projectActions {
            flex-direction: column;
            align-items: stretch;
          }

          .projectControls {
            justify-content: space-between;
          }

          .projectRail {
            grid-template-columns: 1fr;
          }

          .projectMini {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .projectMini:last-child {
            border-bottom: 0;
          }

          .statsStrip {
            grid-template-columns: repeat(2, 1fr);
          }

          .statsStrip div:nth-child(2) {
            border-right: 0;
          }

          .statsStrip div:nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }

          .aboutFacts > div {
            grid-template-columns: 30px 80px 1fr;
            gap: 10px;
          }

          .timelineItem {
            grid-template-columns: 1fr 20px;
            gap: 10px;
          }

          .timelineDate {
            grid-column: 1 / -1;
          }

          .timelineDot {
            grid-column: 2;
            grid-row: 2 / span 2;
          }

          .timelineContent {
            grid-column: 1;
            grid-row: 2;
          }

          .timelineArrow {
            display: none;
          }

          .educationCard {
            grid-template-columns: 1fr;
          }

          .certGrid {
            grid-template-columns: 1fr;
          }

          .contactOrbit {
            right: -270px;
            top: 28%;
            opacity: 0.3;
          }

          .socialGrid {
            grid-template-columns: 1fr;
          }

          .socialGrid a,
          .socialGrid a:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .socialGrid a:last-child {
            border-bottom: 0;
          }

          footer {
            flex-direction: column;
            gap: 10px;
          }

          .orbitalSystem {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          [data-reveal] {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}