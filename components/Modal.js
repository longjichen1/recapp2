import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Thumbnail from "./Thumbnail";
import { XIcon } from "@heroicons/react/outline";
import Movies from "./Movies";
import Recs from "./Recs";

function Modal({ open, children, onClose, title, emptyTitle, cont }) {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [error, setError] = useState(true);
  if (!open) return null;

  async function result() {
    return await fetch(
      `http://localhost:8080/recommend?watchedMovie=${
        title.original_name || title.title
      }`,
      {
        method: "post",
      }
    ).then(function (res) {
      if (!res.ok) {
        setError(true);
      } else {
        setError(false);
      }
      return res.json();
    });
  }

  const l = result();

  function reset() {
    router.push(`/?${cont}`, null, { shallow: true });
    onClose();
    emptyTitle();
  }
  return (
    <div
      className={`fixed z-10  top-[50%] left-[50%] border-0 rounded-sm text-slate-600 bg-[#ebf0f7] -translate-x-[50%] -translate-y-[50%] w-[80vw] ${
        error
          ? "h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] md:w-[60vw]"
          : "h-[75vh] sm:h-[95vh] sm:w-[45vw]"
      }`}
    >
      <button
        className="cursor-pointer absolute z-10 top-0 text-[#ebf0f7] right-0 p-5"
        onClick={reset}
      >
        <XIcon className="h-5" />
      </button>

      <div
        className={`max-w-[100%] ${
          error ? "" : ""
        } mx-auto relative bg-slate-600 flex flex-col justify-center`}
      >
        <p className="absolute z-10 left-0 bottom-0 p-5 font-bold text-white">
          {title.title || title.original_name}
        </p>
        <Image
          className="absolute opacity-70 border-0 -my-44 rounded-sm cursor-default"
          layout="responsive"
          src={
            `${BASE_URL}${title.backdrop_path || title.poster_path}` ||
            `${BASE_URL}${title.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="mt-8 text-lg font-bold text-center">Recommendations</h1>
        {error ? (
          <p className="p-6 text-center mx-auto w-2/3">
            Sorry! We don't have recommendations for this movie just yet.
          </p>
        ) : (
          <Recs results={l} genre={cont} />
        )}
      </div>
    </div>
  );
}

export default Modal;
