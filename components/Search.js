import React, { useState } from "react";

function Search({ setSearchResults, setIsSearch, isOpen, genre }) {
  const API_KEY = "1985ea9f71a9f54b4301260f1e18311a";
  const [search, setSearch] = useState("");
  async function result(search) {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
    ).then(function (res) {
      return res.json();
    });
  }

  async function findSearch(title) {
    let newResults = [];
    if (genre === "HOME") {
      newResults = await result(title);
    }

    if (title.length == 0) {
      setIsSearch(false);
      setSearchResults([]);
    } else {
      setIsSearch(true);
      if (genre === "HOME") setSearchResults(newResults.results);
      else setSearchResults(newResults);
    }
  }
  return (
    <div
      className={`${
        isOpen ? "opacity-50" : ""
      } border-0 rounded-xl pt-10 w-[80vw] flex flex-col justify-center mx-auto`}
    >
      <input
        className={`"w-[80vw] p-5 h-10 border-0 rounded-xl placeholder-italic`}
        placeholder="Find your favorites..."
        onChange={(e) => findSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;