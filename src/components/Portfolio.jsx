import React from 'react';

import bikeRent from '../assets/portfolio/bikeRent.png'
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import startupCentral from '../assets/portfolio/startupCentral.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: startupCentral,
            website: 'https://groups.startupcentral.dk/login',
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
                },
                {
                    sequence:4,
                    title: 'SpringBoot',
                    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                },
                {
                    sequence:5,
                    title: 'C#',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
                {
                    sequence:6,
                    title: '.NET',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
                {
                    sequence:7,
                    title: 'MAUI',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
                {
                    sequence:8,
                    title: 'MSSQL',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
                {
                    sequence:9,
                    title: 'Blazor',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
            ]
        },
        {
            id: 2,
            src: bikeRent,
            website: '',
            codeLink: 'https://github.com/ernekz/AND1',
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
                },
                {
                    sequence:4,
                    title: 'SpringBoot',
                    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                },
                {
                    sequence:5,
                    title: 'C#',
                    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                },
            ]
        },
        {
            id: 3,
            src: navbar,
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'Red',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'blue',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'yellow',
                },
            ]
        },
        {
            id: 4,
            src: reactParallax,
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'Red',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'blue',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'yellow',
                },
            ]
        },
        {
            id: 5,
            src: reactSmooth,
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'Red',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'blue',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'yellow',
                },
            ]
        },
        {
            id: 6,
            src: reactWeather,
            tags:[
                {
                    sequence:1,
                    title: 'Html',
                    color: 'Red',
                },
                {
                    sequence:2,
                    title: 'React',
                    color: 'blue',
                },
                {
                    sequence:3,
                    title: 'JavaScript',
                    color: 'yellow',
                },
            ]
        },
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src, website, codeLink, tags}) => (
                

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='py-2 px-1'>
                                {tags.map(({sequence, title, color}) => (
                                     <p 
                                     key={sequence}
                                     className={`inline-flex items-center px-5 py-2.5 text-xs font-medium text-center
                                     rounded-lg focus:ring-4 
                                      focus:outline-none  mx-1 my-1 ${color}`}>
                                     {title}</p>   
                                ))}
                                
                            </div>
                            
                        <div className='mt-auto flex items-center justify-center'>
                            
                            <a 
                            href={website}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</a>
                            <a 
                            href={codeLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
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