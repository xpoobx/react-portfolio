import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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



export default App
