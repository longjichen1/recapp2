import React, { useState, useEffect } from "react";
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
  finalResults,
  watched,
  recs,
}) {
  const EmptyResult = () => {
    return (
      <div className="w-[80vw] mx-auto">
        <p className="text-center text-[#F4F4F4]">No movies found . . .</p>
      </div>
    );
  };

  let displayResults = finalResults || results;
  // TODO - UPDATE SEARCH RESULTS BY GENRE FIRST AND THEN UPDATE THIS
  /*
    move if (cont === "watched") etc above isSearch and also add a "discover"
  */
  if (cont === "WATCHED") {
    displayResults = watched;
    console.log(finalResults);
  }
  if (isSearch === true) {
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
            setOpen={setOpen}
            key={result.id}
            result={result}
            setTitle={setTitle}
          />
        ))
      ) : (
        <EmptyResult />
      )}
    </div>
  );
}

export default Movies;
