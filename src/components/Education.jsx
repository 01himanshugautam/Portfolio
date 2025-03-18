export default function Education() {
  const educationData = [
    {
      institution: "Mahatma Jyotiba Phule Rohilkhand University",
      location: "Bareilly",
      degree: "B.Tech - 70%",
      year: "2018-2022",
    },
    {
      institution: "Global Inter College, Narayanpur",
      location: "Rampur",
      degree: "XII - 74%",
      year: "2016-2018",
    },
    {
      institution: "R P S Higher Secondary School",
      location: "Rampur",
      degree: "X - 78%",
      year: "2014-2016",
    },
  ]

  return (
    <div>
      <h3 className="title h6 mt-4 text-uppercase">Education</h3>
      <div className="mt-2 normal-font" style={{ fontSize: "14px" }}>
        {educationData.map((edu, index) => (
          <div className="mb-2" key={index}>
            <div className="d-flex justify-content-between">
              <b>&bull; {edu.institution}</b>
              <div>
                <b>-</b> {edu.location}
              </div>
            </div>
            <div className="mb-2 d-flex justify-content-between">
              <span>
                <b>- {edu.degree}</b>
              </span>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
