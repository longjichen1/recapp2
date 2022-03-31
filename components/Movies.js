import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Thumbnail from "./Thumbnail";

function Movies({
  results,
  setOpen,
  title,
  setTitle,
  cont,
  searchResults,
  isSearch,
  isOpen,
  finalResults,
  watched,
  recs,
  searchValue,
  setAddMessage,
}) {
  const EmptyResult = () => {
    return (
      <div className="w-[80vw] mx-auto">
        <p className="text-center text-[#F4F4F4]">No movies found . . .</p>
      </div>
    );
  };

  let displayResults = finalResults || results;

  if (cont === "WATCHED") {
    displayResults = watched;
  } else if (cont === "DISCOVER") {
    displayResults = recs;
  }
  if (isSearch === true && searchValue !== "") {
    displayResults = searchResults;
  }

  return (
    <div
      className={`px-5 my-10 grid ${
        displayResults.length == 0 ? "" : "xl:grid-cols-3 md:grid-cols-2"
      } ${isOpen ? "opacity-50" : ""}`}
    >
      {displayResults.length > 0 ? (
        displayResults.map((result) => (
          <Thumbnail
            cont={cont}
            clickAble={true}
            title={title}
            setOpen={setOpen}
            key={result.id}
            result={result}
            setTitle={setTitle}
            watched={watched}
            setAddMessage={setAddMessage}
          />
        ))
      ) : (
        <EmptyResult />
      )}
    </div>
  );
}

export default Movies;
