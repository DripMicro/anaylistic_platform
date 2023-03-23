import { useState } from "react";
import type { FormEvent } from "react";
import React from "react";
import { Button, Stack, Link } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/layout/dist/grid";

export interface CommonFormProps {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  grid?: GridProps;

  submitButtonText?: string;
  submitNotification?: boolean;
}

export const FormAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit(e: FormEvent<Element>) {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          void handleSubmit(e);
        }}
        noValidate
        className="w-full "
      >
        <Stack>
          <div className="pb-4 mt-6 w-full md:w-1/2 text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Username
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type="text"
              placeholder="Type Here..."
            />
          </div>
          <div className="pb-2.5 pt-5 w-full md:w-1/2  relative text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Password
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type={showPassword ? "text" : "password"}
              placeholder="Type Here..."
            />
            <label
              onClick={() => setShowPassword(!showPassword)}
              className="absolute mt-4 right-4 cursor-pointer "
              htmlFor="toggle"
            >
              {showPassword ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>
              )}
            </label>
          </div>

          <div className="pb-2.5 pt-5  w-full md:w-1/2 relative text-base md:text-sm">
            <label className="block text-gray-600 mb-1.5 ml-2.5 text-base  font-medium">
              Repeat Password
            </label>
            <input
              className="border-1 px-3 py-4 placeholder-blueGray-300 text-blueGray-700 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-base"
              id="username"
              type={showPassword ? "text" : "password"}
              placeholder="Type Here..."
            />
            <label
              onClick={() => setShowPassword(!showPassword)}
              className="absolute mt-4 right-4 cursor-pointer "
              htmlFor="toggle"
            >
              {showPassword ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>
              )}
            </label>
          </div>

          <div className="flex text-sm items-start space-x-2 py-6">
            <input
              type="checkbox"
              className="border-gray-300 rounded h-5 w-5"
            />
            <label className="text-gray-700 font-medium leading-none mt-1">
              Yes, I would like to receive the Affiliate newsletter
            </label>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <button className="md:w-36 w-full bg-[#1B48BB] mt-8 text-base  text-white font-medium  py-4 px-12 rounded-md">
                Save
              </button>
            </div>
          </div>
        </Stack>
      </form>
    </div>
  );
};
