import React from 'react';

import bikeRent from '../assets/portfolio/bikeRent.png'
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import startupCentral from '../assets/portfolio/startupCentral.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: startupCentral,
            website: 'https://groups.startupcentral.dk/login',
            description: "The social media platform for people starting their own business. Accessible on all platforms, mobile applications can be found on AppleStore or GooglePlay",
            techStack: ".NET, Socket.io, React, Blazor, MAUI, MSSQL."
        },
        {
            id: 2,
            src: bikeRent,
            website: '',
            codeLink: 'https://github.com/ernekz/AND1',
            description: "Android application for renting bikes. People can register and create their own listings for renting bikes.",
            techStack: "Java, FirebaseAuth, Firebase Database"
           
        },
        {
            id: 3,
            src: navbar,
            description: "The social media platform for people who are looking to travel and looking for people to travel with. It is a mobile application currently only working for iOS.",
            techStack: "Java, SpringBoot, Kafka, Docker, MySQL, Swift"
        },
        {
            id: 4,
            src: reactParallax,
            description: "My portfolio website where I showcase my experience and projects that I have worked with",
            techStack: "React, Tailwind"
        },
        {
            id: 5,
            src: reactParallax,
            description: "Bachelor project for Eurofins company. This is a scheduling website.",
            techStack: ".NET, Socket.io, React, MSSQL, CSS"
        },
        {
            id: 6,
            src: reactParallax,
            description: "Compiler,Interpreter and VM in GO for a language Monkey. It was done reading 2 books. The idea behind this 'project' is to get a better grasp of how it works, what causes errors. It helped me to understand errors more in-depths which also makes it easier for me to solve.",
            techStack: "Golang"
        },
       
        
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
        
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src, website, codeLink, description,techStack}) => (
                

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            
                                <div className='py-2 px-1'>
                                    <p className='py-2 px-1'>{description}</p>
                                    <text className='py-2 '>Technologies used:</text>
                                    <p className='py-2 px-1'>{techStack}</p>
                                </div>
                            <div className='flex-grow'></div>
                            
                        <div className=' flex items-center justify-center'>
                            
                            <a 
                            href={website}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' w-1/2 px-12 py-3 m-4 duration-200 hover:scale-105' >Demo</a>
                            <a 
                            href={codeLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' w-1/2 px-12 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
            </div>

        

            ))
        }
        </div>

        

    </div>

    </div>
  )
}

export default Portfolio