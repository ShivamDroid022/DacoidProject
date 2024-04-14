
import { Link } from "react-router-dom"
import Gobtn from "../assets/GoBtn.svg"
import ImgFirst from "../assets/image 13.png"

const Pagefirst = () => {
  return (
    <div className="flex justify-center items-start ">
    <div className=" w-[375px]" >
    <div className=" mt-5 text-base font-medium text-indigo-300 underline flex justify-end">
      Skip
    </div>
    <div className="flex flex-col px-4 mt-16 w-full">
    <img
      src={ImgFirst}
      className="self-center w-full aspect-square max-w-[282px]"
    />
    <div className="flex flex-col items-start text-start">
    <div className="mt-24 text-2xl  font-semibold text-zinc-800">
      Track Your Goal
    </div>
    <div className="mt-5 text-lg  font-medium text-neutral-500">
      Don’t worry if you have trouble determining your goals, We can help you
      determine your goals and track your goals
    </div>
    </div>
   <Link to={"/page2"} className="flex cursor-pointer justify-end mt-10">
   <img
      src={Gobtn} alt="btn"
      className="self-end mt-24 aspect-square w-[60px]"
    />
   </Link>
  </div>
  </div>
  </div>

  )
}

export default Pagefirst
