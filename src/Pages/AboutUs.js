import React from "react";
import education from "../Assets/education.png";
import certification from "../Assets/certification.jpg";

const mySkills = [

  {
    id: 1,
    img: education,
    year: "2019",
    title: "B Sc Computer Scence",
    clg: "St. Thoma's College, ",
    desc: "Thrissur,Kerala",
  },
];
const mysertification = [

  {
    id: 1,
    img: certification,
    year: "2020",
    title: "SDET Certified",
    clg: "Infosys Learning Hub ",
    desc: "Thiruvanathapuram",
  },
];
const myDetails = [
  {
    id: 1,
    key: "Name",
    value: "Liston Steephan",
  },
  {
    id: 2,
    key: "Date of Birth",
    value: "02-July-1998",
  },
  {
    id: 3,
    key: "Occupation",
    value: "Software Test Engineer",
  },
  {
    id: 4,
    key: "Phone",
    value: "+91 8943891279",
  },
  {
    id: 5,
    key: "Email",
    value: "listonsteephan@gmail.com",
  },
  {
    id: 6,
    key: "Nationality",
    value: "India",
  },
];

function AboutUs() {
  return (
    <div className="relative">
      <span className="absolute -top-[60px]" id="about"></span>
      <div className="text-black font-serif ">
        <div className="container px-4 sm:px-10">
          <div className="text-balance space-y-3 flex flex-col items-start shadow-sm">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl tracking-widest mt-5">
              About Me
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 ">
              <div>
                <p className="leading-loose text-base sm:text-lg md:text-xl px-2 text-justify">
                  With a focus on precision and efficiency, I specialize in automation testing using tools
                   like Selenium and AI-powered platforms such as Testim. My experience spans various domains,
                    including hospital management systems, retail, and Oracle RMS.I am skilled in testing Oracle 
                    RMS functionalities, including item management, inventory, purchasing, and financial integrations, 
                    ensuring smooth and accurate system operations. Combining technical expertise with a 
                    detail-oriented mindset, I build reliable test frameworks and deliver high-quality solutions 
                    tailored to business needs.Proficient in Selenium for robust test automation, Testim for AI-powered 
                    testing, and scripting languages like Java and Python, I excel in creating scalable and efficient 
                    test cases. My expertise extends to CI/CD pipelines, API testing, and end-to-end automation processes, 
                    enabling seamless and efficient software delivery. I stay committed to learning the latest tools 
                    and technologies to enhance testing efficiency and accuracy continually.
                </p>
                <div className="">
                  {myDetails.map((details, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 m-2  mt-6 text-base sm:text-sm md:text-xl lg:text-2xl"
                    >
                      <p className="font-semibold text-base">{details.key}:</p>
                      <p className="text-base sm:text-base  ">
                        {details.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-0 sm:ml-10 mt-6 sm:mt-0">
                <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl tracking-widest ">
                  Education
                </h1>
                <div className="flex flex-col items-start md:ml-4 sm:ml-0 mt-4 text-base sm:text-base md:text-lg lg:text-xl text-justify">
                  <p>
                  A proper education provides individuals with the foundation
                   to grow in multiple dimensions of their lives—personally, professionally, and socially.
                  </p>
                  {mySkills.map((education) => (
                    <div
                      key={education.id}
                      className="pt-10 flex w-full sm:w-aut0"
                    >
                      <div className="hover:rotate-45 hover:transition hover:ease-in-out hover:delay-300 ">
                        <img
                          src={education.img}
                          alt=""
                          className="w-20 sm:w-16 md:w-20 mr-4 sm:mr-2 rounded-full "
                        />
                      </div>
                      <div className="m-1">
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.year}
                        </p>
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.title}
                        </p>
                        <div className="lg:flex">
                          <p className="text-sm sm:text-base md:text-base">
                            {education.clg}
                          </p>
                          <p className="text-sm sm:text-sm md:text-base">
                            {education.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl tracking-widest ">
                  Certifications
                </h1>
                <div className="flex flex-col items-start md:ml-4 sm:ml-0 mt-4 text-base sm:text-base md:text-lg lg:text-xl text-justify">
                  <p>
                  The following are the certifications I have acquired during my career journey.
                  </p>
                  {mysertification.map((education) => (
                    <div
                      key={education.id}
                      className="pt-10 flex w-full sm:w-aut0"
                    >
                      <div className="hover:rotate-45 hover:transition hover:ease-in-out hover:delay-300 ">
                        <img
                          src={education.img}
                          alt=""
                          className="w-20 sm:w-16 md:w-20 mr-4 sm:mr-2 rounded-full "
                        />
                      </div>
                      <div className="m-1">
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.year}
                        </p>
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.title}
                        </p>
                        <div className="lg:flex">
                          <p className="text-sm sm:text-base md:text-base">
                            {education.clg}
                          </p>
                          <p className="text-sm sm:text-sm md:text-base">
                            {education.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
