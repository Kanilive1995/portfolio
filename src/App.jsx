import './App.css';
import Email from './assets/images/Email.jpeg';
import LinkedIn from './assets/images/LinkedIn.jpeg';
import updatedheadshot from './assets/images/updatedheadshot.jpeg';
import Dashboard from './assets/images/Dashboard.jpeg';
import LinuxInstalled from './assets/images/Linux Installed.jpeg';

function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>
          Kani <span>Moore-Singleton</span>
        </h1>
        <img src={updatedheadshot} alt="Headshot" className="Headshot" />
        <p>
          IT professional focused on Software/Application Development, Systems, and Security.
        </p>
        <p>
          I like my code, how I like my coffee: strong, efficient, and capable of keeping me up all night.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact Me</a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skill">
          <p>JavaScript</p>
          <div className="bar">
            <div style={{ width: '85%' }} />
          </div>
        </div>

        <div className="skill">
          <p>Python</p>
          <div className="bar">
            <div style={{ width: '80%' }} />
          </div>
        </div>

        <div className="skill">
          <p>Linux</p>
          <div className="bar">
            <div style={{ width: '70%' }} />
          </div>
        </div>

        <div className="skill">
          <p>Splunk / SIEM</p>
          <div className="bar">
            <div style={{ width: '75%' }} />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="project-card">
            <img src={Dashboard} alt="Splunk Dashboard" />
            <div className="overlay">
              <h3>Splunk Dashboard</h3>
              <p>Firewall & network traffic monitoring</p>
            </div>
          </div>

          <div className="project-card">
            <img src={LinuxInstalled} alt="Kali Linux" />
            <div className="overlay">
              <h3>Kali Linux Lab</h3>
              <p>UTM virtual lab on Apple Silicon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>
          <img src={Email} alt="Email" className="email-logo" /> 
          <a href="mailto:Ladavemoore@gmail.com">Ladavemoore@gmail.com</a>
        </p>
        <p>
          <img src={LinkedIn} alt="LinkedIn" className="linkedin-logo" /> 
          <a href="https://www.linkedin.com/in/kani-moore-singleton-883730137/"> Kani Moore-Singleton</a>
        </p>
      </section>
    </>
  );
}

export default App;
