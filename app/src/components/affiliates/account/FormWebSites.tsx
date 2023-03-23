import { useState } from "react";
import type { FormEvent } from "react";
import React from "react";
import { Button, Stack, Link } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/layout/dist/grid";

export const FormWebSites = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
        }}
        noValidate
        className="w-full "
      >
        <Stack>
          <div className="pb-4 mt-6 w-full md:w-1/2 text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Website1
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type="text"
              placeholder="Link..."
            />
          </div>
          <div className="pb-4 mt-6 w-full md:w-1/2 text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Website2
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type="text"
              placeholder="Link..."
            />
          </div>
          <div className="pb-4 mt-6 w-full md:w-1/2 text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Website3
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type="text"
              placeholder="Link..."
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <button className="md:w-36 w-full bg-[#1B48BB] mt-8 text-base  text-white font-medium  py-3 px-12 rounded-md">
                Save
              </button>
            </div>
          </div>
        </Stack>
      </form>
    </div>
  );
};
