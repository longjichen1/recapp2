import Head from "next/head";
import { Result } from "postcss";
import { useState } from "react";
import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import Modal from "../components/Modal";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({ results, cont }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState({});
  return (
    <div>
      <Head>
        <title>CS 3254</title>
      </Head>
      <HeaderSection />
      <Nav cont={cont} />

      <Movies
        cont={cont}
        results={results}
        setOpen={() => setIsOpen(true)}
        setTitle={setTitle}
      />
      <Modal
        open={isOpen}
        title={title}
        onClose={() => setIsOpen(false)}
        emptyTitle={() => setTitle({})}
        cont={cont}
      >
        {" "}
      </Modal>
    </div>
  );
}

export async function getServerSideProps(context) {
  let genre = context?.query.genre || "HOME";
  if (genre !== "DISCOVER" && genre !== "WATCHED") {
    genre = "HOME";
  }
  let request = await fetch(
    `${requests[genre]?.url || requests.HOME.url}`
  ).then((res) => res.json());

  let result = request.results;
  return {
    props: {
      results: result,
      cont: genre,
    },
  };
}
