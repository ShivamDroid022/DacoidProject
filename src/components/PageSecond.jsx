import { Link } from "react-router-dom"
import Gobtn from "../assets/GoBtn.svg" 
import ImgSecond from "../assets/image 16.png"

const PageSecond = () => {
  return (
    <div className="flex justify-center items-start ">
    <div className="w-[375px]" >
    <div className=" mt-5 text-base font-medium text-indigo-300 underline flex justify-end">
      Skip
    </div>
    <div className="flex flex-col px-4 mt-16 w-full">
    <img
      src={ImgSecond}
      className="self-center w-full aspect-rectangle md:w-[100%]"
    />
    <div className="flex flex-col items-start text-start">
    <div className="mt-24 text-2xl font-semibold text-zinc-800">
    Get Burn
    </div>
    <div className="mt-5 text-lg font-medium text-neutral-500">
    Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
    </div>
    </div>
   <Link to={"/signup"} className="flex cursor-pointer justify-end mt-10">
   <img
      src={Gobtn} alt="btn"
      className="self-end  mt-24 aspect-square w-[60px]"
    />
   </Link>
  </div>
  </div> 
  </div> 
  )
}

export default PageSecond
