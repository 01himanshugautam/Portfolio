export default function Skills() {
  const skills = [
    {
      category: "Backend",
      items: [
        "Node.js",
        "Golang",
        "Laravel",
        "TypeScript",
        "JavaScript",
        "Dart",
      ],
    },
    {
      category: "Frontend",
      items: ["Next.js", "Flutter", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS (EC2, S3, RDS)",
        "Docker",
        "Kafka",
        "RabbitMQ",
        "System Design",
      ],
    },
    {
      category: "Other Skills",
      items: ["Jenkins", "New Relic", "CI/CD", "GitLab", "Bitbucket", "GitHub"],
    },
  ]

  return (
    <div className="pt-2">
      <h3 className="title mt-0 h6 text-muted text-uppercase">Skills</h3>
      <ul className="mt-2 normal-font pl-3 skill-point">
        {skills.map((skill, index) => (
          <li key={index} className="mb-1">
            <b>{skill.category}</b>: {skill.items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  )
}
