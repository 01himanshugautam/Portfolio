import FreelanceExperience from "./FreelanceExperience"
import WorkExperience from "./WorkExperience"

export default function RightSide() {
  return (
    <div className="col-md-7 overflow-hidden col-8 ">
      <WorkExperience />
      <FreelanceExperience />
    </div>
  )
}
