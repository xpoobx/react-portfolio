import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
return (
<div className="home">
<h1>Temp Text</h1>
<p>Mission Statement:</p>
<Link to="/about" className="btn">About Me</Link>
</div>
);
}

function About() {
return (
<div className="about">
<h1>About Me</h1>
<img src="/me.jpg" alt="My portrait" />
<p>Intro Text</p>
<a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
</div>
);
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and deployed on Netlify.",
      link: "https://ephemeral-bublanina-a844e6.netlify.app/",
      image: "/portfolio.png"
    },
    {
      id: 2,
      title: "Restaurant Website",
      description: "An HTML mock restaurant site",
      link: "https://xpoobx.github.io/dante5/",
      image: "/restaurant.png"
    },
    {
      id: 3,
      title: "Untitled Video Game",
      description: "A game I'm working on for fun that uses object-oriented coding. I am a programmer and the lead art director for the project.",
      image: "/gameplaceholder.png"
    }
  ];

   return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Education() {
return (
<div className="education">
<h1>Education</h1>
<ul>
<li>Secondary School Diploma - 2022</li>
<li>Software Engineering Technology Advanced Diploma - 2027</li>
</ul>
</div>
);
}

function Services() {
return (
<div className="services">
<h1>Services</h1>
<ul>
<li>Programming</li>
<li>Art Design</li>
<li>Troubleshooting</li>
</ul>
</div>
);
}


function Contact() {
  return (
    <div className="contact">
      <div className="contact-panel">
        <h1>Contact Me</h1>

        <div className="contact-info">
          <p>Email: <a href="mailto:dantepellico@gmail.com">dantepellico@gmail.com</a></p>
          <p>Phone: (705) 441-3654</p>
          <p>Location: Toronto, Canada</p>
          <div className="social-links">
            <a href="https://github.com/xpoobx" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <form action="/" className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="tel" placeholder="Contact Number" />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

function App() {
return (
<Router>
<div className="app">
<nav>
<div className="logo">YN</div>
<span className="site-title">My Portfolio</span>
<div className="nav-links">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/projects">Projects</Link>
<Link to="/education">Education</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact</Link>
</div>
</nav>


<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/education" element={<Education />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>

<footer>© 2025 My Portfolio</footer>
</div>
</Router>
);
}

export default App
