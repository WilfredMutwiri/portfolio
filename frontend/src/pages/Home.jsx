import React from 'react';
import { Button} from 'flowbite-react';
import {Link} from 'react-router-dom'
import Projects from './projects';
import Resume from './resume';
import Contacts from './Contacts';
import menuIcon from '../assets/menu.webp'
import homeImg from '../assets/home.webp'
import contactImg from '../assets/support.webp'
import projectImg from '../assets/project-management.webp'
import aboutIcon from '../assets/information-button.webp'
import resumeIcon from '../assets/resume.webp'
import skillsIcon from '../assets/creative-thinking.webp'
import profileImg from '../assets/profileImg.webp'

import skillsgif from '../assets/skillsgif.gif'
import databaseIcon from '../assets/database.webp'
import { useRef,useEffect} from 'react'
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
        <svg ref={openeAsideRef}  onMouseEnter={handleOpenMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" block md:hidden w-7 h-7">
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
            <div ref={asideRef} class=" hidden md:block w-60 -ml-4 h-screen md:h-auto md:-ml-0 mt-4 md:mt-10 p-1 pb-10 rounded-none md:rounded-md fixed bg-gray-300 shadow-sm shadow-blue-950 border border-blue-950 z-50">
            <div>
                <img class="rounded-full h-32 m-auto mt-2" src={profileImg} alt='profileImg'/>
                <h2 class="text-center font-semibold text-xl text-blue-950">Wilfred Mutwiri</h2>
                <p class="text-center pb-1">Software Engineer</p>
            </div>
            <div class="pt-2">
                <ul>
                <a href='#Home'>
                <p class="flex navLi">
                <img class="h-7 " src={homeImg}/>
                <li class="ml-5">Home</li>
                </p>
                </a>

                <hr class="w-44 m-auto"/>
                <a href='#about'>
                <p class="flex navLi">
                <img class="h-7 " src={aboutIcon}/>
                <li class="ml-5 mt-2">About</li>
                </p>
                
                </a>

                <hr class="w-44 m-auto"/>
                <a href='#projects'>
                <p class="flex navLi">
                <img class="h-7 " src={projectImg}/>
                <li class="ml-5 mt-2">Projects</li>
                </p>
                </a>
                <hr class="w-44 m-auto"/>

                <a href='#skills'>
                <p class="flex navLi">
                <img class="h-7 " src={skillsIcon}/>
                <li class="ml-5 mt-2">Skills</li>
                </p>
                </a>

                <hr class="w-44 m-auto"/>
                <a href='#resume'>
                <p class="flex navLi">
                <img class="h-7 " src={resumeIcon}/>
                <li class="ml-5 mt-2">Resume</li>
                </p>
                </a>
                
                <hr class="w-44 m-auto"/>
                <a href='#contacts'>
                <p class="flex navLi">
                <img class="h-7" src={contactImg}/>
                <li class="ml-5 mt-2">Contacts</li>
                </p>
                </a>
                <hr class="w-44 m-auto"/>
                </ul>
            </div>
            </div>
        {/*right side holder  */}
        <div class=" w-full md:w-10/12 mt-10 ml-0 md:ml-72" id='about'>
        {/* about section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 border border-blue-950">
                <h2 class="text-lg md:text-xl font-semibold text-blue-950">Who am i<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">?</span></h2>
                <p class="leading-relaxed pt-2">
                I am a Full stack Software Engineer with five years’ experience building web applications and Mobile apps using modern technologies. I have strong problem-solving skills and effective collaboration with crossfunctional teams, leading to delivering high-quality solutions meeting requirements. As a continuous learner, I stay up-to-date with the latest trends and technologies hence eager to adopt and contribute skills and passion in software engineering to your organisation. 
                </p>
            </div>
        </section>
        {/* skills section */}
        <section id='skills'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5 border border-blue-950">
            <h2 class="text-lg md:text-xl font-semibold text-blue-950">My Skills<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">$</span></h2>
            <div>
            <div class="block md:flex">
            <div class="rounded-md shadow-sm shadow-blue-950 p-5 mt-3 bg-gray-100">
            <img class="h-14 rounded-full -ml-5" src={skillsgif} alt="skillsgif"/>
            <div class="block md:flex">
                <div className='flex'>
                <div className='block md:flex'>
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
                </div>
                <div className='block md:flex'>
                <ul class="p-2 ml-0 md:ml-2">
                <li>Git/Github</li>
                <li>ExpressJS</li>
                <li>SCSS</li>
                <li>JS6+</li>
            </ul>
            <ul class="p-2 ml-0 md:ml-2">
                <li>Flowbite</li>
                <li>React Native</li>
                <li>NativeWind</li>
                <li>PhP</li>
            </ul>
                </div>
                </div>
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
        <section>
            <Projects/>
        </section>
        {/* resume section */}
        <section>
            <Resume/>
        </section>
        {/* get in touch section */}
        <section>
            <Contacts/>
        </section>
        </div>
        </div>
        </div>
    )
}

export default Home;