import React from 'react';

import python from '../assets/python.png';
import java from '../assets/Javapn.png'
import spring from '../assets/spring.png';
import github from '../assets/github.png';
import kafka from '../assets/Kafka.png';
import swift from '../assets/Swift.png';
import net from '../assets/net.png';
import reactImage from '../assets/react.png';
import sql from '../assets/sql.png';


const Experience = () => {
    const techs = [
        {
            id:1,
            src: java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id:2,
            src: spring,
            title: 'SpringBoot',
            style: 'shadow-green-500'
        },
        {
            id:3,
            src: swift,
            title: 'Swift',
            style: 'shadow-orange-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: sql,
            title: 'SQL',
            style: 'shadow-sky-500'
        },
        {
            id:6,
            src: net,
            title: '.NET',
            style: 'shadow-purple-500'
        },
        {
            id:7,
            src: kafka,
            title: 'Kafka',
            style: 'shadow-yellow-400'
        },
        {
            id:8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
       
        {
            id:9,
            src: python,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        
        
        
        
        
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with most</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'> 
                
                {
                    techs.map(({id, src, title, style})=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>
                            {title}
                        </p>
                    </div>

                    ))
                }
                
            </div>
        </div>

    </div>
  )
}

export default Experience