import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function Experienced({
  showSkill,
  showAchievement,
  showEducation,
  skillWithLevel,
  showTitle,
  titleClass,
}) {
  return (
    <div className="row mt-3">
      <LeftSide />
      <RightSide />
    </div>
  )
}
