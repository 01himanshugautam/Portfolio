import Achievement from "./Achievement"
import Education from "./Education"
import Skills from "./Skills"
import FreelanceExperience from "./FreelanceExperience"

export default function LeftSide() {
  return (
    <div
      style={{ background: "#f2f5ff" }}
      className="col-md-5 overflow-hidden rounded col-4"
    >
      <Education />
      <Skills />
      <FreelanceExperience />
      <Achievement />

      <div className="mt-4">
        <h3 className="title h6  text-uppercase">Personal Info.</h3>
        <div className="">
          <div className="d-flex t justify-content-between">
            <span className="small">Language: </span>
            <span className="normal-font" style={{ fontSize: "14px" }}>
              <b> &bull; Hindi &bull; English</b>
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="small">Current Location</span>
            <span className="normal-font" style={{ fontSize: "14px" }}>
              <b>Gurugram</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
