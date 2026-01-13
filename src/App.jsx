import './App.css';
import email from './assets/images/email.jpeg';
import linkedinlogo from './assets/images/linkedinlogo.jpeg';
import updatedHeadshot from './assets/images/updatedheadshot.jpeg';
import dashboard from './assets/images/dashboard.jpeg';
import linuxinstalled from './assets/images/linuxinstalled.jpeg';
import gitactions from './assets/images/gitactions.jpeg';
import githublogo from './assets/images/githublogo.jpeg';

function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>
          Kani <span>Moore-Singleton</span>
        </h1>
        <img src={updatedHeadshot} alt="Headshot" className="Headshot" />
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
          <div className="bar"><div style={{ width: '90%' }} /></div>
        </div>
        <div className="skill">
          <p>Splunk / SIEM Tools</p>
          <div className="bar"><div style={{ width: '70%' }} /></div>
        </div>
        <div className="skill">
          <p>Linux</p>
          <div className="bar"><div style={{ width: '70%' }} /></div>
        </div>
        <div className="skill">
          <p>Version Control/Dev Ops</p>
          <div className="bar"><div style={{ width: '85%' }} /></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>Projects/Hands on Experience</h2>
        <div className="grid">
          <div className="project-card">
            <img src={dashboard} alt="Splunk Dashboard" />
            <div className="overlay">
              <h3>Splunk Dashboard</h3>
              <p>Firewall & network traffic monitoring</p> 
              <p>Installed and started Splunk services via the command line,
                then I created a custom firewall log data and ingested it into Splunk.
                I then created SPL queries to accurately track total, allowed, and blocked connections.
                This project reflects real, hands-on experience with SIEM setup, log ingestion, SPL, 
                and security-focused dashboard design—not just theory. 
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={linuxinstalled} alt="Kali Linux" />
            <div className="overlay">
              <h3>Kali Linux Installation</h3>
              <p>Kali Linux VM Setup on Mac using UTM</p>
              <p>Installed UTM for virtualization on macOS (Apple Silicon)
                Downloaded the official Kali Linux ARM64 installer
                Created a VM with 6GB RAM, 64GB disk, default CPU cores, and enabled Apple Virtualization
                Installed Kali using the Graphical Installer, configured hostname and user account
                Set up the XFCE desktop environment to boot automatically into a GUI
                Verified system functionality, updated packages, and prepared the VM for labs
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={gitactions} alt="Git Actions" />
            <div className="overlay">
              <h3>Git Actions</h3>
              <p>Automated CI/CD pipelines</p>
              <p>Developed and implemented GitHub Actions workflows to automate testing, building, and deployment processes.
                Configured triggers for workflows based on events such as push, pull request, and release creation.
                Integrated third-party services and tools to enhance the CI/CD pipeline efficiency and reliability.
                Monitored workflow executions and optimized performance by reducing build times and resource usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>
          <img src={email} alt="email" className="email-logo" /> 
          <a href="mailto:Ladavemoore@gmail.com"> Ladavemoore@gmail.com</a>
        </p>
        <p>
          <img src={linkedinlogo} alt="LinkedIn" className="linkedin-logo" /> 
          <a href="https://www.linkedin.com/in/kani-moore-singleton-883730137/"> Kani Moore-Singleton</a>
        </p>
        <p>
          <img src={githublogo} alt="GitHub" className="github-logo" /> 
          <a href="https://github.com/Kanilive1995"> Kani's Repositories</a>
        </p>
      </section>
    </>
  );
}

export default App;
