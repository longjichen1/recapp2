import React, { useState } from "react";
import Modal from "./Modal";
import Thumbnail from "./Thumbnail";

function Movies({ results, setOpen, setTitle, cont }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <Thumbnail
          cont={cont}
          clickAble={true}
          setOpen={setOpen}
          key={result.id}
          result={result}
          setTitle={setTitle}
        />
        // TODO - move modal here or move out of scope and have a useState that sets the title and if modal is open or closed
      ))}
    </div>
  );
}

export default Movies;
