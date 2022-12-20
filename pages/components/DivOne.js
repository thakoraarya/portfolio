import React from 'react'
import LinkNMemoji from './LinkNMemoji'
const DivOne = () => {
    return (
        <>
            <div className='mx-2'>
                <h1 className='text-5xl text-center text-rose-500 '>
                    Aarya Thakor
                </h1>
                <br />
                <p className=' font-sans text-lg text-gray-700 text-center'>
                    Student/Designer
                    <br />  also
                    <br />
                    developer/ProjectManger
                </p>
                <br />
                <p className=' font-sans text-sm text-justify text-zinc-800 '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora iste eum, repellendus tenetur hic quo molestias facere ex laborum nisi sed porro quam saepe ab. Maiores quidem quasi est?
                </p>
            </div>
            {/* social media links and my memoji  */}
            <LinkNMemoji />

            <section>
                <h1 className='text-center text-3xl my-5 mx-auto font-sans'>What I've done?</h1>
                <p className='text-justify text-sm font-typewriter'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis soluta ab, quaerat facere tempore magni eaque vero quis nemo sint officia natus ipsa facilis repellendus saepe, eos temporibus nostrum aliquid dolores! Vel!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis soluta ab, quaerat facere tempore magni eaque vero quis nemo sint officia natus ipsa facilis repellendus saepe, eos temporibus nostrum aliquid dolores! Vel!
                     </p>
            </section>
        </>
    )
}
export default DivOne;
