import Affiliates from "../../../layouts/AffiliatesLayout";

import { useState } from "react";

interface Data {
    propsdata: object;
}

const SupportComponent = (props: Data) => {
    // console.log(props.propsdata.title)
    const [expanded1, setExpanded1] = useState(true);

    return (

        <div className="h-auto px-2 mt-2 md:px-7 md:py-2 pt-3 bg-[#F9FBFF] rounded-lg  flex flex-col justify-between transition-all duration-500 cursor-pointer">
            <div className="text-base md:text-xl font-medium ">
                <button className="bg-[#2262C6] text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg></button>


                {/* <button
                    className="bg-[#2262C6] text-left  font-medium text-sm"
                    onClick={() => setExpanded1(!expanded1)}
                >
                    {expanded1 ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="white" />
                    </svg> : "-"}
                </button> */}
                {/* {props.propsdata.title}wwww */}
                {/* <div className="font-medium mt-2 md:mt-2.5 text-xs md:text-sm text-[#636363]">
                </div>
                <div className={"text-xs p-3 md:text-sm  md:pr-56  mt-3.5 md:mt-4 font-medium  transition duration-150 ease-in-out" + (expanded1 ? " max-h-9 truncate " : "")}>
                </div> */}
            </div>
            {/* <div className="flex mt-5 md:mt-6">
                <button
                    className="text-blue-500 text-left  font-medium text-sm"
                    onClick={() => setExpanded1(!expanded1)}
                >
                    {expanded1 ? "More" : "Less"}
                </button>
                <div className={"ml-2 inline-flex items-center justify-center duration-300" + (expanded1 ? " rotate-180" : "")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M6.29303 0.293031L0.586031 6.00003L6.29303 11.707L7.70703 10.293L3.41403 6.00003L7.70703 1.70703L6.29303 0.293031Z" fill="#2262C6" />
                    </svg>
                </div>
            </div> */}
        </div>
    );
};

export default SupportComponent;
