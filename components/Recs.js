import React, { useState, useEffect } from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
import RecMovie from "./RecMovie";

function Recs({ results }) {
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    handleResults();
  }, []);

  async function getMovie(d) {
    const a = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1985ea9f71a9f54b4301260f1e18311a&language=en-US&page=1&include_adult=false&query=${d}`
    ).then((res) => {
      return res.json();
    });
    return a.results[0];
  }

  async function handleResults() {
    const movieArrayd = await results;
    const movieMetaData = await Promise.all(
      movieArrayd.map((movie) => getMovie(movie))
    );

    setMovieArray(movieMetaData);
  }

  return (
    <div className="overflow-scroll flex flex-row scrollbar-hide">
      {movieArray.length > 0 ? (
        movieArray.map((d, i) => {
          return (
            <div key={i} className="p-5">
              <RecMovie a={d} />
            </div>
          );
        })
      ) : (
        <div className="text-center mx-auto">
          No Recommendations Available . . .
        </div>
      )}
    </div>
  );
}

export default Recs;
