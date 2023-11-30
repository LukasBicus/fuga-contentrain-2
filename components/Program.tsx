import Image from "next/image";
import React from 'react'

const data = [
  {
    id: 1,
    image: {
      src: 'https://attendio-library.attendio.online/5f6c59a6b32df40dd71ea8a9970cbdcb4f0294f0-poster-medium.jpeg',
      alt: 'fuga-image',
      width: 135,
      height: 202,
    },
    event: {
      name: 'Monika Ližbetin - Vianočný zázrak',
      dateLabel: 'sobota • 16. 12. 2023 • 19:00',
      tagline: 'Nádherný vianočný koncert'
    },
    venue: {
      name: 'FUGA - kultúrne centrum kresťanov'
    }
  },
  {
    id: 2,
    image: {
      src: 'https://attendio-library.attendio.online/5f6c59a6b32df40dd71ea8a9970cbdcb4f0294f0-poster-medium.jpeg',
      alt: 'fuga-image',
      width: 135,
      height: 202,
    },
    event: {
      name: 'Monika Ližbetin - Vianočný zázrak',
      dateLabel: 'nedela • 17. 12. 2023 • 19:00',
      tagline: 'Výnimočný Vianočný koncert'
    },
    venue: {
      name: 'FUGA - kultúrne centrum kresťanov'
    }
  },
  {
    id: 3,
    image: {
      src: 'https://attendio-library.attendio.online/895bfffa835a908478921eca4108dc28dcb5d3f5-poster-medium.jpg',
      alt: 'fuga-image',
      width: 135,
      height: 202,
    },
    event: {
      name: 'ŠTEFAN ŠTEC a FAJTA - Vianoce 2023',
      dateLabel: 'nedela • 17. 12. 2023 • 19:00',
      tagline: 'Nádherný vianočný koncert'
    },
    venue: {
      name: 'FUGA - kultúrne centrum kresťanov'
    }
  },
  {
    id: 4,
    image: {
      src: 'https://attendio-library.attendio.online/5f6c59a6b32df40dd71ea8a9970cbdcb4f0294f0-poster-medium.jpeg',
      alt: 'fuga-image',
      width: 135,
      height: 202,
    },
    event: {
      name: 'Monika Ližbetin - Vianočný zázrak',
      dateLabel: 'pondelok • 18. 12. 2023 • 19:00',
      tagline: 'Nádherný vianočný koncert'
    },
    venue: {
      name: 'FUGA - kultúrne centrum kresťanov'
    }
  }
]

export const Program: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <h2 className="py-6 max-w-lg text-4xl">
          Program
        </h2>
        {data.map(item => (
          <div key={item.id}
               className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src={item.image.src}
                  alt={item.image.alt}
                  width={135}
                  height={202}
                />
              </div>
              <div className="p-8">
                <h5 className="uppercase tracking-wide text-sm">{item.event.name}</h5>
                <p className="mt-2 text-gray-500">{item.event.dateLabel}</p>
                <p className="mt-2 text-gray-500">{item.venue.name}</p>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">{item.event.tagline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}