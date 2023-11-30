import React from 'react'


const data = {
  sections: [
    {
      name: 'PRE NÁVŠTEVNÍKOV',
      body: <>
        <p>Predaj vstupeniek na mieste je dostupný vždy 45 minút pred predstavením.</p>
        <p>Najbližšie zastávky MHD:</p>
        <ul>
          <li>Dom Umenia</li>
          <li>Krajský súd</li>
          <li>Alžbetina - Rektorát</li>
        </ul>
      </>
    },
    {
      name: 'SLEDUJTE NÁS',
      body: <>
        <a href="#">
          Facebook
        </a>
        <a href="#">
          Instagram
        </a>
        <a href="#">
          Youtube
        </a>
      </>
    },
    {
      name: 'KONTAKTUJTE NÁS',
      body: <>
        <a href="mailto:fuga.kck@gmail.com">fuga.kck@gmail.com</a>
      </>
    },
    {
      name: 'ADRESA',
      body: <>
        <address>
          FUGA - kultúrne centrum krestanov<br/>
          Moyzesova 62<br/>
          Košice<br/>
          040 01
        </address>
      </>
    }
  ]
}
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {data.sections.map(section => (
            <div key={section.name}>
              <h5 className="text-sm font-medium text-white">{section.name}</h5>

              <div className="flex flex-col items-start mt-4 space-y-4 text-gray-500">
                {section.body}
              </div>
            </div>
          ))}
          {/*<div>*/}
          {/*  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Product</h3>*/}

          {/*  <div className="flex flex-col items-start mt-4 space-y-4">*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Overview</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Features</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Solutions</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Tutorials</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Pricing</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Releases</a>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</h3>*/}

          {/*  <div className="flex flex-col items-start mt-4 space-y-4">*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">About*/}
          {/*      us</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Careers</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Press</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">News</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Media*/}
          {/*      kit</a>*/}
          {/*    <a href="#"*/}
          {/*       className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600">Contact</a>*/}
          {/*  </div>*/}
          {/*</div>*/}


        </div>

        <div className="flex flex-col items-center justify-center pt-16 pb-4">
          <p className="mt-4 text-sm sm:mt-0 text-gray-500">©</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <a href="#_" className="mr-5 font-medium text-gray-500 hover:text-red-600">GDPR</a>
          <p className="text-gray-700">|</p>
          <a href="#_" className="ml-5 font-medium text-gray-500 hover:text-red-600">Všeobecné obchodné podmienky</a>
        </div>
      </div>
    </footer>
  )
}