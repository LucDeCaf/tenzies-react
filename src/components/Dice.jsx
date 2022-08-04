export default function Dice(props) {
  return (
    <div className={props.isHeld ? "dice dice--held" : "dice"}>
      <h2>{props.value}</h2>
    </div>
  )
}
