import React from "react";
import Testim from "../Assets/Testim.jpg";
import OracleRMS from "../Assets/RMS.jpg";
import Selenium from "../Assets/selenium.jpg";
import Slicer from "../components/Slicer";
import API from "../Assets/API.webp";
import AnimatedCard from "../components/AnimatedCard";
import MyWorks from "../components/MyWorks";

const mySkills = [
  {
    id: 1,
    img: Testim,
    title: "Web Automation using AI",
    desc: "Proficient in using AI-powered tools like Testim to streamline web automation testing, and creating the API validations, create adaptive test cases, and enhance reliability. Skilled in automating end-to-end workflows, self-healing tests, and leveraging AI for smart object identification and advanced reporting.",
  },
  {
    id: 2,
    img: OracleRMS,
    title: "Oracle RMS Integration - Retail Domain",
    desc: "Experienced in integrating and automating Oracle Retail Management Systems (RMS) to optimize retail operations. Skilled in testing key features such as inventory management, order processing, purchasing, and financial transactions, ensuring seamless data flow and system performance across retail platforms.",
  },
  {
    id: 3,
    img: Selenium,
    title: "Web UI Automation Using Selenium",
    desc: "Skilled in using Selenium to automate web UI testing with a focus on maintaining scalable and maintainable test scripts through the Page Object Model (POM design pattern). Proficient in creating reusable test scripts, performing cross-browser testing, and handling dynamic elements to validate functionality and user experience.",
  },
  {
    id: 4,
    img: API,
    title: "API validations",
    desc: "Experienced in performing comprehensive API testing to ensure functionality, security, and performance. Proficient in validating RESTful and SOAP APIs, verifying response data, status codes, headers, and payloads. Skilled in automating API test cases, conducting endpoint validation, and ensuring seamless integration with front-end and back-end systems.",
  },
];

function Protfolio() {
  return (
    <div className="relative">
      <span className="absolute -top-[60px]" id="portfolio"></span>
      <div className="mx-auto font-serif px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4   ">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h5 className="font-semibold text-xl">Feature it services</h5>
            <h1 className="font-bold md:text-5xl sm:text-3xl text-3xl">
              Tools i have worked with
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xl pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 text-justify">
              As the complexity of software systems increases, the field of
              architecture becomes multi-disciplinary with a focus on
              technological expertise.
            </p>
          </div>
        </div>

        {/*----------------------------------- FrontEnd Development ----------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {mySkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200 rounded-3xl shadow-2xl"
            >
              <img
                src={skill.img}
                alt=""
                className="w-full rounded-t-3xl h-[203px]"
              />
              <div className="p-5">
                <h5 className="my-5 text-2xl font-bold tracking-tight text-gray-900">
                  {skill.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-justify">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --------------Slider----------------- */}
        <div className="m-8">
          <Slicer />
        </div>
        <AnimatedCard />
      </div>
      <div>
        <MyWorks />
      </div>
    </div>
  );
}

export default Protfolio;
