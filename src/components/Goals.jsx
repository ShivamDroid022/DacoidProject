import { Link } from "react-router-dom"
import Confirm from "../assets/Rectangle 694.svg"

const Goals = () => {
  return (
    <div className="flex justify-center items-start ">
    <div className="flex flex-col px-4 pt-4 pb-20 rounded-xl bg-zinc-50 w-[375px]">
    <div className="flex ml-2 mt-11 text-xl font-semibold text-zinc-800">
      What are your goals?
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-11 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        Weight Loss
      </div>
      <input type="checkbox" id="weightLoss" name="weightLoss" />
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        Muscle Gain
      </div>
      <input type="checkbox" id="weightLoss" name="weightLoss" />
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        Flexibility and Mobility
      </div>
      <input type="checkbox" id="weightLoss" name="weightLoss" />
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        General Fitness
      </div>
      <div className="flex flex-col justify-center">
      <input type="checkbox" id="weightLoss" name="weightLoss" />
      </div>
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        Event - specific training
      </div>
      <div className="flex flex-col justify-center">
      <input type="checkbox" id="weightLoss" name="weightLoss" />

      </div>
    </div>
    <div className="flex gap-5 justify-between px-5 py-5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">
        Mindfulness and Mental Health
      </div>
      <div className="flex flex-col justify-center">
      <input type="checkbox" id="weightLoss" name="weightLoss" />
      </div>
    </div>
    <Link to={"/workout"}>
    { <img src={Confirm} className=" mt-36 ">
      
    </img> }
    </Link>
  </div>
  </div>
  )
}

export default Goals