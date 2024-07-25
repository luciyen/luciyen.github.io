import "./App.css";
import CherryBranch from "./assets/aboutmebg2.png";
import Profile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Outlook from "./assets/outlook.png";
import LinkedIn from "./assets/linkedin.svg";
import GitHub from "./assets/githublogo.png";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

 
function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="main container m-auto">


        {/* Navigation Bar */}
        <div className="max-w-4xl m-auto relative">
          <header className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20 bg-black`} id="home">
            <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
              <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                <div>
                  <h1 className="font-bold text-2xl">Jahn Tibayan</h1>
                </div>
                <div>
                  <ul className="flex gap-4">
                    <li>
                      <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="text-gray-400 hover:text-white cursor-pointer">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                        About me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
        
        <main className="relative mt-28">


          {/* Intro/Banner section */}
          <section id="Banner">
            <div className="max-w-4xl m-auto relative container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <h2 className="font-bold text-4xl">Meet Jahn,</h2>
                <div>
                  <h2 className="font-bold text-4xl mt-1 gradient-text">Software Developer</h2>
                </div>
                <div>
                  <p className="biograph mt-4 text-gray-400">
                    Computer Science Major at Cal State Fullerton,
                    with a High Interest in Full-Stack Web Development,
                    Data Science and Machine Learning.
                  </p>
                  <a href="../assets/resume.pdf" download="Your_Resume_Name.pdf" class="inline-block px-8 py-5 mt-10 bg-gradient-to-t from-green-600 to-green-800 rounded-full hover:from-green-400 hover:to-green-400 shadow-md shadow-gray-500">
                    Download Resume
                  </a>
                  <div className="max-w-4xl mx-auto relative flex justify-center sm:justify-between mt-5 px-4 py-6">
                    <div>


                      {/* Social Icons */}
                      <ul className="flex gap-4">
                        <li>
                          <a href="mailto:jahnltib@gmail.com" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <img src={Outlook} className="w-10" alt="Outlook Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/feed/" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <img src={LinkedIn} className="w-10" alt="LinkedIn Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/jahnltib" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <img src={GitHub} className="w-10" alt="GitHub Icon" />
                          </a>
                        </li>
                      </ul>


                    </div>
                  </div>
                </div>
              </div>


              {/* Profile Picture, Leaves, and Cherry Blossom in Hero Section*/}
              <div className="relative">
                <div className="
                  after:bg-[url('../public/large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[390px] after:h-[290px] after:absolute after:top-0 after:-left-20 sm:after:-left-14
                  before:bg-[url('../public/small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-9 before:-right-11
                  drop-shadow-lg">
                  <img src={Profile} className="relative z-10 w-[380px] m-auto sm:w-[600px]" />
                </div>
              </div>
            </div>
          </section>


          {/* Projects section */}
          <section id="projects">
            <div className="max-w-4xl m-auto relative container m-auto px-4 sm:py-12">
              <h2 className="text-2xl font-semibold">Projects</h2>

              {/* First Row */}
              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                {/* Project 1 */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project1} className="w-full h-auto border rounded border-none" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Full-Stack Linktree App
                  </h3>
                  <p className="text-gray-400 text-sm mt-2"> 
                    Linktree app with user account system to display
                    social links. Offline to protect keys. React with NextJS, TailwindCSS, & Supabase. 
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button 
                      className="flex-1 text-sm py-3 bg-gradient-to-t from-green-600 rounded-full to-green-800 hover:from-green-400 hover:to-green-400"
                      onClick={() => window.location.href = 'https://ibb.co/ZKGQxyK'}
                    >
                      Static Demo
                    </button>
                    <button 
                      className="flex-1 text-sm py-3 border rounded-full hover:border-green-400 hover:text-green-400"
                      onClick={() => window.location.href = 'https://github.com/jahnltib/nextjs-linktree-clone'}
                    >
                      GitHub
                    </button>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project2} className="w-full h-auto border rounded border-none" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Commerical Real Estate Website
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Responsive website layout for a professional real estate company.
                    Made with Bootstrap, HTML, CSS, and JavaScript.
                  </p>
                  <div className="flex gap-2 mt-12">
                    <button 
                      className="flex-1 text-sm py-3 bg-gradient-to-t from-green-600 rounded-full to-green-800 hover:from-green-400 hover:to-green-400"
                      onClick={() => window.location.href = 'https://choyrealestate.netlify.app/#'}
                    >
                      Live Demo
                    </button>
                    <button 
                      className="flex-1 text-sm py-3 border rounded-full hover:border-green-400 hover:text-green-400"
                      onClick={() => window.location.href = 'https://github.com/jahnltib/bootstrap-real-estate-website'}
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Second Row */}
              <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                {/* Project 3 */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project3} className="w-full h-auto border rounded border-none" />
                  <h3 className="text-2xl font-semibold mt-8">
                    NBA Trivia Challenge App
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Responsive and mobile friendly quiz app based on NBA trivia.
                    Includes timer, user, and scoring system.
                    Made with Bootstrap, HTML, CSS, and JavaScript.
                  </p>
                  <div className="flex gap-4 mt-12">
                    <button 
                      className="flex-1 text-sm py-3 bg-gradient-to-t from-green-600 rounded-full to-green-800 hover:from-green-400 hover:to-green-400"
                      onClick={() => window.location.href = 'https://nbatrivia.netlify.app/'}
                    >
                      Live Demo
                    </button>
                    <button 
                      className="flex-1 text-sm py-3 border rounded-full hover:border-green-400 hover:text-green-400"
                      onClick={() => window.location.href = 'https://github.com/jahnltib/bootstrap-nba-trivia'}
                    >
                      GitHub
                    </button>
                  </div>
                </div>


                {/* Project 4 */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project4} className="w-full h-auto border rounded border-none" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Coming soon...
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Currently under construction...
                  </p>
                  <div className="flex gap-2 mt-12">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-green-600 rounded-full to-green-800 hover:from-green-400 hover:to-green-400">
                      Live preview (N/A)
                    </button>
                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-green-400 hover:text-green-400">
                      GitHub (N/A)
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/*Skills section*/}
          <section id="skills">
          <img src={CherryBranch} className="skillsbg" alt="cherry blossom branch" />
            <div className="max-w-4xl m-auto relative container m-auto px-4 py-14">
              <h2 className="text-2xl font-semibold text-center">
                Technologies and Skills
              </h2>
              
              <div className="max-w-4xl m-auto relative flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%] justify-center items-start">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Git
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    JavaScript
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    React
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Python
                  </p>
                </div>
              </div>

              <div className="max-w-4xl m-auto relative flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%] justify-center items-start">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Figma
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Bootstrap
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    TailwindCSS
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* About Me Section */}
          <section className="py-8" id="aboutme">
            <div className="max-w-2xl m-auto relative container border border-gray-500 rounded-md p-8 bg-neutral-950 bg-opacity-95">
              <h2 className="text-4xl font-semibold text-center">About me</h2>
              <div className="mt-12 p-4 relative before:absolute before:top-10 before:left-20 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-0.5 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:absolute before:rounded-full before:left-[57px]">
                  <h3 className="absolute left-0 text-lg font-semibold">NOW</h3>
                  <h className="aboutheading    font-bold gradient-text">Cal State University, Fullerton</h>
                  <h2 className="semi-bold mb-4">B.S. Computer Science</h2>
                  <p className="mt-2 text-gray-400">
                    Relevant Coursework: Principles of Software Engineering, Web Frontend Engineering, Algorithm Engineering, Operating Systems Concepts, File Structures and Databases.
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:absolute before:rounded-full before:left-[57px]">
                  <h3 className="absolute left-0 text-lg font-semibold    ">2023</h3>
                  <h className="aboutheading font-bold gradient-text">Bayport Real Estate Group</h>
                  <h2 className="semi-bold mb-4">Freelance Web Development</h2>
                  <p className="mt-2 text-gray-400">
                    Developed a company site for a professional real
                    estate business. Ensured client satisfaction by using 
                    an scrum-based software process and ongoing communication to properly elicit and deliver
                    product requirements.
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-green-600 before:to-green-800 before:absolute before:rounded-full before:left-[57px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                  <h className="aboutheading font-bold gradient-text">Sharetea</h>
                  <h2 className="semi-bold mb-4">Barista, Shift Manager</h2>
                  <p className="mt-2 text-gray-400">
                    Coordinated team to handle the high demand of a busy boba shop.
                    Trained new coworkers to efficiently take orders and make drinks as to ensure short customer waiting times.
                    Resolved issues within a collaborative workplace, such as lack of motivation, by leading by example and communicating expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
        </footer>
        {
          /* Return To Top Button */
          scrolling && (
            <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
              window.scrollTo(0,0);
            }}>
              <img src={ArrowDown} />
            </button>
          )
        }
  </div>
  );
}

export default App;
