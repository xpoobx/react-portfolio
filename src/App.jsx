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
