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
return (
<div className="projects">
<h1>Projects</h1>
{[1, 2, 3].map((p) => (
<div key={p} className="project-card">
<img src={`/project${p}.jpg`} alt={`Project ${p}`} />
<h2>Project {p}</h2>
<p>temp{p}.</p>
</div>
))}
</div>
);
}

function Education() {
return (
<div className="education">
<h1>Education</h1>
<ul>
<li>B.Sc. in Computer Science - 2024</li>
<li>Web Development Diploma - 2022</li>
</ul>
</div>
);
}

function Services() {
return (
<div className="services">
<h1>Services</h1>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
</div>
);
}


function Contact() {
return (
<div className="contact">
<h1>Contact Me</h1>
<form action="/">
<input type="text" placeholder="First Name" />
<input type="text" placeholder="Last Name" />
<input type="tel" placeholder="Contact Number" />
<input type="email" placeholder="Email Address" />
<textarea placeholder="Message"></textarea>
<button type="submit">Send</button>
</form>
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
</div>
</nav>


<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</main>

<footer>© 2025 My Portfolio</footer>
</div>
</Router>
);
}

export default App
