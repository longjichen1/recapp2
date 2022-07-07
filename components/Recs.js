import React, { useState, useEffect } from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import RecMovie from "./RecMovie";

function Recs({ results, donut, resultArray, setResultArray }) {
  const [movieArray, setMovieArray] = useState([]);

  async function getRecs() {
    const a = await results;
    setResultArray(a);
  }
  getRecs();

  const newArray = resultArray.slice(0, 50);

  async function GetMovie(d) {
    const a = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1985ea9f71a9f54b4301260f1e18311a&language=en-US&page=1&include_adult=false&query=${d}`
    ).then((res) => {
      return res.json();
    });
    // console.log(a.results);
    return a.results[0];
  }
  console.log(newArray.length);
  async function getAllMovies(newArray) {
    newArray.forEach(async (title) => {
      const gotMovie = await GetMovie(title);
      if (donut.indexOf(gotMovie) === -1) {
        donut.push(gotMovie);
      }
    });
    console.log("count");
  }
  if (donut.length <= 0) {
    getAllMovies(newArray);
  }

  let i = 0;
  return (
    <div className="overflow-scroll flex flex-row scrollbar-hide">
      {donut.length > 1 ? (
        donut.map((d) => (
          <p key={i++} className="p-5">
            <RecMovie a={d} />
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Recs;
