import React from 'react'
import vabriseLogo from '../assets/vabriseTech logo.jpeg'
import swapspaceLogo from '../assets/swapspacelogo.png'
import wakeAndShineLogo  from '../assets/wakeandShineLogo.webp'
import abetecLogo from '../assets/abeteclogo.png'
import ueabLogo from '../assets/ueabLogo.webp'

const Resume = () => {
    return (
        <div>
            <section id='resume'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-10 border border-blue-950">
            <h2 class="text-lg md:text-xl font-semibold text-blue-950">Resum<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">e</span></h2>
            <h3>Experience</h3>
            {/* first experience */}
            <div class="mt-5  mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class=" block md:flex">
            <img class="h-14 rounded-full" src={swapspaceLogo} alt='tuongeeLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">Swap Space<span class="font-light text-gray-600 text-sm">-Mobile app Development Intern</span></h2>
            </div>
            <div class=" block md:flex justify-between pt-4 pb-4">
                <h2>Remote, Dubai</h2>  
                <h3 class="pt-2 md:pt-0">Novermber 2024 - Current</h3>
            </div>
            <p class=" p-2 md:p-3 leading-relaxed">
            Collaboration in bulding a real estate mobile app application for the company.Technologies used
            are React-Native,Javascript,Github,NativeWind,.I also demonstrate/present the
            project to Project Manager and my supervisor.
            </p>
            </div>
            {/* second experience */}
            <div class="mt-5  mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class=" block md:flex">
            <img class="h-16 rounded-full" src={abetecLogo} alt='abetecLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">Abetec Hub<span class="font-light text-gray-600 text-sm">-Backend Development Intern</span></h2>
            </div>
            <div class=" block md:flex justify-between pt-4 pb-4">
                <h2>Remote, Kenya</h2>
                <h3 class="pt-2 md:pt-0">November 2024 - January 2025</h3>
            </div>
            <p class=" p-2 md:p-3 leading-relaxed">
            Collaboration in bulding an Ed-Tech platform for the abetec hub with moodle integration.
            Technologies used
            are MySQL, Moodle, PhP.I also demonstrate/present the
            project to Project Manager and my supervisor.
            </p>
            </div>
            {/* third experience */}
            <div class="mt-5  mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class=" block md:flex">
            <img class="h-14 rounded-full" src={vabriseLogo} alt='tuongeeLogo'/>
            <h2 class="text-lg pt-5 pl-0 md:pl-4 text-orange-500">Vabrise Technologies<span class="font-light text-gray-600 text-sm">-Web Development Intern</span></h2>
            </div>
            <div class=" block md:flex justify-between pt-4 pb-4">
                <h2>Remote, Kenya</h2>
                <h3 class="pt-2 md:pt-0">July 2024 - November 2024</h3>
            </div>
            <p class=" p-2 md:p-3 leading-relaxed">
            Collaboration in bulding an e-commerce application for the organisation.Technologies used
            are React,Javascript,NodeJS,ExpressJS,
            MongoDb,Github,Tailwindcss,.I also demonstrate/present the
            project to Project Manager and my supervisor.
            </p>
            </div>
            {/* fourth experience */}
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="block md:flex">
            <img class="h-14 rounded-full" src={wakeAndShineLogo} alt='wakeAndShineLogo'/>
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
            </div>
        </section>
        {/* education section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5 border border-blue-950">
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
                <h3 class="pt-2 md:pt-0">August 2021 - current</h3>
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
        </div>
    )
}

export default Resume;