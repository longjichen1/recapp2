import { useRouter } from "next/router";
import requests from "../utils/requests";

function HeaderItem({ title, Icon, cont }) {
  const router = useRouter();
  console.log(cont);
  return (
    <div
      onClick={() => router.push(`/?genre=${title}`)}
      className="items-center cursor-pointer w-20 sm:w-40 flex flex-col group hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p
        className={`uppercase font-bold text-center tracking-widest ${
          cont == title ? "opacity-100" : "opacity-0"
        } group-hover:opacity-100`}
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;