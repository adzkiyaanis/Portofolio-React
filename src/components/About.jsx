import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#BCB8A5] text-[#8B6E4B]-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] px-4">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#8B6E4B]-600">About</p>
                </div>
            </div>
            <div className="max-w-[800px] px-4">
                <p className="justify-end">
                Hello!, My Name is <span className="font-bold">Adzkiyatun Nisa Al Haura </span> 
                a student studying Informatics at <a className="underline" href="https://www.amikompurwokerto.ac.id/">Amikom Purwokerto</a>.
                I have a genuine passion for technology and a strong interest in web development.
                <br></br>
                <br></br>
                I enjoy working in web development and have a good understanding of responsive design and best development practices. 
                I constantly expand my skills through self-learning and staying up-to-date with the latest advancements in the industry.
                <br></br>
                <br></br>
                I am committed to delivering creative and effective web development solutions 
                by combining my technical expertise with a deep understanding of user experience. My goal is to create exceptional web applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About