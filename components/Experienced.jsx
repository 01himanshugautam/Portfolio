const CalenderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
    </svg>
  )
}

export default function Experienced({
  showSkill,
  showAchievement,
  showEducation,
  skillWithLevel,
  showTitle,
  titleClass,
}) {
  return (
    <div className="row mt-5">
      <div
        style={{ background: "#f2f5ff" }}
        className="col-md-3 overflow-hidden rounded col-3"
      >
        <div className="mt-3">
          <h3 className="title h6 mt-0 text-uppercase ">SUMMARY</h3>
          <p>
            Experienced software engineer skilled in full-stack development,
            proficient in Node.js, Flutter, and Laravel. Known for delivering
            scalable solutions and passionate about continuous learning in
            emerging technologies.
          </p>
        </div>
        <br />
        <div>
          <h3 className="title h6 mt-3 mb-0 text-uppercase ">Education</h3>
          <div className="mt-2 normal-font">
            <div className="mb-2">
              <div>
                <b>&bull; Mahatma Jyotiba Phule Rohilkhand University</b>
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> Bareilly
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> B.Tech | Computer Science
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> 2018-2022
              </div>
            </div>
            <div className="mb-2">
              <div>
                <b>&bull; Global Inter College, Narayanpur</b>
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> Rampur
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> XII
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> 2016-2018
              </div>
            </div>
            <div className="mb-2">
              <div>
                <b>&bull; R P S Higher Secondary School</b>
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> Rampur
              </div>
              <div className="normal-font">
                <b>-</b> X
              </div>
              <div className="normal-font">
                {" "}
                <b>-</b> 2014-2018
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="mt-3">
          <h3 className="title h6 mt-0 text-uppercase ">Achievement</h3>
          <ul className="mt-2 normal-font pl-4 skill-point">
            <li className="mb-1">1st Prize 1K Hackathon (10/2022)</li>
            <li className="mb-1">Silver Developer award from IIT Roorkee</li>
          </ul>
        </div>

        <br />

        <div className="mt-4">
          <h3 className="title h6  text-uppercase">Personal Info.</h3>
          <div className="">
            <div className="d-flex t justify-content-between">
              <span className="small">Human Lang.</span>
              <span className="normal-font">
                <b> &bull; Hindi &bull; English</b>
              </span>
            </div>
            <div className="d-flex    justify-content-between">
              <span className="small">Current Location</span>
              <span className="normal-font">
                <b>Gurugram</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-9 overflow-hidden  col-9 pl-5 pl-xs-0">
        <div className="">
          <h3 className="title mt-0  h6 text-muted text-uppercase ">Skills</h3>
          <div className="mt-3">
            <ul className="mt-2 normal-font pl-4 skill-point">
              <li className="mb-1">
                <b>Backend</b>: NodeJs, Laravel, TypeScript ,JavaScript Dart,
                MySQL, PSQL, MongoDb, Firebase
              </li>
              <li className="mb-1">
                <b>Infrastructure</b>: AWS, Docker, Kafka, RabbitMq ,System
                Design
              </li>
              <li className="mb-1">
                <b>Frontend</b>: NextJS, HTML, CSS, JavaScript, Bootstrap
              </li>
              <li>
                <b>Others Skill</b>: Jenkins, CI/CD, GitLab, Bitbucket,GitHub
              </li>
            </ul>
          </div>
          <h3 className="title mt-4  h6  text-muted text-uppercase ">
            Work Experience
          </h3>
          <div className="p-1">
            <div className="d-flex justify-content-between">
              <h5 className="text-dark m-0">Sr. Associate Engineer </h5>
              <span className="d-flex align-items-center">
                <CalenderIcon></CalenderIcon>
                <span className="ml-2 normal-font">10/2022 - Ongoing </span>
              </span>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <p className="m-0 normal-font">
                <i>1K Networks - Gurugram</i>
              </p>
            </div>
            <ul className="mt-2 normal-font pl-4">
              <li className="mt-1">
                Developed and deployed a multi-region, multilingual website
                using Node.js, MySQL, and Docker from scratch, driving a
                significant surge in website traffic.
              </li>
              <li className="mt-1">
                Collaborated on the creation of user-friendly APIs for a retail
                POS system, significantly reducing customer complaints.
              </li>
              <li className="mt-1">
                Introduced Redis caching, resulting in a substantial improvement
                in API performance and customer satisfaction.
              </li>
              <li className="mt-1">
                Orchestrated Nginx load balancing for Node.js, significantly
                enhancing performance for over 5000 concurrent users and
                boosting user retention.
              </li>
              <li className="mt-1">
                Engineered the integration of Kapture CRM software, resulting in
                a noticeable increase in customer engagement.
              </li>
            </ul>
          </div>

          <div className="mt-0 p-1 ">
            <div className="d-flex justify-content-between">
              <h5 className="text-dark m-0">Software Engineer</h5>
              <span className="d-flex align-items-center">
                <CalenderIcon></CalenderIcon>
                <span className="ml-2 normal-font">12/2021 - 09/2022 </span>
              </span>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <p className="m-0 ">
                <i>1K Networks - Gurugram</i>
              </p>
            </div>

            <ul className="mt-2 normal-font pl-4">
              <li className="mt-1">
                Spearheaded the transition from monolithic to microservices
                architecture, resulting in a dramatic decrease in system
                downtime.
              </li>

              <li className="mt-1">
                Designed a flexible communication system for seamless messaging
                via texts, emails, and notifications, leading to a significant
                increase in user engagement.
              </li>

              <li className="mt-1">
                Upgraded App Component Version with dynamic data retrieval and
                rendering, markedly enhancing functionality and user experience.
              </li>
              <li className="mt-1">
                Crafted front-end logic using JavaScript and Next.js, resulting
                in a remarkable improvement in user interaction and reduced
                bounce rate.
              </li>

              <li className="mt-1">
                Devised a loyalty points feature, achieving notable increases in
                user engagement and customer retention.
              </li>
            </ul>
          </div>

          <div className="mt-0 p-1  ">
            <div className="d-flex justify-content-between">
              <h5 className=" m-0 text-dark">Flutter Developer</h5>
              <span className="d-flex align-items-center">
                <CalenderIcon></CalenderIcon>
                <span className="ml-2 normal-font">06/2021- 10/2021</span>
              </span>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <p className="m-0 normal-font ">
                <i> Native Developers - Noida </i>
              </p>
            </div>

            <ul className="mt-2 normal-font pl-4">
              <li>
                Authored an educational app for Dexito, garnering significant
                downloads within a short period.
              </li>
              <li className="mt-1">
                Enhanced app performance and user satisfaction through code
                optimization and UI refinement, leading to a decrease in app
                uninstallations
              </li>
              <li className="mt-1">
                Integrated Rest API, significantly reducing loading times and
                improving data accuracy, resulting in higher user retention.
              </li>
              <li className="mt-1">
                Implemented optimized state management techniques, leading to a
                noticeable decrease in app crashes and an overall improvement in
                user experience
              </li>
            </ul>
          </div>

          <div className="mt-0 p-1  ">
            <div className="d-flex justify-content-between">
              <h5 className=" m-0 text-dark">Flutter Developer</h5>
              <span className="d-flex align-items-center">
                <CalenderIcon></CalenderIcon>
                <span className="ml-2 normal-font">10/2020- 10/2021</span>
              </span>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <p className="m-0 normal-font ">
                <i> Virtual Lab Development (IIT Roorkee)</i>
              </p>
            </div>

            <ul className="mt-2 normal-font pl-4">
              <li>
                Directed the development of the "Hybrid Analog and Digital
                Electronics Lab" simulation in collaboration with MJP Rohilkhand
                University and Virtual Lab Development at IIT Roorkee, resulting
                in increased student engagement.
              </li>
              <li className="mt-1">
                Conducted user testing and feedback sessions to refine interface
                designs, significantly improving user retention.
              </li>
              <li className="mt-1">
                Designed and implemented user-friendly interfaces, enhancing
                overall user satisfaction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
