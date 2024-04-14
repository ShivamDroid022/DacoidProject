import { Link } from "react-router-dom"
import btn1 from "../assets/Rectangle 692.svg"
import Google from "../assets/Rectangle 2129.svg"
import Facebook from "../assets/Rectangle 2130.svg"
const Signup = () => {
  return (
    <div className="flex justify-center items-start ">
    <div className="flex flex-col px-4 pb-8 rounded-xl bg-zinc-50 max-w-[375px] overflow-hidden ">
        <div className="mt-11 text-xl font-semibold text-zinc-800">
        Create an account
      </div>
      <input  type="text" placeholder="First Name" className="justify-center items-start px-5 py-5 mt-10 text-s font-semibold rounded-xl bg-zinc-100 text-zinc-700">
      </input>

      <input  type="text" placeholder="Last Name" className="justify-center items-start px-5 py-5 mt-10 text-s font-semibold rounded-xl bg-zinc-100 text-zinc-700">
      </input>

      <input  type="mail" placeholder=" Email" className="justify-center items-start px-5 py-5 mt-10 text-s font-semibold rounded-xl bg-zinc-100 text-zinc-700"></input>

      <input  type="password" placeholder="Password" className="justify-center items-start px-5 py-5 mt-10 text-s font-semibold rounded-xl bg-zinc-100 text-zinc-700 ">
      </input>
      <div className="flex gap-2 mt-6">
        <div className="flex flex-col justify-center">
          {/* <div className="shrink-0 rounded border border-solid border-zinc-500 h-[22px]" /> */}
          <input type="checkbox" className=" ml-3 rounded border border-solid- border-blue-500 h-[22px]"  />
        </div>
        <div className="  flex-auto my-auto text-xs font-semibold leading-5 text-indigo-300 underline">
          <span className="font-medium">By proceeding, I agree to all </span>
          <span className="font-medium text-indigo-300 underline">
              T&C
          </span>{" "}
          <span className="font-medium">and </span>
          <span className="font-medium text-indigo-300 underline">
            Privacy Policy
          </span>
        </div>
      </div> 
         <Link to={"/login"}>
         <img  src={btn1} className=" mt-20">
      
      </img>
    </Link>
   
      <div className="flex gap-2.5 mt-7 text-xs font-medium whitespace-nowrap text-zinc-800">
        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
        <div className="flex-auto">Or</div>
        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
      </div>
      <div className="flex gap-5 self-center mt-7">
      <img
        src={Google}
        className="shrink-0 w-11 rounded-lg border border-solid aspect-square border-zinc-500"
      />
      <img
        srcSet={Facebook}
      />
    </div>
      <div className="self-center mt-7 text-xs font-medium">
      <span>Already have an account? </span>
      <Link to={"/login"}>
      <a href="/login" className="text-indigo-400 underline">
        Login
      </a>
      </Link>
    </div>
      
    </div>
    </div>
    
  )
}

export default Signup
