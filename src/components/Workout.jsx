/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Chart from '../assets/Chart Full.svg'; 
import pc1 from '../assets/Ellipse 53.svg'; 
import pc2 from '../assets/Ellipse 54.svg'; 
import bg2 from '../assets/Rectangle 4532.svg'; 
import Alert from '../assets/alert-triangle.svg'; 
import { Link } from "react-router-dom"




const Workout = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className="flex justify-center items-start ">
    <div className="flex flex-col px-4 pt-4 pb-20 rounded-xl bg-zinc-50 w-[375px]">
        <div className="self-center mt-6 text-xl font-semibold text-zinc-800">
         Workout Tracker
         </div>
        
      <div className="flex  gap-4 justify-between self-end mt-4 mr-10 text-xs">
        <div className="flex flex-col mr-4">
          <div>Good job</div>
       
          </div>
          <div className="flex flex-col  ">
          <div>less then 320cal</div>
        
          </div>
         
        </div>
        <Link to={ "/Calendar"}>
        <img src={Chart}  className="mt-1" alt="" /> </Link>
        <div className="flex gap-2 py-3 mt-6 text-sm bg-gradient-to-r from-[#d9e1ff] to-[#FFFFFF] bg-opacity-50 font-medium rounded-xl border border-solid backdrop-blur-[20.3560848236084px] border-zinc-700 border-opacity-0 text-zinc-800">
        
      <img
        src={Alert}
        className="shrink-0 my-auto w-5 aspect-squar ml-2"
      />
      <div className="flex justify-start text-start ml-2 bc">
        You've burned fewer calories than yesterday. Time to get moving!{" "}
      </div>
    </div>
    <div className="flex gap-5 mt-10">
      <div className="flex-auto text-base font-semibold text-zinc-800">
        Upcoming Workout
      </div>
      <div className="text-xs font-medium text-zinc-500">See more</div>
    </div>
    <div className="flex gap-5 justify-between px-4 py-3.5 mt-4 w-full bg-white rounded-xl shadow-lg">
      <div className="flex gap-2.5 font-medium">
      <Link to={"/calendar"}>
        <img
          srcSet={pc1}
          className="shrink-0 rounded-full aspect-square w-[50px]"
        />
        </Link>
        <div className="flex flex-col my-auto">
          <div className="text-xs text-zinc-800">Full Body Workout</div>
          <div className="mt-3 text-xs text-zinc-500">Today 3pm</div>
        </div>
        </div>
        <label className="inline-flex items-center cursor-pointer">
      <div className={`relative ${isChecked ? 'bg-blue-300' : 'bg-gray-200'} rounded-full w-12 h-6 transition-colors duration-300`}>
        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 transform ${isChecked ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>
      <input type="checkbox" className="hidden" checked={isChecked} onChange={toggleSwitch} />
    </label>
        
    </div>

    <div className="flex gap-5 justify-between px-4 py-3.5 mt-4 w-full bg-white rounded-xl shadow-lg">
      <div className="flex gap-2.5 font-medium">
        <img
          loading="lazy"
          srcSet={pc2}
          className="shrink-0 rounded-full aspect-square w-[50px]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-xs text-zinc-800">Upper Body Workout</div>
          <div className="mt-3 text-xs text-zinc-500">4 Feb, 3:30 pm</div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-auto">
      <label className="inline-flex items-center cursor-pointer">
      <div className={`relative ${isChecked ? 'bg-blue-300' : 'bg-gray-200'} rounded-full w-12 h-6 transition-colors duration-300`}>
        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 transform ${isChecked ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>
      <input type="checkbox" className="hidden" checked={isChecked} onChange={toggleSwitch} />
    </label>
      </div>
    </div>
     
    <div className="flex-col flex  items-start ml-5 mt-5 text-base font-semibold text-zinc-800">
      What Do You Want to Train
    </div>

        {/* footer section  */}

    <div className="flex flex-col  w-full rounded-xl shadow-lg mt-3">
      <img src={bg2} alt="" />
      {/* <div className="flex gap-5 px-px mx-3.5 text-xs font-medium text-zinc-800">
        <div className="flex flex-col my-auto text">
          <div className="text-xs">Full Body Workout</div>
          <div className="mt-3.5">Arms</div>
          <div className="mt-3.5">Chest</div>
        </div>
        <img
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cdfb962297e88090857e74630792ae8b70a949a04fef15d9fb7c83ad9723b3d?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="shrink-0 max-w-full rounded-full aspect-square w-[100px]"
        />
      </div>
      <div className="flex z-10 flex-col items-center px-16 pb-10 mb-0 bg-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7b8b7a7797fbdfd40343a9fea0990085b4275fc7b778f5df42dfe9a4583e575?apiKey=042cd0b70c8c4dbaa22df9832028bed8&"
          className="z-10 mt-0 aspect-square w-[63px]"
        />
      </div> */}
    </div>


    </div>
    </div>
  )
}

export default Workout
