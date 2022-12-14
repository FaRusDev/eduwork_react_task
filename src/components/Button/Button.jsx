
const Button = ({content, ic, isPrimary}) => {
  return (
    <button className={isPrimary ? `bg-[#FF7235] hover:bg-[#da602c] p-3 rounded-md flex items-center justify-center text-white` : `border border-[#FF7235] p-3 rounded-md flex items-center justify-center text-[#FF7235] hover:text-white hover:bg-[#FF7235]` }>
        <p className="text-sm">{content}</p>
        <i>{ic}</i>
    </button>   
  )
}

export default Button