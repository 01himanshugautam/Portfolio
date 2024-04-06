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

export default function RightSide() {
  return (
    <div className="col-md-7 overflow-hidden col-8 ">
      <div className="">
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
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Developed and deployed a multi-region, multilingual website using
              Node.js, MySQL, and Docker from scratch, driving a significant
              surge in website traffic.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Collaborated on the creation of user-friendly APIs for a retail
              POS system, significantly reducing customer complaints.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Introduced Redis caching, resulting in a substantial improvement
              in API performance and customer satisfaction.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Orchestrated Nginx load balancing for Node.js, significantly
              enhancing performance for over 5000 concurrent users and boosting
              user retention.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Engineered the integration of Kapture CRM software, resulting in a
              noticeable increase in customer engagement.
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
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Spearheaded the transition from monolithic to microservices
              architecture, resulting in a dramatic decrease in system downtime.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
              Designed a flexible communication system for seamless messaging
              via texts, emails, and notifications, leading to a significant
              increase in user engagement.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
              Upgraded App Component Version with dynamic data retrieval and
              rendering, markedly enhancing functionality and user experience.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Crafted front-end logic using JavaScript and Next.js, resulting in
              a remarkable improvement in user interaction and reduced bounce
              rate.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
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
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Enhanced app performance and user satisfaction through code
              optimization and UI refinement, leading to a decrease in app
              uninstallations
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Integrated Rest API, significantly reducing loading times and
              improving data accuracy, resulting in higher user retention.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
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
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Conducted user testing and feedback sessions to refine interface
              designs, significantly improving user retention.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Designed and implemented user-friendly interfaces, enhancing
              overall user satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
