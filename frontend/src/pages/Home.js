import {Link} from 'react-router-dom'
import menuIcon from '../images/menu.webp'
import homeImg from '../images/home.webp'
import contactImg from '../images/support.webp'
import projectImg from '../images/project-management.webp'
import aboutIcon from '../images/information-button.webp'
import resumeIcon from '../images/resume.webp'
import skillsIcon from '../images/creative-thinking.webp'
import IGlogo from '../images/instagram.webp'
import fbLogo from '../images/facebook.webp'
import githubLogo from '../images/github.webp'
import gmailLogo from '../images/gmail.webp'
import twitterLogo from '../images/twitter.webp'
import linkedInLogo from '../images/social.webp'
import ueabLogo from '../images/ueabLogo.webp'
import codsoftLogo from '../images/codsoft.webp'
import calculatorLogo from '../images/calculator.webp'
import hotelLogo from '../images/hotel.webp'
import profileImg from '../images/profileImg.webp'
import wakeAndShineLogo  from '../images/wakeandShineLogo.webp'
import tuongeeLogo from '../images/tuongee.webp'
import todologo from '../images/todologo.png'
import skillsgif from '../images/skillsgif.gif'
import databaseIcon from '../images/database.webp'
import goldenNetLogo from '../images/local-area-network.webp'
import { useState,useRef,useEffect} from 'react'
const Home = () => {
    const asideRef=useRef(null)
    const openeAsideRef=useRef(null)
    const closeAsideRef=useRef(null)
    const handleOpenMenu=()=>{
        if(asideRef.current && openeAsideRef.current){
            asideRef.current.style.display="block"
            closeAsideRef.current.style.display="block"
            openeAsideRef.current.style.display="none"
        }
    }
    const handleCloseMenu=()=>{
        if(asideRef.current && closeAsideRef.current){
            asideRef.current.style.display="none"
            closeAsideRef.current.style.display="none"
            openeAsideRef.current.style.display="block"
        }

    }
    useEffect(()=>{
        const aside=asideRef.current
        const openeAside=openeAsideRef.current
        const closeAside=closeAsideRef.current
    },[])
    return ( 
        <div class="w-full font-serif overflow-clip scroll-smooth" id='Home'>
        <nav class="bg-gray-200 p-3 shadow-sm shadow-blue-950 fixed w-screen -mt-10">
        <svg ref={openeAsideRef} onClick={handleOpenMenu} onMouseEnter={handleOpenMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" block md:hidden w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <svg ref={closeAsideRef} onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 text-orange-500 hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <h2 class="-mt-7 md:-mt-0 text-center text-xl md:text-2xl text-blue-950 font-semibold">Wilfred_Mutwiri()<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">;</span></h2>
        </nav>
        {/* home holder */}
        <div class="flex mt-10 w-11/12 m-auto">
        {/* aside holder */}
            <div ref={asideRef} class=" hidden md:block w-60 -ml-4 h-screen md:h-auto md:-ml-0 mt-4 md:mt-10 p-1 pb-10 rounded-none md:rounded-md fixed bg-gray-300 shadow-md shadow-blue-950">
            <div>
                <img class="rounded-full h-32 m-auto mt-2" src={profileImg} alt='profileImg'/>
                <h2 class="text-center font-semibold text-xl text-blue-950">Wilfred Mutwiri</h2>
                <p class="text-center pb-1">Software Engineer</p>
            </div>
            <div class="pt-2">
                <ul>
                <p class="flex navLi">
                <img class="h-8 " src={homeImg}/>
                <li class="ml-5"><a href='#Home'>Home</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                <p class="flex navLi">
                <img class="h-8 " src={aboutIcon}/>
                <li class="ml-5 mt-2"><a href='#about'>About</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                <p class="flex navLi">
                <img class="h-8 " src={projectImg}/>
                <li class="ml-5 mt-2"><a href='#projects'>Projects</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                <p class="flex navLi">
                <img class="h-8 " src={skillsIcon}/>
                <li class="ml-5 mt-2"><a href='#skills'>Skills</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                <p class="flex navLi">
                <img class="h-8 " src={resumeIcon}/>
                <li class="ml-5 mt-2"><a href='#resume'>Resume</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                <p class="flex navLi">
                <img class="h-8" src={contactImg}/>
                <li class="ml-5 mt-2"><a href='#contacts'>Contacts</a></li>
                </p>
                    <hr class="w-44 m-auto"/>
                </ul>
            </div>
            </div>
        {/*right side holder  */}
        <div class=" w-full md:w-10/12 mt-10 ml-0 md:ml-72" id='about'>
        {/* about section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950">
                <h2 class="text-lg md:text-xl font-semibold text-blue-950">Who am i<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">?</span></h2>
                <p class="leading-relaxed pt-2">
                I am currently a software engineering student at the University Of Eastern Africa, Baraton.
                I am a determined fullstack web developer using the MERN Stack. I have worked on many contract
                tasks, most entailing the use of frontend frameworks such as React.js, Tailwindcss and JS6+.
                </p>
            </div>
        </section>
        {/* skills section */}
        <section id='skills'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="text-lg md:text-xl font-semibold text-blue-950">My Skills<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">$</span></h2>
            <div>
            <div class="block md:flex">
            <div class="rounded-md shadow-sm shadow-blue-950 p-5 mt-3 bg-gray-100">
            <img class="h-14 rounded-full -ml-5" src={skillsgif} alt="skillsgif"/>
            <div class="block md:flex">
            <ul class="p-2 mr-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>Tailwindcss</li>
            </ul>
            <ul class="p-2 ml-0 md:ml-2">
                <li>Python</li>
                <li>Flask</li>
                <li>NodeJS</li>
                <li>CSS</li>
            </ul>
            <ul class="p-2 ml-0 md:ml-2">
                <li>Git/Github</li>
                <li>ExpressJS</li>
                <li>SCSS</li>
                <li>JS6+</li>
            </ul>
            </div>
            </div>
            <div class="bg-gray-100 ml-0 md:ml-5 rounded-md shadow-sm shadow-blue-950 p-10 mt-3">
            <img class="h-8 -ml-4 mb-2" src={databaseIcon} alt="databaseIcon"/>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
            </div>
            </div>
            </div>
            </div>
        </section>
        {/* projects section */}
        <section id='projects'>
            <div  class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="text-lg md:text-xl font-semibold text-blue-950">Project<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">s</span></h2>
            <div class="block md:grid grid-cols-2">
            <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
                <div class="flex">
                    <img class="h-16 rounded-full" src={wakeAndShineLogo} alt='wakeAndShineLogo'/>
                    <h2 class="text-lg pt-5 pl-4 text-orange-500">Wake and Shine SHG</h2>
                </div>
                <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                <p>Complete website for Wake and Shine (SHG).<br/>
                Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                Tools used:<span class="text-blue-950">JavaScript, Tailwindcss, HTML,Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href='https://wakeandshineshg.netlify.app/' target='_blank'>Click here</a></p>
            </div>
            <div class="mt-5 ml-0 md:ml-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-16 rounded-full" src={tuongeeLogo} alt='tuongeeLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">Tuongee Initiative</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
            <p>Complete website for Tuongee Initiative group.<br/>
                Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                Tools used: <span class="text-blue-950">React, MongoDB, ExpressJS,NodeJS,JavaScript, Tailwindcss,Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href='https://tuongee.vercel.app/' target='_blank'>Click here</a>
            </p>
            </div>
            </div>
            {/* projects grid 2 */}
            <div class="block md:grid grid-cols-2">
            <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-14" src={todologo} alt='todoLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">ToDo App</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
            <p>Todo app with user Authentication.<br/>
                Skills incorporated during project development: Problem Solving, and Critical Reasoning.<br/>
                Tools used:<br/> <span class="text-blue-950">React, MongoDB, ExpressJS,NodeJS,JavaScript, Tailwindcss,Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href="https://todo-app-ashen-tau.vercel.app/Landing" target='_blank'>Click here</a>
            </p>
            </div>
            <div class="mt-5 ml-0 md:ml-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-14" src={goldenNetLogo} alt='goldenNetLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">Golden Networks</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
            <p>
                Golden Networks Organisation Website<br/>
                Skills incorporated during project development:Communication, Problem Solving, and Critical Reasoning.<br/>
                Tools used:<br/><span class="text-blue-950">JavaScript,HTML,Tailwindcss,
                Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href="https://wilfredmutwiri.github.io/Golden-Networks/" target='_blank'>Click here</a>
            </p>
            </div>
            </div>
            {/* projects grid 3 */}
            <div class="block md:grid grid-cols-2">
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-14" src={hotelLogo} alt='hotelLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">DianiStar Hotel</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
            <p>Diani_Star Hotel Website<br/>
                Skills incorporated during project development:Problem Solving, and Critical Reasoning.<br/>
                Tools used:<br/> <span class="text-blue-950">JavaScript,HTML,CSS,Tailwindcss,
                Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href="https://wilfredmutwiri.github.io/DianiStar-Hotel_Tailwindcss/" target='_blank'>Click here</a>
            </p>
            </div>
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-14" src={calculatorLogo} alt='hotelLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">Classic Calculator</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
            <p>Classic Calculator<br/>
                Skills incorporated during project development:Problem Solving, and Critical Reasoning.<br/>
                Tools used:<br/> <span class="text-blue-950">JavaScript,HTML,CSS,Tailwindcss,
                Git/Github</span><br/>
                To view project,<a class="text-red-500 hover:text-blue-800" href="https://wilfredmutwiri.github.io/Classic-calculator/" target='_blank'>Click here</a>
            </p>
            </div>
            </div>
            </div>
        </section>
        {/* resume section */}
        <section id='resume'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="text-lg md:text-xl font-semibold text-blue-950">Resum<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">e</span></h2>
            <h3>Experience</h3>
            {/* first experience */}
            <div class="mt-5  mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class=" block md:flex">
            <img class="h-16 rounded-full" src={tuongeeLogo} alt='tuongeeLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">Tuongee Initiative<span class="font-light text-gray-600 text-sm">-Web Developer</span></h2>
            </div>
            <div class=" block md:flex justify-between pt-4 pb-4">
                <h2>Tharaka South, Tharaka-Nithi, Kenya</h2>
                <h3 class="pt-2 md:pt-0">January 2024 - current</h3>
            </div>
            <p class=" p-2 md:p-3 leading-relaxed">
            I built a complete website/web application for the organisation.Technologies used
            are React,Javascript,NodeJS,ExpressJS,
            MongoDb,Github,Tailwindcss,.I also demonstrate/present the
            project to Project Manager.
            </p>
            </div>
            {/* second experience */}
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="block md:flex">
            <img class="h-16 rounded-full" src={wakeAndShineLogo} alt='wakeAndShineLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">Wake and Shine SHG <span class="font-light text-gray-600 text-sm">-Web Developer</span></h2>
            </div>
            <div class="block md:flex justify-between pt-4 pb-4">
                <h2>Tharaka South, Tharaka-Nithi, Kenya</h2>
                <h3 class="pt-2 md:pt-2">April 2023 - August 2023</h3>
            </div>
            <p class="p2 md:p-3 leading-relaxed">
            I built a complete website for the organisation.Technologies used
            are Github, Javascript, Tailwindcss,HTML.I also demonstrate/present the
            project to Project Manager.
            </p>
            </div>
            {/* third experience */}
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="block md:flex">
            <img class="h-16 rounded-full" src={codsoftLogo} alt='codesoftLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">CodSoft<span class="font-light text-gray-600 text-sm">-Web Development Intern</span></h2>
            </div>
            <div class=" block md:flex justify-between pt-4 pb-4">
                <h2>Remote</h2>
                <h3 class="pt-2 md:pt-0">November 2023 - December 2023</h3>
            </div>
            <p class="p-2 md:p-3 leading-relaxed">
            Was given a task to develope 3 projects and submit them to the internship management.Technologies used
            are Github, Javascript, Tailwindcss,HTML.
            </p>
            </div>
            </div>
        </section>
        {/* education section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <div>
                <h2>Education</h2>
                {/* first education */}
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="block md:flex">
            <img class="h-16 rounded-full" src={ueabLogo} alt='ueabLogo'/>
            <h2 class="text-lg pt-5 pl-4 text-orange-500">Bachelor of Science<span class="font-light text-gray-600 text-sm">-Software Developement</span></h2>
            </div>
            <div class="block md:flex justify-between pt-4 pb-4">
                <h2>Baraton, Nandi County, Kenya</h2>
                <h3 class="pt-2 md:pt-0">August 2020 - current</h3>
            </div>
            <p class="p-3 leading-relaxed">
            | Software Enginnering|Data Structure and Algorithms | Web Design| Web Development |
            Mobile Programming | Artificial Intelligence | ICT Project Management|Cloud Computing|
            Object Oriented Programming|Database Management
            |Installation and Customization| Awaiting Graduation on August 2025
            </p>
            </div>
            </div>
            </div>
        </section>
        {/* get in touch section */}
        <section id='contacts'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="pt-5 text-xl font-semibold text-blue-950">Get in touch<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">!</span></h2>
            <div class="block md:flex">
            <div class="mt-10 md:mt-5 mr-0 md:mr-4 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <h2 class="text-center text-lg font-bold p-4 text-blue-800">Contact Info</h2>
            <ul class="p-4">
                <li class="flex">
               <img class="h-5 mr-2" src={gmailLogo} alt="gmailLogo"/>
                wilfredmutwiri20@gmail.com 
                </li>
                <li class="flex mt-2 mb-2">
                <img class="h-5 mr-2" src={fbLogo} alt="fbLogo"/>
                Facebook:
                <a class="text-blue-800" href="https://www.facebook.com/willy.james.33821">Wilfred Mutwiri </a>
                </li>
                <li class="flex mb-2">
                <img class="h-5 mr-2" src={githubLogo} alt="gmailLogo"/>
                Github: 
                <a class="text-blue-800" href="https://github.com/WilfredMutwiri">WilfredMutwiri</a>
                </li>
                <li class="flex mb-2">
                <img class="h-5 mr-2" src={linkedInLogo} alt="linkedinLogo"/>
                LinkedIn:
                <a class="text-blue-800" href="https://www.linkedin.com/in/wilfred-mutwiri-ba3bb8236/">Wilfred Mutwiri</a>
                </li>
                <li class="flex">
                <img class="w-5 mr-2" src={twitterLogo} alt="gmailLogo"/>
                Twitter: 
                <a class="text-blue-800" href="https://twitter.com/WilfredMutwiri8">@WilfredMutwiri8</a>
                </li>
            </ul>
            </div>
            <div class="mt-10 md:mt-5 ml-0 md:ml-4 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-4">
            <h2 class="text-center text-lg font-bold p-4 text-blue-800">Send me a message:</h2>
            <form action='mailto:wilfredmutwiri20@gmail.com'>
                <input type="text" class="w-11/12 p-2 rounded-md bg-gray-300 mb-4" placeholder="Your Name" required /><br/>
                <input type="text" class="w-11/12 p-2 rounded-md bg-gray-300 mb-4" placeholder="Your Email" required/><br/>
                <textarea class="w-11/12 p-2 rounded-md bg-gray-300 mb-4" required placeholder="Hello Wilfred..." cols="30" rows="10"></textarea><br/>
                <button class="w-11/12 mb-4 text-white shadow-sm shadow-black font-semibold bg-gradient-to-r from-blue-800 to-orange-500 p-2 rounded-md">Submit</button>
            </form>
            </div>
            </div>
            </div>
        </section>
        </div>
        </div>
        </div>
     );
}
 
export default Home;