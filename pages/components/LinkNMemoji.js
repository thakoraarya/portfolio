import React from 'react'
import { BsYoutube, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'


const LinkNMemoji = () => {

  return (
    <>
      <div className='m-10 text-gray-600 text-3xl flex justify-center gap-10'>
        <BsYoutube />
        <BsGithub />
        <BsLinkedin />
        <BsTwitter />
      </div>
      <div className='relative w-80 mt-20 mx-auto'>
        <img src="myMemoji.png"  alt="my memoji"/>
      </div>
    </>
  )
}

export default LinkNMemoji