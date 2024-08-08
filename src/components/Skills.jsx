export default function Skills() {
  return (
    <div className="pt-2">
      <h3 className="title mt-0  h6 text-muted text-uppercase ">Skills</h3>
      <div className="mt-2">
        <ul
          className="mt-2 normal-font pl-3 skill-point"
          style={{ fontSize: "14px" }}
        >
          <li className="mb-1">
            <b>Backend</b>: NodeJs, Golang, Laravel, TypeScript, JavaScript,
            Dart
          </li>
          <li className="mb-1">
            <b>Frontend</b>: NextJS, Flutter, HTML, CSS, JavaScript, Bootstrap
          </li>
          <li className="mb-1">
            <b>Databases</b>: MySQL, PSQL, Mongo DB, Firebase
          </li>
          <li className="mb-1">
            <b>Infrastructure</b>: AWS (EC2, S3, RDS), Docker, Kafka, RabbitMq,
            System Design
          </li>
          <li>
            <b>Others Skill</b>: Jenkins, New Relic. CI/CD, GitLab, Bitbucket,
            GitHub,
          </li>
        </ul>
      </div>
    </div>
  )
}
