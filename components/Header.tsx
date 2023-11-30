import Image from "next/image";
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col p-6 mx-auto md:flex-row items-center">
        <a className="flex items-center mb-4 text-gray-900 title-font md:mb-0">
          <Image
            src="/fuga-logo.png"
            alt="Fuga Logo"
            width={175}
            height={120}
            priority
          />
        </a>
        <nav className="flex items-center justify-center text-base md:ml-auto h-full">
          <a href="#" className="mr-5 hover:text-red-600">Home</a>
          <a href="#" className="mr-5 hover:text-red-600">About</a>
          <a href="#" className="hover:text-red-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}