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
    <div className="fixed z-10 top-[50%] left-[50%] border-0 rounded-sm ease-in bg-white p-12 -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[80vh]">
      <button onClick={reset}>Close Modal</button>
      <p>{title.title || title.original_name}</p>
      <Thumbnail result={title} />
    </div>
  );
}

export default Modal;
