import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

function Thumbnail({ result, setOpen, setTitle }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  function setInfo() {
    setOpen();
    setTitle(result);
  }
  return (
    <>
      <div onClick={setInfo} className="group p-2 ">
        <div className="flex flex-col justify-center cursor-pointer">
          <p className="p-8 max-w-3xl max-h-[30%] overflow-scroll scrollbar-hide text-xl scale-0 sm:text-sm sm:max-w-sm sm:p-6 md:text-lg md:p-4 md:max-w-xl   text-white absolute group-hover:scale-100">
            {result.overview}
          </p>
          <Image
            className="group-hover:opacity-30 group-hover:-z-10"
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
          />
        </div>

        <div className="p-2">
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.title || result.original_name}
          </h2>
          <p className="group-hover:opacity-100 opacity-0 pb-2">
            {result.release_date || result.first_air_date}
          </p>
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
