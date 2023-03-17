import { createTsForm } from "../../libs/react-ts-form";
import { useState } from "react";
import { mapping } from "./mapping";
import type { FormEvent } from "react";
import React from "react";
import { Button, Stack, Link } from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/layout/dist/grid";
import { FormLayout } from "./FormLayout";
import { useSubmitAction } from "./useSubmitAction";
import NextLink from "next/link";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'

export interface CommonFormProps {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  grid?: GridProps;

  submitButtonText?: string;
  submitNotification?: boolean;
}

const CommonForm = ({
  onSubmit,
  children,
  grid,
  submitButtonText,
  submitNotification = true,
}: CommonFormProps) => {
  const { handleSubmit, isLoading } = useSubmitAction({
    onSubmit,
    submitNotification,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

  const handleOnChange = (value:string) => {
    console.log(value);
    setPhone(value);
  };

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        void handleSubmit(e);
      }}
      noValidate
      className="w-full md:w-[56rem]"
    >
      <Stack>
        {/* <FormLayout grid={grid}>{children}</FormLayout> */}
        {/* <Button
          className="w-full bg-[#2262C6]"
          minW={36}
          type="submit"
          variant="solid"
          isLoading={isLoading}
          alignSelf="start"
        >
          {submitButtonText ? submitButtonText : "SAVE"}
        </Button> */}

        <div className="text-4xl text-black flex flex-col items-center mt-20 mb-16 md:mt-28 md:mb-24">
          Register to Your
          <div className="flex items-center">
            <img className="mt-2" src="/img/logo.png" width="109"/>
            <span className="ml-3 text-black">account</span>
          </div>
        </div>

        <div className="p-2">
          <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
            Username
          </label>
          <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type="text" placeholder="Type Here..."/>
        </div>

        <div className="md:flex">
          <div className="flex-1 p-2">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              First Name
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type="text" placeholder="Type Here..."/>
          </div> 

          <div className="flex-1 p-2">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Last Name
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type="text" placeholder="Type Here..."/>
          </div>
        </div>

        <div className="md:flex">
          <div className="flex-1 p-2">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Email
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type="text" placeholder="Type Here..."/>
          </div> 

          <div className="flex-1 p-2">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Confirm Email
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type="text" placeholder="Type Here..."/>
          </div>
        </div>

        <div className="md:flex">
          <div className="flex-1 p-2 relative">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Password
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type={showPassword?'text':'password'} placeholder="Type Here..."/>
            <label
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute mt-4 right-4 cursor-pointer " htmlFor="toggle">
                {showPassword?
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                    </path>
                  </svg>
                :
                  <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                    </path>
                  </svg>
                }
            </label>
          </div>
          <div className="flex-1 p-2 relative">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Confirm Password
            </label>
            <input className="border rounded-md w-full py-4 px-3 text-gray-700 font-normal text-base" id="username" type={showPassword?'text':'password'} placeholder="Type Here..."/>
            <label
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute mt-4 right-4 cursor-pointer " htmlFor="toggle">
                {showPassword?
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                    </path>
                  </svg>
                :
                  <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                    </path>
                  </svg>
                }
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="flex-1 p-2">
            <label className="block text-gray-600 text-base mb-1.5 ml-2.5 font-medium">
              Email
            </label>
            <div className="w-full text-gray-700" >
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true
                }}
                inputStyle={{width:'100%', borderColor: "#DDD"}}
                specialLabel=""
                country={"us"}
                value={phone}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>

        <button className="w-full bg-[#2262C6] text-white py-3 font-semibold rounded-md">
          {submitButtonText ? submitButtonText : "SAVE"}
        </button>
        
        <div className="text-center pt-6 md:pt-14 text-sm md:text-xl">
          Do have an account?&nbsp;
          <Link as={NextLink} href="/affiliates/signin">
            <span className="text-[#2262C6] text-sm md:text-xl font-bold">
              Sign In
            </span>
          </Link>
        </div>
        
      </Stack>
    </form>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const FormSignUp = createTsForm(mapping, {
  FormComponent: CommonForm,
});
