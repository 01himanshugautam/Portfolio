export default function Skills() {
  return (
    <div className="pt-2">
      <h3 className="title mt-0  h6 text-muted text-uppercase ">Skills</h3>
      <div className="mt-2">
        <ul
          className="mt-2 normal-font pl-3 skill-point"
          style={{ fontSize: "13px" }}
        >
          <li className="mb-1">
            <b>Backend</b>: NodeJs, Laravel, TypeScript ,JavaScript Dart, MySQL,
            PSQL, MongoDb, Firebase
          </li>
          <li className="mb-1">
            <b>Infrastructure</b>: AWS, Docker, Kafka, RabbitMq ,System Design
          </li>
          <li className="mb-1">
            <b>Frontend</b>: NextJS, HTML, CSS, JavaScript, Bootstrap
          </li>
          <li>
            <b>Others Skill</b>: Jenkins, CI/CD, GitLab, Bitbucket,GitHub
          </li>
        </ul>
      </div>
    </div>
  )
}
