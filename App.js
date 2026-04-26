import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(0px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  const projects = [
    {
      id: 1,
      title: "To-Do App Prototype",
      desc: "A to-do app prototype built in Figma.",
      img: "https://i.postimg.cc/FsYqqpZS/To-Do.png",
      details: "Built to allow users to create and manage tasks, set deadlines, and mark tasks as completed.",
      link: "https://www.figma.com/proto/iJOYzndtoBhnOWAgXIwHdf/todo-app?node-id=0-1&t=AmMNexJ5v23Sqr9v-1",
    },
    {
      id: 2,
      title: "Quiz App",
      desc: "A simple quiz app built with React.",
      img: "https://i.postimg.cc/5tjGLmRq/Screenshot-(140).png",
      details: "Runs the user through a series of questions and provides a final score with feedback on their answers.",
      link: "https://github.com/chris4271/quiz",
    },
    {
      id: 3,
      title: "Exercise App",
      desc: "A fitness tracking app built with React.",
      img: "https://i.postimg.cc/RVWqNrSr/Screenshot-(141).png",
      details: "A fitness app that allows users to count their reps, track their workout times, and receive suggested exercises.",
      link: "https://github.com/chris4271/updated-exercise-app",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email.includes("@") || !form.message) {
      setError("Please enter a valid name, email, and message.");
      return;
    }

    setError("");
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #ffffff;
          color: #000000;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: #797979;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
          z-index: 1000;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        section {
          padding: 100px 20px;
          min-height: 100vh;
        }

        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #d1d1d1;
        }

        h1, h2, h3 {
          margin-bottom: 1rem;
        }

        h2 {
          border-bottom: 2px solid rgb(231, 231, 231);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          align-items: start;
        }

        .card {
          background: #e6e6e6;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }

        .card img {
          width: auto;
          height: 110px;
          display: block;
          object-fit: cover;
          margin-left: auto;
          margin-right: auto;
          border: 4px solid #1d1b35;
        }

        button {
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
          background: rgb(144, 182, 212);
          color: white;
          cursor: pointer;
        }

        button:hover {
          background: rgb(140, 197, 240);
          box-shadow:
            0 10px 15px -3px #488aec4f,
            0 4px 6px -2px #488aec17;
        }

        form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin: auto;
          gap: 1rem;
        }

        input, textarea {
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
          font-family: inherit;
        }

        textarea {
          resize: none;
          overflow: hidden;
        }

        footer {
          text-align: center;
          padding: 2rem;
          background: #444444;
          color: white;
          padding-top: 70px;
        }
        
        footer a {
          color: white;
        }

        .project-detail {
          margin-top: 2rem;
          padding: 1rem;
          background: #f0f0f0;
          border-radius: 10px;
        }

        .project-detail img {
          width: 100%;
          max-width: 400px;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        ul {
          text-decoration: none;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          }
        
        .skills-list {
          gap: 0px;
          } 

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Addtl. Projects</a>
      </nav>

      <section id="home" className="hero">
        <animated.div style={fadeIn}>
          <h1>chris burland</h1>
          <p>portfolio</p>
        </animated.div>
      </section>

      <section id="about">
        <animated.div style={fadeIn}>
          <h2>About Me</h2>
          <p>I am a recent graduate from the University of Central Florida. I have a passion for front end development and creating engaging user experiences.</p>

          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Figma</li>
            <li>Adobe Suite</li>
          </ul>

          <h3>Education</h3>
          <p>Bachelor of Science in Digital Media through the University of Central Florida</p>

          <h3>Relevant Work Experience</h3>
          <p>Blah Blah Developer at 123 Company</p>
        </animated.div>
      </section>

      <section id="projects">
        <animated.div style={fadeIn}>
          <h2>Projects</h2>

          <div className="grid">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <img src={project.img} alt="" />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <button onClick={() => setSelectedProject(project)}>
                  View
                </button>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="project-detail">
              <h3>{selectedProject.title}</h3>
              <img src={selectedProject.img} alt="" />
              <p>{selectedProject.details}</p>
              <p><a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Visit Project</a></p>

              <button onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          )}
        </animated.div>
      </section>

      <section id="contact">
        <animated.div style={fadeIn}>
          <h2>Contact</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Send</button>
          </form>
        </animated.div>
      </section>

      <footer>
        <ul>
          <li><a href="https://www.linkedin.com/in/chris-burland/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/chris.burland/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://github.com/chris4271/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://github.com/chris4271/" target="_blank" rel="noopener noreferrer">Email</a></li>
        </ul>
      </footer>
      
    </>
    
  );
}