import CalenderIcon from "./CalenderIcon"

export default function WorkExperience() {
  const experiences = [
    {
      title: "SDE II",
      company: "Parksmart",
      location: "Noida",
      duration: "April 2024 - Present",
      details: [
        "Optimized the user app, reducing the opening time from 18-20 seconds to just 3 seconds, enhancing performance and user experience.",
        "Resolved FASTag recharge failures, reducing 90% transaction failures by integrating BBPS for faster payments, leading to a 25% increase in retention rate.",
        "Improved logging architecture by consolidating ANPR, POS, RFID, and FASTag logs into a single table and integrating Redis, reducing complexity and improving efficiency.",
        "Streamlined user onboarding by integrating MyGate service, making the process smoother and more efficient.",
      ],
    },
    {
      title: "Sr. Associate Engineer",
      company: "1K Networks",
      location: "Gurugram",
      duration: "October 2022 - April 2024",
      details: [
        "Developed and deployed a multi-region, multilingual website using Node.js, MySQL, and Docker from scratch, driving a significant surge in website traffic.",
        "Collaborated on the creation of user-friendly APIs for a retail POS system, significantly reducing customer complaints.",
        "Introduced Redis caching, resulting in a substantial improvement in API performance and customer satisfaction.",
        "Engineered the integration of Kapture CRM software, increasing customer engagement.",
      ],
    },
    {
      title: "Software Engineer",
      company: "1K Networks",
      location: "Gurugram",
      duration: "December 2021 - October 2022",
      details: [
        "Led the transition from monolithic to microservices architecture, reducing system downtime.",
        "Designed a flexible communication system for seamless messaging, boosting user engagement.",
        "Upgraded App Component Version with dynamic data retrieval, improving functionality.",
        "Crafted front-end logic using JavaScript and Next.js, resulting in a remarkable improvement in user interaction and reduced bounce rate.",
        "Devised a loyalty points feature, achieving notable increases in user engagement and customer retention.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company: "Native Developers",
      location: "Noida",
      duration: "June 2021 - October 2021",
      details: [
        "Authored an educational app for Dexito, garnering significant downloads within a short period.",
        "Enhanced app performance and user satisfaction through code optimization and UI refinement, leading to a decrease in app uninstallations.",
        "Integrated Rest API, significantly reducing loading times and improving data accuracy, resulting in higher user retention.",
        "Implemented optimized state management techniques, leading to a noticeable decrease in app crashes and an overall improvement in user experience.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company: "Virtual Lab Development - IIT Roorkee",
      location: "Remote",
      duration: "October 2020 - January 2021",
      details: [
        'Directed the development of the "Hybrid Analog and Digital Electronics Lab" simulation in collaboration with MJP Rohilkhand University and Virtual Lab Development at IIT Roorkee, resulting in increased student engagement.',
        "Conducted user testing and feedback sessions to refine interface designs, significantly improving user retention.",
        "Hands-on experience with Git and Bitbucket.",
      ],
    },
  ]

  return (
    <div>
      <h3 className="title mt-3 h6 text-muted text-uppercase">
        Work Experience
      </h3>
      {experiences.map((exp, index) => (
        <div key={index} className="mt-0 p-1">
          <div className="d-flex justify-content-between">
            <h5 className="text-dark m-0">{exp.title}</h5>
            <span className="d-flex align-items-center">
              <CalenderIcon />
              <span className="ml-2 normal-font">{exp.duration}</span>
            </span>
          </div>
          <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font">
              <i>
                {exp.company} - {exp.location}
              </i>
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4" style={{ fontSize: "14px" }}>
            {exp.details.map((detail, i) => (
              <li key={i} className="mt-1">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
