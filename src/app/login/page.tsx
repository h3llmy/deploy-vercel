"use client";
import React from "react";
import LoginForm from "./loginForm";
import { useRouter } from "next/navigation";
import InputLanguage from "../(component)/input/inputLanguage";

export default function Page() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("https://www.google.com");
  };
  return (
    <React.Fragment>
      <div className="flex">
        <div className="h-full w-screen md:w-[40%] md:relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#F95738",
              }}
              className="text-4xl hidden md:block md:text-6xl lg:text-8xl text-center z-20"
            >
              ELVIA
            </h1>
          </div>
          <img
            className="h-[100vh] w-full object-cover blur-lg md:blur-0"
            src={"/Image 3.png"}
            alt="about image"
          />
        </div>
        <div className="absolute w-screen h-screen md:w-[65%] lg:w-[63%] md:left-[35%] lg:left-[37%]">
          <div className="bg-white bg-opacity-50 md:bg-opacity-100 rounded-[48px] md:rounded-none md:rounded-l-[30px] h-screen m-5 md:m-0">
            <div className="p-10">
              <div className="w-full flex justify-end">
                <InputLanguage onChange={(e) => console.log(e)} />
              </div>
              <h1
                className="text-5xl"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  lineHeight: "78px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#082846",
                }}
              >
                Log in to Your account
              </h1>
              <button onClick={handleOnClick}>a</button>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
