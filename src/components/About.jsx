import React from 'react'



const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus eaque voluptas voluptates vitae aperiam ducimus distinctio aliquam eius? 
                Accusamus, eius qui. Ad odio commodi laboriosam. Praesentium ex, quam harum dolorum aspernatur modi? 
                Tenetur pariatur asperiores rerum beatae voluptas suscipit eveniet molestias, quam voluptatibus, tempore ratione? 
                Alias commodi omnis quam. Neque?

            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Vero dolores eos modi illum accusamus. Repudiandae asperiores quisquam recusandae? 
                Error eos mollitia perferendis nemo enim laudantium magni soluta iusto qui illum?

            </p>
        </div>
    </div>
  )
}

export default About