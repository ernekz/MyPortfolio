import React from 'react'



const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I am a creative and innovative person who is willing to get out of my comfort zone to create different types of applications.
                Mostly I am interested in the backend, but can be working on frontend too. The perfect option would be Full-Stack developer.
                I have experience with many technologies starting with C++ back in the high school days. At the University I gained knowledge 
                of different technologies that can be found in the Technologies section below.
                Currently, I am working on my own projects: Travel Application made with react-native, TailwindCSS, and the Backend made with
                Node.js, Express, MySQL.
                Landlord web application will be made with Next.js
            </p>

            <br />

            <p className='text-xl'>
                I am outgoing person which loves to play football, do some running from time to time. On my own time, I like playing computer games,
                working on my own projects to gain more experience in the field where I want to pursue my career in. I am a person who likes to help people
                where I can. 

            </p>
        </div>
    </div>
  )
}

export default About