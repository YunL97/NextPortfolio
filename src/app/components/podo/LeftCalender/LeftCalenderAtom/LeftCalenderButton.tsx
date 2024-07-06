interface LeftCalenderButtonProps {
  handleMonth: () => void
  monthName: String
}

const LeftCalenderButton = (props: LeftCalenderButtonProps) => {
  return (
    <button
      onClick={props.handleMonth}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      {props.monthName}
    </button>
  )
}

export default LeftCalenderButton
