import { Link } from "react-router-dom"
import btn2 from "../assets/Rectangle 692.png"
import Google from "../assets/Rectangle 2129.svg"
import Facebook from "../assets/Rectangle 2130.svg"
import Eyeoff from "../assets/eye-off.svg"
const Login = () => {
  return (
    <div className="flex justify-center items-start">
    <div className=" flex flex-col  justify-center px-4 pt-4 pb-8 rounded-xl bg-zinc-50 max-w-[375px]">
    <div className="flex gap-5 justify-center self-start ml-3 text-base font-semibold tracking-tight text-center whitespace-nowrap text-neutral-800" />
    <div className="mt-11 text-2xl ml-2 flex font-semibold text-zinc-800">
      Welcome Back
    </div>
    <input  type="email" placeholder="Email"  className="justify-center items-start px-5 py-5 mt-12 text-l font-semibold rounded-xl bg-zinc-100 text-zinc-700">
      </input>
     
      <input  type="password" placeholder="Password" className=" text-l size-9justify-center items-start px-5 py-5 mt-12  font-semibold rounded-xl bg-zinc-100 text-zinc-700">
        
      </input>
   
    <div className="mt-5 text-xs font-medium underline text-zinc-500 ">
      Forgot your password?
    </div>
    <Link to={"/goals"}>
    <img  src={btn2} className=" mt-60">
      
    </img>
    </Link>
    <div className="flex gap-2.5 mt-7 text-xs font-medium whitespace-nowrap text-zinc-800">
        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
        <div className="flex-auto">Or</div>
        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
      </div>
    <div className="flex gap-5 self-center mt-20">
    <img
        src={Google}
        className="shrink-0 w-11 rounded-lg border border-solid aspect-square border-zinc-500"
      />
      <img
        srcSet={Facebook}
      />
    </div>
    <div className="self-center mt-7 text-xs font-medium text-indigo-400 underline">
      <span className="text-zinc-800">Don’t have an account yet? </span>
      <Link to={"/signup"}>
      <span className="">Create an account</span>
      </Link>
    </div>
  </div>
  </div>
  )
}

export default Login

