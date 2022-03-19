import React from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

function Modal({ open, children, onClose, title, emptyTitle }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  if (!open) return null;
  console.log(children);
  function reset() {
    onClose();
    emptyTitle();
  }
  return (
    <div className="fixed flex flex-col  z-10 top-[50%] left-[50%] border-0 rounded-sm ease-in bg-white p-12 -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[80vh]">
      <button onClick={reset}>Close Modal</button>
      <p>{title.title || title.original_name}</p>
      <div className="w-[50%] justify-center cursor-pointer">
        <p className="absolute  -transform-x-[50%] -transform-y-[50%] xl:w-[30%] xl:h-[25%] w-[90%] p-7 h-[30%] overflow-y-scroll md:w-[45%] md:h-[27%] scrollbar-hide text-xl scale-0 sm:text-sm sm:max-w-sm sm:p-6 md:text-lg md:p-4 md:max-w-xl text-white group-hover:scale-100">
          {title.overview}
        </p>
        <Image
          className="group-hover:opacity-30 group-hover:-z-10"
          layout="responsive"
          src={
            `${BASE_URL}${title.backdrop_path || title.poster_path}` ||
            `${BASE_URL}${title.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
}

export default Modal;
