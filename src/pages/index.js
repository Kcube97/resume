import * as React from "react";
import { FaPhone, FaLinkedin, FaAndroid, FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/index.css";

const IndexPage = () => {
  const divider = "-".repeat(100000);

  return (
    <main className="main">
      <div className="header">
        <div className="name">KOAY KEI KAI</div>
        <div className="role">SOFTWARE ENGINEER</div>
      </div>
      <div className="content">
        <div id="personal" className="personal-block">
          <div className="component">
            <div className="component title">CONTACT</div>
            <div className="component description">
              <FaPhone />
              &nbsp;&nbsp;&nbsp;&nbsp;019 - 425 3029
            </div>
            <div className="component description">
              <MdEmail />
              &nbsp;&nbsp;&nbsp;&nbsp;koaykeikai97@gmail.com
            </div>
            <div className="component description">
              <FaLinkedin />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/koay-kei-kai"
                target="_blank"
                className="link"
              >
                www.linkedin.com/in/koay-kei-kai
              </a>
            </div>
          </div>
          <p className="divider">{divider}</p>
          <div className="component">
            <div className="component title">TECHNICAL SKILLS</div>
            <div className="component description">
              languages: <b>Javascript</b> | <b>Kotlin</b>{" "}
            </div>
            <div className="component description">
              frameworks: <b>React.js</b> | <b>Node.js</b>{" "}
            </div>
            <div className="component description">
              version control: <b>Git</b> | <b>Github</b>{" "}
            </div>
            <div className="component description">
              cloud platform: <b>AWS</b> | <b>Google Cloud Platform</b>{" "}
            </div>
            <div className="component description">
              others: <b>RESTful APIs</b>
            </div>
          </div>
          <p className="divider">{divider}</p>
          <div className="component">
            <div className="component title">EDUCATION</div>
            <div className="component description">
              Bachelor of Computer Science
            </div>
            <div className="component description">
              Universiti Malaysia Terengganu
            </div>
            <div className="component description">2017 - 2020</div>
            <li className="description" style={{ "margin-top": 0 }}>
              CGPA: 3.7
            </li>
            <li className="description" style={{ "margin-top": 0 }}>
              Related coursework: Java, OOP, Networking, Software Requirement
              Engineering
            </li>
          </div>
          <p className="divider">{divider}</p>
          <div className="component">
            <div className="component title">LANGUAGES</div>
            <div
              className="component space-between-row-container description"
              style={{ marginTop: 20 }}
            >
              <div>English</div>
              <div style={{ fontWeight: 400 }}>Upper-Intermediate</div>
            </div>
            <div
              className="component space-between-row-container description"
              style={{ "margin-top": 20 }}
            >
              <div>Madarine</div>
              <div style={{ fontWeight: 400 }}>Advance</div>
            </div>
            <div
              className="component space-between-row-container description"
              style={{ "margin-top": 20 }}
            >
              <div>Malay</div>
              <div style={{ fontWeight: 400 }}>Intermediate</div>
            </div>
          </div>
        </div>
        <div id="work" className="work-block">
          <div className="component" id="profile">
            <div className="component title">PROFILE</div>
            <div className="component description profile">
              &nbsp;&nbsp;A responsible and enthusiastic full-stack developer
              with the ability to work independently and collaborative. I have a
              strong foundation in both front-end and back-end, including
              development, integration, and debugging across diverse platforms.
              In additional to technical expertise, my three years working
              experience taught me to effectively organize my tasks and dedicate
              in writing a concise, ease-to-read and reuseable code. I am also
              constantly self-educating to keep up with the era of artificial
              intelligence.
            </div>
          </div>
          <p className="divider">{divider}</p>
          <div className="component" id="work_experience">
            <div className="component title">WORK EXPERIENCE</div>
            <div>
              <div className="component sub-title job-position">
                Software Engineer
              </div>
              <div className="component sub-title space-between-row-container">
                <a
                  href="https://vechnology.com.my/"
                  target="_blank"
                  className="link"
                >
                  Vechnology Sdn. Bhd.
                </a>
                <div>2020 - Now</div>
              </div>
              <div className="component job-details">
                <div className="componenet description task-title" id="duties">
                  Responsiblities && Duties
                  <div className="description">Development</div>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Develop modules or functions for the existing systems to
                    provide additional functionality and improve the overall
                    user experience.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Fine-tune the existing systems to meet our clients' needs
                    for the event purpose.
                  </li>
                  <div className="description">Debugging / Testing</div>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Conduct a testing on newly developed modules, including unit
                    testing, and integration testing.{" "}
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Debug the client’s machine on-site after receiving feedback
                    of performance issues that suspected to be caused by our
                    android application.
                  </li>
                  <div className="description">Support </div>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Query data from database and export it to my internal team
                    or clients.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Gather and understand client's requirement and provide my
                    professional insight.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Document our current IoT systems, including the tools and
                    services we frequently use.{" "}
                  </li>
                </div>
                <div
                  className="componenet description task-title"
                  id="contributions"
                >
                  Contributions
                  <li className="description" style={{ "margin-top": 0 }}>
                    Designed and built an android sdk that integrated with GHL,
                    a payment service provider, in order to provide cashless
                    payment solution in our application.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Designed and built an android sdk that handle the hardware
                    communication with our android application.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Designed and updated our android application to provide
                    ‘multi-cart’ solution to our client.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Captured and Fixed the serious bugs such as memory leak
                    issue, suspicious script injected issue.
                  </li>
                  <li className="description" style={{ "margin-top": 0 }}>
                    Established AWS simple queue service and lambda functions to
                    handle heavy trafic to our API server.
                  </li>
                </div>
              </div>
            </div>
            <div>
              <div className="component sub-title job-position">
                Internship of Software Engineer
              </div>
              <div className="component sub-title space-between-row-container">
                <a
                  href="https://vechnology.com.my/"
                  target="_blank"
                  className="link"
                >
                  Vechnology Sdn. Bhd.
                </a>
                <div>Jun - Nov 2020</div>
              </div>
              <div
                className="component job-details"
                style={{ "margin-top": 20 }}
              >
                <li className="description" style={{ "margin-top": 0 }}>
                  Reviewed the key points discussed during the hand-over
                  session.
                </li>
                <li className="description" style={{ "margin-top": 0 }}>
                  Learned the high-level architecture of the entire IoT
                  solution.
                </li>
                <li className="description" style={{ "margin-top": 0 }}>
                  Dived the code to understand the flow of the system.
                </li>
                <li className="description" style={{ "margin-top": 0 }}>
                  Developed a module to enable clients bulk import their data
                  into the system.
                </li>
                <li className="description" style={{ "margin-top": 0 }}>
                  Debugged and fixed some minor bugs.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </>
);
