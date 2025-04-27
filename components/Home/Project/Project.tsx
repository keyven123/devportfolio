import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]' id="projects">
    <SectionHeading>My Projects</SectionHeading>
    <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
      {projectData.map((project, i) => {
        return (
          <div 
            key={project.id} 
            className='relative group bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden'
            data-aos="fade-up" 
            data-aos-delay={`${i * 150}`} 
            data-aos-anchor-placement="top-center"
          >
            <Link href={project.url} target="_blank">
              <Image 
                src={project.image} 
                alt="project" 
                width={300} 
                height={200} 
                className='w-full object-cover rounded-lg'
              />
            </Link>

            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white p-4 text-center'>
                <div className='absolute top-4 right-4'>
                    <button key={i} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                        {project.type}
                    </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-6 h-6 text-cyan-400 hover:text-cyan-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-9 9m5-5H6m0 0v6m0-6h6" />
                    </svg>
                    </Link>
                </div>
                <p className="text-sm mb-4">{project.description}</p> {/* <-- NEW */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {project.techs.map((tech, idx) => (
                    <button 
                        key={idx} 
                        className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full text-xs"
                    >
                        {tech}
                    </button>
                    ))}
                </div>
            </div>

          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Project