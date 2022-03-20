import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "./Modal";

function Thumbnail({ result, setOpen, setTitle, clickAble = false, cont }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  function setInfo() {
    if (!clickAble) return;
    setOpen();
    router.push(
      `/?genre=${cont}/?movie=${result.title || result.original_name}`,
      null,
      { shallow: true }
    );
    setTitle(result);
  }
  return (
    <>
      <div onClick={setInfo} className="group p-2 ">
        <div className="flex flex-col justify-center cursor-pointer">
          <p className="absolute  -transform-x-[50%] -transform-y-[50%] xl:w-[30%] xl:h-[25%] w-[90%] p-7 h-[30%] overflow-y-scroll md:w-[45%] md:h-[27%] scrollbar-hide text-xl scale-0   sm:p-6  md:p-4 md:max-w-xl text-white group-hover:scale-100">
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
