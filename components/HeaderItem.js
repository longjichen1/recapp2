import { useRouter } from "next/router";
import requests from "../utils/requests";

function HeaderItem({
  isOpen,
  title,
  Icon,
  cont,
  setContent,
  content,
  setResult,
  setSearchValue,
}) {
  return (
    <div
      onClick={() => {
        if (!isOpen) {
          setContent(title);
          if (title === "HOME") {
            setResult();
            console.log("HOME");
          } else if (title === "WATCHED") {
            setResult([]);
          }
          setSearchValue("");
        }
      }}
      className={`items-center ${
        !isOpen ? "cursor-pointer" : ""
      } w-20 sm:w-40 flex flex-col group hover:text-white`}
    >
      <Icon
        className={`h-8 mb-1 ${!isOpen ? "group-hover:animate-bounce" : ""}`}
      />
      <p
        className={`uppercase font-bold text-center tracking-widest ${
          content == title ? "opacity-100" : "opacity-0"
        } ${!isOpen ? "group-hover:opacity-100" : ""}`}
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
