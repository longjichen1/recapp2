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
function Nav({ cont }) {
  console.log("hi" + cont);
  return (
    <div className="flex flex-grow justify-evenly mx-auto text-white bg-slate-700 p-6 ">
      <HeaderItem title="HOME" Icon={HomeIcon} cont={cont} />
      <HeaderItem title="WATCHED" Icon={UserIcon} cont={cont} />
      <HeaderItem title="DISCOVER" Icon={ThumbUpIcon} cont={cont} />
    </div>
  );
}

export default Nav;
