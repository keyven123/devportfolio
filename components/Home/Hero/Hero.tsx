import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715]' id="home">
        <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 item-center gap-12'>
                {/* Content */}
                <div>
                    {/* Sub heading */}
                    <h1 data-aos="fade-left" className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>I am {BaseInfo.name}</h1>
                    {/* title */}
                    <h1 data-aos="fade-right" data-aos-delay="100" className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>{BaseInfo.position}</h1>
                    {/* Description */}
                    <p data-aos="fade-left" data-aos-delay="200" className='mt-6 text-sm md:text-base text-white text-opacity-60'>
                        {BaseInfo.description}
                    </p>
                    <p data-aos="fade-left" data-aos-delay="200" className='hidden md:block mt-6 text-sm md:text-base text-white text-opacity-60'>
                        {BaseInfo.description2}
                    </p>
                    <button data-aos="zoom-in" data-aos-delay="300" className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
                        <span>
                            <a href="https://drive.google.com/file/d/1IxTxvgkKTXEZA0oc4DZjnDcigeihtrwJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                Download CV
                            </a>
                        </span>
                    </button>
                </div>
                
                {/* Image */}
                <div data-aos="zoom-in" data-aos-delay="400" className='mx-auto hidden lg:block rounded-[3rem] boarded-[3.5px] border-blue-950 overflow-x-hidden'>
                    <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500} style={{ height: 'auto' }} priority />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero