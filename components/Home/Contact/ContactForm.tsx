import React from "react"

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">Let&apos;s work together!</h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">If you have any questions or project inquiries, feel free to reach out using the contact details provided. I&apos;m always open to discussing new ideas, collaborations, or opportunities to help bring your vision to life.</p>
    {/* <form className='mt-8 block w-full overflow-hidden'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <input type="text" placeholder='First name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-6 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
        <input type="text" placeholder='Last name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-6 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
      </div>
      <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
        <input type="email" placeholder='Email address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-6 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
        <input type="text" placeholder='Phone number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-6 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
      </div>
      <div>
        <select className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none'>
          <option value="" disabled selected>Select an option</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Fullstack Development</option>
        </select>
      </div>
      <textarea rows={7} placeholder='Message' className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md boarder-[1.5px] border-gray-200 border-opacity-15 outline-none'></textarea>
      <div className='mt-4'>
        <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full '>Send Message</button>
      </div>  
    </form> */}
    </div>
  )
}

export default ContactForm