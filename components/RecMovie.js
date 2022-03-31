import React from "react";
import Image from "next/image";
function RecMovie({ a }) {
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
    <div className="rounded-bl-md rounded-br-md">
      <div className=" justify-center p-0 m-0 w-[17rem] h-36">
        <Image
          className="contain border-8 border-slate-600"
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
      <p className="pt-3 text-center font-bold font-sans">
        {a.title || a.original_name}
      </p>
    </div>
  );
}

export default RecMovie;
