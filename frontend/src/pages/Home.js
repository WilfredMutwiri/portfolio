import profileImg from '../images/profileImg.webp'
import wakeAndShineLogo  from '../images/wakeandShineLogo.webp'
import tuongeeLogo from '../images/tuongee.webp'
import todologo from '../images/todologo.png'
const Home = () => {
    return ( 
        <div class="w-full font-serif">
        <nav class="bg-gray-200 p-2 shadow-sm shadow-blue-950 fixed w-full -mt-10">
        <h2 class=" text-center text-2xl text-blue-950 font-semibold">Wilfred_Mutwiri()<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">;</span></h2>
        </nav>
        {/* home holder */}
        <div class="flex mt-10 w-11/12 m-auto">
        {/* aside holder */}
            <div class="w-60 mt-10 p-1 pb-5 rounded-md fixed bg-gray-300 shadow-md shadow-blue-950">
            <div>
                <img class="rounded-full h-44 m-auto mt-3" src={profileImg} alt='profileImg'/>
                <h2 class="text-center font-semibold text-xl text-blue-950 p-2">Wilfred Mutwiri</h2>
                <p class="text-center pb-1">Software Engineer</p>
            </div>
            <div class="pt-2">
                <ul>
                    <li class="navLi">Home</li>
                    <hr class="w-44 m-auto"/>
                    <li class="navLi">About</li>
                    <hr class="w-44 m-auto"/>
                    <li class="navLi">Projects</li>
                    <hr class="w-44 m-auto"/>
                    <li class="navLi">Skills</li>
                    <hr class="w-44 m-auto"/>
                    <li class="navLi">Resume</li>
                    <hr class="w-44 m-auto"/>
                    <li class="navLi">Contact</li>
                    <hr class="w-44 m-auto"/>
                </ul>
            </div>
            </div>
        {/*right side holder  */}
        <div class="w-10/12 mt-10 ml-72">
        {/* about section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950">
                <h2 class="text-xl font-semibold text-blue-950">Who am i<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">?</span></h2>
                <p class="leading-relaxed pt-2">
                I am currently a software engineering student at the University Of Eastern Africa, Baraton.
                I am a determined fullstack web developer using the MERN Stack. I have worked on many contract
                tasks, most entailing the use of frontend frameworks such as React.js, Tailwindcss and JS6+.
                </p>
            </div>
        </section>
        {/* skills section */}
        <section>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="text-xl font-semibold text-blue-950">My Skills<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">$</span></h2>
            <div>
            <h2>Logo</h2>
            <div class="flex">
            <div class="flex rounded-md shadow-sm shadow-blue-950 p-6 mt-3 bg-gray-100">
            <ul class="p-2 mr-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>Tailwindcss</li>
            </ul>
            <ul class="p-2 ml-2">
                <li>Python</li>
                <li>Flask</li>
                <li>NodeJS</li>
                <li>CSS</li>
            </ul>
            <ul class="p-2 ml-2">
                <li>Git/Github</li>
                <li>ExpressJS</li>
                <li>SCSS</li>
                <li>JS6+</li>
            </ul>
            </div>
            <div class="bg-gray-100 ml-5 rounded-md shadow-sm shadow-blue-950 p-10 mt-3">
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
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5">
            <h2 class="text-xl font-semibold text-blue-950">Project<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">s</span></h2>
            <div class="grid grid-cols-2">
            <div class="mt-5 mr-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
                <div class="flex">
                    <img class="h-16 rounded-full" src={wakeAndShineLogo} alt='wakeAndShineLogo'/>
                    <h2 class="text-lg pt-5 pl-4 text-orange-500">Wake and Shine SHG</h2>
                </div>
                <hr class="bg-blue-950 h-[2px] w-64 m-auto mt-2 mb-2"/>
                <p>Complete website for Wake and Shine (SHG).<br/>
                Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                Tools used:<span class="text-blue-950">JavaScript, Tailwindcss, HTML, Git/Github</span><br/>
                To view project,<a class="text-red-500" href='#'>Click here</a></p>
            </div>
            <div class="mt-5 ml-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-16 rounded-full" src={tuongeeLogo} alt='tuongeeLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">Tuongee Initiative</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-64 m-auto mt-2 mb-2"/>
            <p>Complete website for Tuongee Initiative group.<br/>
                Skills incorporated during project development: Problem Solving, Communication, and Critical Reasoning.<br/>
                Tools used:<br/><span class="text-blue-950">React, MongoDB, ExpressJS,NodeJS,JavaScript, Tailwindcss,Git/Github</span><br/>
                To view project,<a class="text-red-500" href='#'>Click here</a>
            </p>
            </div>
            </div>
            {/* projects grid 2 */}
            <div class="grid grid-cols-2">
            <div class="mt-5 ml-3 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3">
            <div class="flex">
                <img class="h-14" src={todologo} alt='todoLogo'/>
                <h2 class="text-lg pt-5 pl-4 text-orange-500">ToDo App</h2>
            </div>
            <hr class="bg-blue-950 h-[2px] w-64 m-auto mt-2 mb-2"/>
            <p>Todo app with user Authentication.<br/>
                Skills incorporated during project development: Problem Solving, and Critical Reasoning.<br/>
                Tools used:<br/> <span class="text-blue-950">React, MongoDB, ExpressJS,NodeJS,JavaScript, Tailwindcss,Git/Github</span><br/>
                To view project,<a class="text-red-500" href='#'>Click here</a>
            </p>
            </div>
            <div></div>
            </div>
            {/* projects grid 3 */}
            <div class="grid grid-cols-2">
            <div></div>
            <div></div>
            </div>
            </div>
        </section>
        </div>
        </div>
        </div>
     );
}
 
export default Home;