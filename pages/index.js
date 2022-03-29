import Head from "next/head";
import { Result } from "postcss";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Modal from "../components/Modal";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import Search from "../components/Search";
import requests from "../utils/requests";

export default function Home({ results }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [content, setContent] = useState("HOME");
  const [result, setResult] = useState(results);
  const [watched, setWatched] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  if (watched.length == 0) {
    setWatched([
      { title: "Spider-Man" },
      { title: "tommy" },
      { original_name: "beyonce" },
    ]);
  }
  const [recs, setRecs] = useState([]);
  return (
    <div>
      <Head>
        <title>CS 3254</title>
      </Head>
      <HeaderSection isOpen={isOpen} setContent={setContent} />
      <Nav
        cont={content}
        setContent={setContent}
        content={content}
        setResult={setResult}
        setSearchValue={setSearchValue}
      />
      <Search
        setSearchResults={setSearchResults}
        setIsSearch={setIsSearch}
        isOpen={isOpen}
        genre={content}
        recs={recs}
        setRecs={setRecs}
        watched={watched}
        setWatched={setWatched}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Movies
        isOpen={isOpen}
        cont={content}
        searchResults={searchResults}
        results={results}
        isSearch={isSearch}
        setOpen={() => setIsOpen(true)}
        setTitle={setTitle}
        finalResults={result}
        watched={watched}
        recs={recs}
        searchValue={searchValue}
      />
      <Modal
        open={isOpen}
        title={title}
        onClose={() => setIsOpen(false)}
        emptyTitle={() => setTitle({})}
        cont={content}
      >
        {" "}
      </Modal>
    </div>
  );
}

export async function getServerSideProps() {
  let request = await fetch(`${requests.HOME.url}`).then((res) => res.json());

  let result = request.results;
  return {
    props: {
      results: result,
    },
  };
}
