import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface Props {
  activeName: string;
  collapseShow: boolean;
  dropdown: string;
  dropdownName: string;
  defaultLink: string;
  linkName: LinkName[];
  setactiveName: Dispatch<SetStateAction<string>>;
  setdropdown: Dispatch<SetStateAction<string>>;
}

interface LinkName {
  name: string;
  link: string;
}

const SingleLink = ({
  setactiveName,
  setdropdown,
  activeName,
  collapseShow,
  dropdown,
  linkName,
  dropdownName,
  defaultLink,
}: Props) => {
  const activeLink = (value: string) => {
    setactiveName(value);
  };

  const activeDropdown = (value: string) => {
    setdropdown(value);
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          activeLink(defaultLink);
          activeDropdown(dropdownName);
        }}
      >
        <Link
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-8"
          href={"/affiliates/" + defaultLink}
        >
          <img
            alt="..."
            className="w-6 align-middle border-none pt-0.5"
            src={
              "/img/icons/" +
              dropdownName +
              (dropdown == dropdownName ? "Active" : "") +
              ".png"
            }
          />
          {collapseShow ? (
            <span
              className={
                "ml-4 text-base font-medium tracking-wide truncate " +
                (dropdown == dropdownName ? "text-[#2262C6]" : "")
              }
            >
              Marketing Tools
            </span>
          ) : (
            ""
          )}
          <span className="py-0.5 ml-auto mr-8 text-xs font-medium tracking-wide truncate">
            <img
              alt="..."
              className={
                "align-middle border-none" +
                (dropdown == dropdownName ? " w-3" : " w-2 ")
              }
              src={
                "/img/icons/Vector" +
                (dropdown == dropdownName ? "1" : "") +
                ".png"
              }
            />
          </span>
        </Link>
      </div>

      <ul
        className={
          "flex-col pt-2 " +
          (dropdown == dropdownName && collapseShow ? "flex" : "hidden")
        }
      >
        {linkName.map((value) => (
          <li>
            <div
              onClick={(e) => {
                e.preventDefault();
                setactiveName(value.link);
              }}
            >
              <Link
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-14"
                href={"/affiliates/" + value.link}
              >
                {collapseShow ? (
                  <span
                    className={
                      "ml-4 text-base font-medium tracking-wide truncate " +
                      (activeName == value.link ? "text-[#2262C6]" : "")
                    }
                  >
                    {value.name}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SingleLink;
