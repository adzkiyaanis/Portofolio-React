import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#BCB8A5] flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/c884c8a3-87b3-4913-9b31-ae66d854f226" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#8B6E4B]">Contact</p>
                <p className="py-4">// Please contact me if there is anything you want to ask</p>
            </div>
            <input className='bg-[#F4ECE4] p-2' type="text" placeholder="Name" name="name" />
            <input className='my-4 p-2 bg-[#F4ECE4]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#F4ECE4] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#8B6E4B] hover:border-[#8B6E4B] px-4 py-3 my-8 mx-auto flex items-center duration-300'>Reach Me!</button>
        </form>
    </div>
  )
}

export default Contact