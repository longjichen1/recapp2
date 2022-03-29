import React, { useState } from "react";
import Modal from "./Modal";
import Thumbnail from "./Thumbnail";

function Movies({
  results,
  setOpen,
  setTitle,
  cont,
  searchResults,
  isSearch,
  isOpen,
}) {
  console.log(searchResults);
  console.log(isSearch);
  return (
    <div
      className={`px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 ${
        isOpen ? "opacity-50" : ""
      }`}
    >
      {!isSearch
        ? results.map((result) => (
            <Thumbnail
              cont={cont}
              clickAble={true}
              setOpen={setOpen}
              key={result.id}
              result={result}
              setTitle={setTitle}
            />
          ))
        : searchResults.map((result) => (
            <Thumbnail
              cont={cont}
              clickAble={true}
              setOpen={setOpen}
              key={result.id}
              result={result}
              setTitle={setTitle}
            />
          ))}
    </div>
  );
}

export default Movies;
