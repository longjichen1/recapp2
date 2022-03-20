import React, { useState } from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import { XIcon } from "@heroicons/react/outline";
import Movies from "./Movies";
import Recs from "./Recs";

function Modal({ open, children, onClose, title, emptyTitle }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [error, setError] = useState(true);
  if (!open) return null;

  async function result() {
    return await fetch(
      `http://localhost:8080/recommend?watchedMovie=Star Wars`,
      {
        method: "post",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("No match found");
        } else {
          setError(false);
          res.json();
        }
      })
      .catch((err) => {
        setError(true);
        console.log("caught error");
      });
  }

  result();

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
      {error ? <p>ERROR</p> : <Recs results={result()} />}
      {/* <Movies results={}/> */}
    </div>
  );
}

export default Modal;
