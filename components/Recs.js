import React, { useState, useEffect } from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";
const donut = [];
function Recs({ results, genre }) {
  const [mounted, setMounted] = useState(false);
  const [resultArray, setResultArray] = useState([]);
  const [movieArray, setMovieArray] = useState([]);
  async function getRecs() {
    const a = await results;
    setResultArray(a);
    setMounted(true);
  }
  getRecs();
  useEffect(() => {
    setMounted(false);
  }, [resultArray, genre]);
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
  async function getAllMovies(newArray) {
    newArray.forEach(async (title) => {
      const gotMovie = await GetMovie(title);
      donut.push(gotMovie);
    });
  }
  if (donut.length === 0) {
    getAllMovies(newArray);
    console.log(donut);
  }

  const Component = ({ a }) => {
    console.log(a);
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str) =>
      typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
    return (
      <div className="grid">
        <div className="flex flex-col justify-center  border-2  w-64 h-36 rounded-md">
          <Image
            className="fill"
            layout="responsive"
            src={
              `${BASE_URL}${a.backdrop_path || a.poster_path}` ||
              `${BASE_URL}${a.poster_path}`
            }
            height={1080}
            width={1920}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(700, 475)
            )}`}
          />
        </div>
        <p className="text-center">{a.title || a.original_name}</p>
      </div>
    );
  };
  let i = 0;
  return (
    <div className="overflow-scroll flex flex-row scrollbar-hide">
      {newArray.length > 25 ? (
        donut.map((d) => (
          <p key={i++} className="p-5" onClick={() => GetMovie(d)}>
            <Component a={d} />
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Recs;
