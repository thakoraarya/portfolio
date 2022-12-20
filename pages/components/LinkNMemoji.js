import React from 'react'
import { BsYoutube, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Image from 'next/image'
// import aarya from "/Users/thakoraarya/Documents/clg codes PU/MERN/rectjs/portfolio/pages/myMemoji.jpeg"
import aarya from '/Users/thakoraarya/Documents/clg codes PU/MERN/rectjs/portfolio/public/myMemoji.jpeg'


const LinkNMemoji = () => {

  return (
    <>
      <div className='m-10 text-gray-600 text-3xl flex justify-center gap-10'>
        <BsYoutube />
        <BsGithub />
        <BsLinkedin />
        <BsTwitter />
      </div>
      <div className='relative bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-20 mx-auto'>
        {/* <img src="myMemoji.png" alt="my memoji" layout='fill' object-fit="cover"/> */}
     <Image src="/myMemoji.png" width="64" height="64" />
      </div>
    </>
  )
}

export default LinkNMemoji