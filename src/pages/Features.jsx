import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import Cards from '../components/Cards';
const Features = () => {
  return (
     <div
           className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-2 space-y-6 m-[100px]"
           style={{ maxWidth: "1200px" }}
         >
           <Typography
             variant="h3"
             className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
           >
             AI <span className="italic text-pink-500">Generation System</span> that
             creates and manages fully
             <span className="w-full block">
               customizable and multi-modal AI characters.
             </span>
           </Typography>
     
           <Typography
             variant="paragraph"
             className="text-center font-normal text-base sm:text-base md:text-sm lg:text-lg xl:text-lg"
           >
             Capable of generating engaging content across text, image, voice, and
             video formats.
           </Typography>

           <Cards/>
        

     
     
           
         </div>
  )
}

export default Features