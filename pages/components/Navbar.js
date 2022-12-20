import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <>
            <nav className=' my-3 py-7 px-5 flex justify-between mx-5 rounded-lg  bg-emerald-300'>
                <h1 className='text-5xl'>Title</h1>
                <ul className='flex items-center'>
                    <li className=' list-none'>
                        <BsFillMoonStarsFill className='cursor-pointer text-2xl mx-4' />
                    </li>
                    <li className=' list-none'>
                        <a href='#' className=' bg-cyan-400  px-4 rounded-md py-2'>Resume</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar