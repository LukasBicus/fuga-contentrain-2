import Image from "next/image";
import React from 'react'

const data = {
  date: '27. 11. 2023',
  title: 'ENIESA krstí album EFARMOSA',
  description: 'Výnimočný koncert Sandry Urbančíkovej - ENIESY',
  image: {
    src: '/krst.jpeg',
    alt: 'krst'
  }
}
export const Hero: React.FC = () => {
  return (
    <div className="bg-black  relative flex items-center justify-center overflow-hidden w-full text-white">
      <div
        className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <h5 className="flex text-xl uppercase text-g1">{data.date}</h5>
              <h2
                className="mb-6 max-w-lg leading-snug tracking-tight text-g1 text-4xl sm:leading-snug">
                {data.title}
              </h2>
              <p className="text-base text-gray-500">{data.description}</p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a href="/"
                   className="mb-3 inline-flex h-12 w-full items-center justify-center rounded px-6 tracking-wide text-white shadow-md transition hover:bg-red-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto border border-white">
                  Vstupenky</a>
              </div>
            </div>


          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div
              className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={900}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
        About Us
      </div>
    </div>
  )
}