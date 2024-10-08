import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-effect'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-start justify-center absolute top-0 left-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden z-0">
                        <img 
                            src="/profile_pic3.jpeg" 
                            alt="Profile Image" 
                            className="w-full h-full object-cover object-center rounded-full"
                        />
                    </div>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Made with Next.js
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Dmytro Mai&apos;s portfolio'/>
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        A CS student at Cambridge, driven by a passion for solving real-world problems through technology.
                    </p>

                    <a href="#about">
                        <MagicButton 
                        title='Show my work'
                        icon={<FaLocationArrow />}
                        position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero