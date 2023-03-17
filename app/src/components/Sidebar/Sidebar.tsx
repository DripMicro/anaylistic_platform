import React from "react";
// import Link from "next/link";
import { useRouter } from "next/router";
import SingleLink from "../common/menubar/SingleLink";
import DropdownLink from "../common/menubar/DropdownLink";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface Props {
  collapseShow: boolean;
}

export default function Sidebar({ collapseShow }: Props) {
  // const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const [activeName, setactiveName] = React.useState("dashboard");
  const [dropdown, setdropdown] = React.useState("");

  const activeLink = (value: string) => {
    setactiveName(value);
  };

  const activeDropdown = (value: string) => {
    setdropdown(value);
  };

  return (
    <>
      <div
        className={
          (collapseShow
            ? "w-64 rounded-tr-[50px] md:rounded-none "
            : "md:w-32 w-0 ") +
          "fixed flex flex-col top-16 md:top-20 left-0 bg-white dark:bg-gray-900 h-full text-white transition-all duration-300 z-10 sidebar"
        }
      >
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-16 space-y-1 cursor-pointer">
            <li>
              <SingleLink
                setactiveName={setactiveName}
                setdropdown={setdropdown}
                activeName={activeName}
                collapseShow={collapseShow}
                link={"dashboard"}
                linkName={"Dashboard"}
              />
            </li>

            <li>
              <DropdownLink
                setactiveName={setactiveName}
                setdropdown={setdropdown}
                dropdown={dropdown}
                activeName={activeName}
                collapseShow={collapseShow}
                linkName={[
                  { name: "Creative Materials", link: "creative" },
                  { name: "SubAffliate Creatives", link: "sub" },
                ]}
                defaultLink={"creative"}
                dropdownName={"marketing"}
              />
            </li>

            <li>
              <div
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-8"
                onClick={(e) => {
                  e.preventDefault();
                  activeLink("creative");
                  activeDropdown("marketing");
                }}
              >
                <img
                  alt="..."
                  className="w-6 align-middle border-none pt-0.5"
                  src={
                    "/img/icons/marketing" +
                    (dropdown == "marketing" ? "Active" : "") +
                    ".png"
                  }
                />
                {collapseShow ? (
                  <span
                    className={
                      "ml-4 text-base font-medium tracking-wide truncate " +
                      (dropdown == "marketing" ? "text-[#2262C6]" : "")
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
                      (dropdown == "marketing" ? " w-3" : " w-2 ")
                    }
                    src={
                      "/img/icons/Vector" +
                      (dropdown == "marketing" ? "1" : "") +
                      ".png"
                    }
                  />
                </span>
              </div>
              <ul
                className={
                  "flex-col pt-2 " +
                  (dropdown == "marketing" && collapseShow ? "flex" : "hidden")
                }
              >
                <li>
                  <div
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-14"
                    onClick={(e) => {
                      e.preventDefault();
                      setactiveName("creative");
                    }}
                  >
                    {collapseShow ? (
                      <span
                        className={
                          "ml-4 text-base font-medium tracking-wide truncate " +
                          (activeName == "creative" ? "text-[#2262C6]" : "")
                        }
                      >
                        Creative Materials
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
                <li>
                  <div
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-14"
                    onClick={(e) => {
                      e.preventDefault();
                      setactiveName("sub");
                    }}
                  >
                    {collapseShow ? (
                      <span
                        className={
                          "ml-4 text-base font-medium tracking-wide truncate " +
                          (activeName == "sub" ? "text-[#2262C6]" : "")
                        }
                      >
                        Sub Affliate Creatives
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link as={NextLink} href="/affiliates/signin">
                <div
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-white-800 pl-8"
                  onClick={(e) => {
                    e.preventDefault();
                    activeLink("dashboard");
                    activeDropdown("");
                  }}
                >
                  <img
                    alt="..."
                    className="w-6 align-middle border-none pt-0.5"
                    src={
                      "/img/icons/dashboard" +
                      (activeName == "dashboard" ? "Active" : "") +
                      ".png"
                    }
                  />
                  {collapseShow ? (
                    <span
                      className={
                        "ml-4 text-base font-medium tracking-wide truncate " +
                        (activeName == "dashboard" ? "text-[#2262C6]" : "")
                      }
                    >
                      Dashboard
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </li>


            <li>
              <SingleLink
                setactiveName={setactiveName}
                setdropdown={setdropdown}
                activeName={activeName}
                collapseShow={collapseShow}
                link={"profiles"}
                linkName={"Profiles"}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
