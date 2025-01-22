import React from 'react';
import fbLogo from '../assets/facebook.webp';
import githubLogo from '../assets/github.webp';
import gmailLogo from '../assets/gmail.webp';
import twitterLogo from '../assets/twitter.webp';
import linkedInLogo from '../assets/social.webp';
import { TextInput,Textarea,Button} from 'flowbite-react';
const contact = () => {
    return (
        <div>
            <section id='contacts'>
            <div class="bg-gray-300 p-4 rounded-md shadow-sm shadow-blue-950 mt-5 border border-blue-950 mb-5">
            <h2 class="pt-5 text-xl font-semibold text-blue-950">Get in touch<span class="bg-blue-900 text-white font-bold rounded-md ml-1 pl-3 pr-3 pt-1 pb-1">!</span></h2>
            <div class="block md:flex">
            <div class="mt-10 md:mt-5 mr-0 md:mr-4 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-3 flex-1">
            <h2 class="text-center text-lg font-bold p-4 text-blue-800">Contact Info:</h2>
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
            <div class="mt-10 md:mt-5 ml-0 md:ml-4 bg-gray-100 rounded-md shadow-sm shadow-blue-950 p-4 flex-1">
            <h2 class="text-center text-lg font-bold p-4 text-blue-800">Send me a message:</h2>
            <form action='mailto:wilfredmutwiri20@gmail.com'>
                <TextInput
                required
                placeholder="Enter Your Name"
                class="w-11/12 p-2 rounded-md bg-gray-100 mb-4"
                type='text'
                />
                <TextInput
                required
                placeholder="Enter Your Email"
                class="w-11/12 p-2 rounded-md bg-gray-100 mb-4"
                type='email'
                />
                <br/>
                <Textarea
                placeholder="Hello Wilfred..."
                required
                class="w-11/12 p-2 rounded-md bg-gray-200 mb-4"
                />
                <Button className='w-full' gradientDuoTone='pinkToOrange'>Submit</Button>
            </form>
            </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default contact;