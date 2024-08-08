import CalenderIcon from "./CalenderIcon"

export default function WorkExperience() {
  return (
    <div className="">
      <h3 className="title mt-3  h6  text-muted text-uppercase ">
        Work Experience
      </h3>
      <div className="p-1">
        <div className="d-flex justify-content-between">
          <h5 className="text-dark m-0">Sr. Associate Engineer </h5>
          <span className="d-flex align-items-center">
            <CalenderIcon />
            <span className="ml-2 normal-font">October 2022 - Ongoing </span>
          </span>
        </div>
        <div className="d-flex mt-1 justify-content-between">
          <p className="m-0 normal-font">
            <i>
              <a href="https://www.1knetworks.com/" target="_blank">
                1K Networks
              </a>
              - Gurugram
            </i>
          </p>
        </div>
        <ul className="mt-2 normal-font pl-4" style={{ fontSize: "14px" }}>
          <li className="mt-1">
            Developed and deployed a multi-region, multilingual website using
            Node.js, MySQL, and Docker from scratch, driving a significant surge
            in website traffic.
          </li>
          <li className="mt-1">
            Collaborated on the creation of user-friendly APIs for a retail POS
            system, significantly reducing customer complaints.
          </li>
          <li className="mt-1">
            Introduced Redis caching, resulting in a substantial improvement in
            API performance and customer satisfaction.
          </li>
          <li className="mt-1">
            Engineered the integration of Kapture CRM software, increasing
            customer engagement.
          </li>
        </ul>
      </div>

      <div className="mt-0 p-1 ">
        <div className="d-flex justify-content-between">
          <h5 className="text-dark m-0">Software Engineer</h5>
          <span className="d-flex align-items-center">
            <CalenderIcon />
            <span className="ml-2 normal-font">
              December 2021 - October 2022
            </span>
          </span>
        </div>
        <div className="d-flex mt-1 justify-content-between">
          <p className="m-0 ">
            <i>
              <a href="https://www.1knetworks.com/" target="_blank">
                1K Networks
              </a>
              - Gurugram
            </i>
          </p>
        </div>

        <ul className="mt-2 normal-font pl-4" style={{ fontSize: "14px" }}>
          <li className="mt-1">
            Led the transition from monolithic to microservices architecture,
            reducing system downtime.
          </li>

          <li className="mt-1">
            Designed a flexible communication system for seamless messaging,
            boosting user engagement.
          </li>

          <li className="mt-1">
            Upgraded App Component Version with dynamic data retrieval,
            improving functionality.
          </li>
          <li className="mt-1">
            Crafted front-end logic using JavaScript and Next.js, resulting in a
            remarkable improvement in user interaction and reduced bounce rate.
          </li>

          <li className="mt-1">
            Devised a loyalty points feature, achieving notable increases in
            user engagement and customer retention.
          </li>
        </ul>
      </div>

      <div className="mt-0 p-1  ">
        <div className="d-flex justify-content-between">
          <h5 className=" m-0 text-dark">Software Engineer Trainee</h5>
          <span className="d-flex align-items-center">
            <CalenderIcon />
            <span className="ml-2 normal-font">June 2021- October 2021</span>
          </span>
        </div>
        <div className="d-flex mt-1 justify-content-between">
          <p className="m-0 normal-font ">
            <i>
              <a href="https://www.nativedevelopers.in/" target="_blank">
                Native Developers
              </a>
              - Noida
            </i>
          </p>
        </div>

        <ul className="mt-2 normal-font pl-4" style={{ fontSize: "14px" }}>
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
            user experience.
          </li>
        </ul>
      </div>

      <div className="mt-0 p-1  ">
        <div className="d-flex justify-content-between">
          <h5 className=" m-0 text-dark">Software Engineer Trainee</h5>
          <span className="d-flex align-items-center">
            <CalenderIcon />
            <span className="ml-2 normal-font">October 2020- October 2021</span>
          </span>
        </div>
        <div className="d-flex mt-1 justify-content-between">
          <p className="m-0 normal-font ">
            <i>
              <a
                href="https://www.vlab.co.in/participating-institute-iit-roorkee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Lab Development
              </a>{" "}
              IIT Roorkee
            </i>
          </p>
        </div>

        <ul className="mt-2 normal-font pl-4" style={{ fontSize: "14px" }}>
          <li>
            Directed the development of the &quot;Hybrid Analog and Digital
            Electronics Lab&quot; simulation in collaboration with MJP
            Rohilkhand University and Virtual Lab Development at IIT Roorkee,
            resulting in increased student engagement.
          </li>
          <li className="mt-1">
            Conducted user testing and feedback sessions to refine interface
            designs, significantly improving user retention.
          </li>
          <li className="mt-1">Hands on experience on Git and Bitbucket.</li>
        </ul>
      </div>
    </div>
  )
}
