import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Thumbnail from "./Thumbnail";
import { XIcon } from "@heroicons/react/outline";
import Movies from "./Movies";
import Recs from "./Recs";

function Modal({
  open,
  children,
  onClose,
  title,
  emptyTitle,
  setTitle,
  cont,
  watched,
  addMessage,
  setAddMessage,
  watchedNames,
  donut,
}) {
  const [error, setError] = useState(true);
  const [resultArray, setResultArray] = useState([]);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  if (!open) return null;
  setAddMessage(`${watched.indexOf(title) === -1 ? "Add" : "Remove"}`);

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
        return [];
      }
      return res.json();
    });
  }
  console.log(JSON.stringify(watchedNames));
  async function recMany() {
    return await fetch(`http://localhost:8080/recommend-many`, {
      method: "post",

      mode: "cors",
      body: JSON.stringify(watchedNames),
    }).then(function (res) {
      return res.json();
    });
  }

  const recResult = result();
  console.log(recResult);
  const handleWatched = () => {
    if (watched.indexOf(title) === -1) {
      console.log("add");
      watched.push(title);
      watchedNames.push(title.title || title.original_name);
      console.log(watchedNames);
      setAddMessage("Remove");
    } else {
      console.log(watched);
      watched.splice(watched.indexOf(title), 1);
      watchedNames.splice(
        watchedNames.indexOf(title.title || title.original_name),
        1
      );
      console.log(watchedNames);
      setAddMessage("Add");
    }
    console.log(watched);
  };

  function reset() {
    setTitle({});
    onClose();
    emptyTitle();
  }
  return (
    <div
      className={`fixed z-10  top-[50%] left-[50%] border-0 rounded-sm text-slate-600 bg-[#ebf0f7] -translate-x-[50%] -translate-y-[50%] w-[80vw] ${
        error
          ? "h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] md:w-[60vw]"
          : "h-[75vh] sm:h-[95vh] lg:w-[60vw] xl:w-[50vw]"
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
        {error ? (
          <p></p>
        ) : (
          <p
            onClick={handleWatched}
            className="absolute cursor-pointer z-10 right-3 bottom-3 border-0 rounded-xl p-2 font-bold bg-black text-white"
          >
            {addMessage}
          </p>
        )}
        <Image
          className="absolute outline-2  opacity-70 -my-44 rounded-sm cursor-default"
          layout="responsive"
          src={
            `${BASE_URL}${title.backdrop_path || title.poster_path}` ||
            `${BASE_URL}${title.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>
      <div className="flex flex-col justify-center bg-[#ebf0f7]">
        <h1 className="mt-2 text-lg font-bold text-center">Recommendations</h1>

        <Recs
          results={recResult}
          genre={cont}
          donut={donut}
          resultArray={resultArray}
          setResultArray={setResultArray}
        />
      </div>
    </div>
  );
}

export default Modal;
