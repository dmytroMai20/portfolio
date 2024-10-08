import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                <span className='text-purple'>Connect</span> with me
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>I&apos;m a passionate software engineer eager to tackle new challenges and bring innovative solutions to life. Whether you&apos;re looking to discuss a project, explore collaboration opportunities, or just connect, I&apos;d love to hear from you.</p>
            <a href="mailto:dmytro.mai20@gmail.com">
                <MagicButton title='Let&apos;s get in touch' 
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Dmytro Mai</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={profile.link}>
                        <img src={profile.img} alt={profile.id.toString()}
                        width={20} height={20}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default footer