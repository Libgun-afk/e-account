import React from "react";
import { Button } from "./ui/button";

const HomeComp = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <section className="w-full h-screen mt-[-72px] flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/headerbanner-1.jpg')]">
        <div className="container px-4 z-10 flex  md:pl-10">
          <img
            src="https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/462577907_854496666758915_2579369676183705801_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=LwdzjAukawkQ7kNvgGM1vmx&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1QGTyc8gZ0Xj8yuJ-s2L9uCO0jznDE_Z5NrAS3Gkmn5s1w&oe=675CB914"
            alt=""
            className="absolute inset-0 z-0 h-full bg-black w-full object-cover opacity-15"
          />
        </div>

        <div className="container px-4 z-10 flex  md:pl-10">
          <div className="flex flex-col items-center justify-center  md:items-start space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-center text-primary tracking-tighter sm:text-4xl  md:text-start md:text-5xl lg:text-6xl/none">
                E-Account
              </h1>
              <p className="mx-auto max-w-[700px] text-xs text-white  md:text-start md:text-base dark:text-gray-400">
                asdasd
              </p>
            </div>
            <div className="space-x-4 ">
              <Button>a</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComp;
