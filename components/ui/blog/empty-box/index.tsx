import InboxIcon from "../../svg/inbox"


const EmptyBox = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 opacity-50">
      <InboxIcon/>
      <p>No data</p>
    </div>
  )
}

export default EmptyBox