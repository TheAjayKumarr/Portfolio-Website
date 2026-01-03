import ssimage from "../assets/ssimage.jpeg";
import { LuGithub } from "react-icons/lu";

function Projects() {
  const socials = [
    {
      icon: <LuGithub size={18} />,
      label: "GitHub",
      onclick: () => window.open("https://github.com/TheAjayKumarr", "_blank"),
    },
  ];
  return (
    <div className="overflow-hidden bg-gray-900  h-dvh text-white">
      <div className=" max-w-4xl   m-auto mt-4 mb-4 pb-2">
        <div className="max-w-3xl flex justify-center m-auto text-4xl font-extrabold uppercase pb-8 pt-5 ">
          <h2>Projects</h2>
        </div>
        <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify">
          <div className="border border-blue-800 p-1 m-auto rounded-md hover:scale-105 hover:border-orange-500 transition-transform duration-300 hover:before:scale-95">
            <h4 className="text-xl font-semibold justify-center flex">
              CareerBlaze
              <div className=" flex gap-2 justify-end">
                {socials.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onclick}
                    className="hover:scale-125 transition-transform duration-300  custom-icon-reverse  "
                    aria-label={item.label}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </h4>
            <p className="">
              This is a job portal which can be used by job seekers and
              companies to search and post jobs. This is was made after taking
              inspiration from WellFound job portal.
            </p>
          </div>
          <div className="border border-blue-800 p-1 m-auto rounded-md hover:scale-105 transition-transform duration-300 hover:before:scale-95">
            <h4 className="text-xl font-semibold justify-center flex">
              CareerBlaze
            </h4>
            <p className="">
              This is a job portal which can be used by job seekers and
              companies to search and post jobs. This is was made after taking
              inspiration from WellFound job portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
