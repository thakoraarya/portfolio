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

            <LinkNMemoji/>
        </>
    )
}
export default DivOne;
