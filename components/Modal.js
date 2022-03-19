import React from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import { XIcon } from "@heroicons/react/outline";
import Movies from "./Movies";

function Modal({ open, children, onClose, title, emptyTitle }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  if (!open) return null;
  
  const result = await fetch(
    `https://localhost:8080/recommend?watchedMovie=${title}`
  ).then((res) => res.json());

  function reset() {
    onClose();
    emptyTitle();
  }
  return (
    <div className="fixed  z-10 top-[50%] left-[50%] border-0 rounded-sm text-white ease-in bg-slate-600 p-12 -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[80vh]">
      <button className="absolute top-0 right-0 p-5" onClick={reset}>
        <XIcon className="h-5" />
      </button>

      <div className="max-w-[90%] mx-auto justify-center cursor-pointer">
        <p className="text-center pb-4 font-bold">
          {title.title || title.original_name}
        </p>
        <Image
          className="group-hover:opacity-30 border-0 rounded-sm"
          layout="responsive"
          src={
            `${BASE_URL}${title.backdrop_path || title.poster_path}` ||
            `${BASE_URL}${title.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>

      <Movies results={}/>
    </div>
  );
}

export default Modal;
