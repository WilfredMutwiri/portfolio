import React from 'react';
import mzeduLogoImg from '../assets/R.jpeg';
import DKBooks from '../assets/school.webp';
import jabanaLogo from '../assets/JabanaLogo.png';
import savannahLogo from '../assets/savannahLlogo.jpg';
import wakeAndShineLogo  from '../assets/wakeandShineLogo.webp';
import tuongeeLogo from '../assets/tuongee.webp';
import beachlifelogo from '../assets/beachlifelogo.webp'
import { Button } from 'flowbite-react';

const Projects = () => {
    return (
        <div>
            <section id='projects'>
                        <div  class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5 border-blue-950 border">
                        <h2 class="text-lg md:text-xl font-semibold text-blue-950">Project<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">s</span></h2>
                        {/* first project grid */}
                        <div className="block md:flex flex-row gap-4">
                            {/* first project */}
                            <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                        <div class="flex">
                            <img class="h-14" src={savannahLogo} alt='todoLogo'/>
                            <h2 class="text-lg pt-5 pl-4 text-orange-500">Savannah e-Commerce</h2>
                        </div>
                        <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                        <p>E-Commerce web platform for Vabrise Technologies<br/>
                            Skills incorporated during project development: Problem Solving, and Team work and Collaboration<br/>
                            Tools used:<br/> <span class="text-blue-950">React,Django,JavaScript, Tailwindcss,Git/Github</span><br/>
                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href="https://shop.vabrisetech.com/" target='_blank'>View Project</a>
                            </Button>
                        </p>
                        </div>
                        {/* second project */}
                        <div className="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                            <div class="flex">
                                <img class="h-14 rounded-full" src={mzeduLogoImg} alt='wakeAndShineLogo'/>
                                <h2 class="text-lg pt-5 pl-4 text-orange-500">Mzedu furniture & Decorations</h2>
                            </div>
                            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                            <p>Complete website for displaying and selling products by Mzedu furniture and decorations.<br/>
                            Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                            Tools used:<br/><span class="text-blue-950">React.js,Tailwindcss,Github</span>
                            <br/>
                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'><a href='https://mzedu-furnitures.vercel.app/' target='_blank'>View Project</a></Button></p>
                        </div>
                        </div>
                        {/* projects grid 2 */}
                        <div class="block md:flex flex-row gap-4">
                            {/* third project */}
                            <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                            <div class="flex">
                            <img class="h-14" src={DKBooks} alt='DKbooksLogo'/>
                            <h2 class="text-lg pt-5 pl-4 text-orange-500">Destinykers Bookstore</h2>
                            </div>
                            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                            <p>A bookstore website incorporated with the best books of all times, allowing users to download all the books in pdf form.<br/>
                            Skills incorporated during project development: Problem Solving and Creative reasoning<br/>
                            Tools used: <span class="text-blue-950">React,JavaScript, Tailwindcss,Flowbite,Git/Github</span><br/>
                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href='https://destinykers-bookstore.vercel.app/' target='_blank'>View Project</a>
                            </Button>
                        </p>
                        </div>
                        {/* fourth project */}
                        <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                            <div class="flex">
                                <img class="h-14" src={beachlifelogo} alt='beachlifeLogo'/>
                                <h2 class="text-lg pt-5 pl-4 text-orange-500">BeachLife Fitness (Diani)</h2>
                            </div>
                            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                            <p>Complete website for the Kenya Beachlife Fitness Gym, Diani.<br/>
                            Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                            Tools used:<span class="text-blue-950">JavaScript, Tailwindcss, HTML,Git/Github</span><br/>

                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href='https://beach-life-fitness.vercel.app/' target='_blank'>View Project</a>
                            </Button>
                            </p>
                        </div> 
                        </div>
                        {/* projects grid 3 */}
                        <div className="block md:flex flex-row gap-4">
                            {/* fifth project */}
                            <div class="mt-5 ml-0 md:ml-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                            <div class="flex">
                                <img class="h-14 rounded-full" src={jabanaLogo} alt='jabanaLogo'/>
                                <h2 class="text-lg pt-5 pl-4 text-orange-500">Jabana</h2>
                            </div>
                            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                            <p>A school communication management system.<br/>
                            Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                            Tools used:<span class="text-blue-950">React, Tailwindcss,Flowbite,Node.js,
                            MongoDB,Git/Github</span><br/>
                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href='http://jabana.vercel.app/' target='_blank'>View Project</a>
                            </Button>
                            </p>
                        </div>
                            
                        {/* sixth project */}
                        <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
                            <div class="flex">
                                <img class="h-14 rounded-full" src={wakeAndShineLogo} alt='wakeAndShineLogo'/>
                                <h2 class="text-lg pt-5 pl-4 text-orange-500">Wake and Shine SHG</h2>
                            </div>
                            <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                            <p>Complete website for Wake and Shine (SHG).<br/>
                            Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                            Tools used:<span class="text-blue-950">JavaScript, Tailwindcss, HTML,Git/Github</span><br/>

                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href='https://wakeandshineshg.netlify.app/' target='_blank'>View Project</a>
                            </Button>
                            </p>
                        </div>
                        </div>
                        {/* project grid 4 */}
                        <div className="block md:flex flex-row gap-4">
                        {/* seventh project */}
                        <div class="mt-5 mr-0 md:mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 w-auto md:w-96">
                        <div class="flex">
                            <img class="h-14 rounded-full" src={tuongeeLogo} alt='tuongeeLogo'/>
                            <h2 class="text-lg pt-5 pl-4 text-orange-500">Tuongee Initiative</h2>
                        </div>
                        <hr class="bg-blue-950 h-[2px] w-10/12 md:w-64 m-auto mt-2 mb-2"/>
                        <p>Complete website for Tuongee Initiative group.<br/>
                            Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                            Tools used: <span class="text-blue-950">React, MongoDB, ExpressJS,NodeJS,JavaScript, Tailwindcss,Git/Github</span><br/>

                            <Button gradientDuoTone='pinkToOrange' className='w-full mt-10'>
                            <a href='https://tuongee.vercel.app/' target='_blank'>View Project</a>
                            </Button>
                        </p>
                        </div>
                        </div>
                        <h2 className='p-3'>for these and more projects, Kindly visit my <a className='text-blue-600 hover:text-red-600' href='https://github.com/WilfredMutwiri' target='_blank'>Github Profile</a></h2>
                        </div>
                    </section>
        </div>
    )
}

export default Projects;