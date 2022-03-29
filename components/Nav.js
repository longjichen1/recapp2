import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
import {
  ChevronDoubleDownIcon,
  ArrowSmDownIcon,
  ArrowNarrowRightIcon,
  HomeIcon,
  UserIcon,
  SearchIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import HeaderItem from "../components/HeaderItem";
function Nav({ cont, setContent, content, setResult, setSearchValue }) {
  return (
    <div className="flex flex-grow justify-evenly mx-auto text-white bg-slate-700 p-6 ">
      <HeaderItem
        title="HOME"
        Icon={HomeIcon}
        cont={cont}
        setContent={setContent}
        content={content}
        setResult={setResult}
        setSearchValue={setSearchValue}
      />
      <HeaderItem
        title="WATCHED"
        Icon={UserIcon}
        cont={cont}
        setContent={setContent}
        content={content}
        setResult={setResult}
        setSearchValue={setSearchValue}
      />
      <HeaderItem
        title="DISCOVER"
        Icon={ThumbUpIcon}
        cont={cont}
        setContent={setContent}
        content={content}
        setResult={setResult}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default Nav;
