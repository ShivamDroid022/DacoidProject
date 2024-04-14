import Cal from "../assets/Group 626505.svg"
import VectorL from "../assets/VectorL.svg"
import VectorR from "../assets/Vector.svg"
import Bo from "../assets/Group 1.svg"
const Calendar = () => {
  return (
    <div className="flex justify-center items-start">
       <div className="flex flex-col rounded-xl bg-zinc-50 w-[375px]">
      <div className="flex flex-col px-5 w-full font-semibold text-center">
        <div className="flex gap-5 justify-center pr-1.5 text-base tracking-tight whitespace-nowrap text-neutral-800" />
        <div className="flex gap-5 mt-11 text-xl text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/367d4db82f57897995aa34d0d37f0ff0768b9bd2e756d0d3ae47cf80655e06bb?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
            className="shrink-0 w-5 aspect-square fill-zinc-100"
          />
          <div className="flex-auto my-auto">Workout Schedule</div>
        </div>
        <div className="flex gap-2.5 self-center mt-5 text-xs text-zinc-800">
          <img
           
            src={VectorL}
            className="shrink-0  aspect-[0.7] border-zinc-800 stroke-[1.5px] stroke-zinc-800 w-[7px]"
          />
          <div>Feb 2024</div>
          <img
          
            src={VectorR}
            className="shrink-0  aspect-[0.7] border-zinc-800 stroke-[1.5px] stroke-zinc-800 w-[7px]"
          />
        </div>
      </div>
      <div className="flex flex-col px-4 mt-4 w-full text-xs font-semibold">
        <div className="flex gap-2 justify-center text-xs font-medium leading-4 text-center text-zinc-700">
          <div className="items-start px-5 pt-2.5 pb-8">
            <span className="font-semibold leading-4 text-zinc-700">Sun</span>
            <br />
            <span className="text-3xl font-semibold text-zinc-700">5</span>
            <br />
          </div>
          
          <img src={Cal} alt="" />
          <div className="flex flex-col items-start py-2 ">
            <div className="ml-4">
              <span className="font-semibold leading-4 text-zinc-700">Tue</span>
              <br />
              <span className="text-3xl font-semibold text-zinc-700">7</span>
              <br />
            </div>
            <div className="shrink-0 mt-4 h-2 w-[9px]" />
          </div>
          <div className="px-5 pt-2.5 pb-8 ">
            <span className="font-semibold leading-4 text-zinc-700">Wed</span>
            <br />
            <span className="text-3xl font-semibold text-zinc-700">8</span>
            <br />
          </div>
          <div className="px-5 pt-2.5 pb-8">
            <span className="font-semibold leading-4 text-zinc-700">Thu</span>
            <br />
            <span className="text-3xl font-semibold text-zinc-700">9</span>
            <br />
          </div>
        </div>

        <div className="flex flex-col max-w-[375px]">
        <div className="flex gap-5 items-start pl-3 text-xs font-semibold">
      <div className="flex flex-col self-start text-center text-zinc-800">
        <div>06:00 AM</div>
        <div className="mt-7 ">07:00 AM</div>
    
        <div className="mt-7"> <p>08:00 AM </p>
        
        </div>
        <div className="mt-8">09:00 AM</div>
        <div className="mt-8">10:00 AM</div>
        <div className="mt-7">11:00 AM</div>
        <div className="mt-8">12:00 AM</div>
        <div className="mt-8">01:00 AM</div>
        <div className="mt-7">02:00 AM</div>
        <div className="mt-9">03:00 AM</div>
        <div className="mt-7">04:00 AM</div>
      </div>
      <div className="flex flex-col grow shrink-0 self-end mt-12 text-white basis-0 w-fit">
        <div className="justify-center self-end p-2.5 rounded-3xl  bg-pink-300 ">
          Ab Workout, 7:30am
        </div>
        <div className="justify-center px-3 py-2.5 mt-9 rounded-3xl bg-pink-300">
          Upperbody Workout, 9am
        </div>
        <div className="z-10 shrink-0 mt-0 h-2.5 bg-zinc-50"  />
        <div className="justify-center px-2 py-2.5 mt-40 rounded-3xl bg-zinc-100 text-zinc-800">
          Lowerbody Workout, 3pm
        </div>
        <img className="justify-center items-center self-end px-7 mt-5 text-4xl whitespace-nowrap rounded-full h-[63px] w-[63px]">
          
        </img>
      </div>
    </div>

      <div className="flex gap-5 justify-between items-end px-7 pb-7 mt-6 bg-white">
         <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5247b7ffb27bc9502eca1e4f111e5ada9f24600a441e1f7a57019bb4a305616c?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="shrink-0 mt-6 aspect-square fill-zinc-500 w-[27px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e7d2b2c0d0acfe35d8d6d98af80c7b880dcc6d837cb5b320ee45371df9099ee?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="z-10 shrink-0 mt-6 aspect-[0.96] w-[27px]"
        />
        <div className="flex justify-center items-center px-5 mt-0 rounded-full h-[63px] w-[63px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11190050cd25af4c593a3795afc446695b90b4d21575d0d719259bebc83da146?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
            className="border-2 border-white border-solid aspect-square stroke-[1.5px] stroke-white w-[22px]"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c3d26294949c72d02753ac455614ec8d36579d48659ae17325b099b101fb6bb?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="shrink-0 mt-6 aspect-[1.08] fill-zinc-500 w-[29px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c410e8f46335851c8527a24ddf485a432fb3f6c460eedbd57c29a48a39a74b0?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="shrink-0 mt-6 aspect-square w-[22px]"
        /> 
      </div>
    </div>
            <img src={Bo} alt="" className=" absolute  size-20 bottom-20 ml-20 m-4 "  />
      </div>
    </div>
    </div>
  )
}

export default Calendar
