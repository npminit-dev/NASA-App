import { useState, useEffect } from "react";
import { format, sub } from 'date-fns'

export default function useApods(quantity: number) {
  const [apods, setApods] = useState<ApodData|ApodData[]|undefined>();

  useEffect(() => {
    async function getApods(quantity: number) { 
      let startdate = format(sub(new Date(Date.now()), { days: quantity + 1 }), 'yyyy-MM-dd')
      let enddate = format(sub(new Date(Date.now()), { days: 1 }), 'yyyy-MM-dd')
      console.log(startdate)
      fetch(quantity <= 1 ? 
        'https://api.nasa.gov/planetary/apod?api_key=n13ulodf7NargZ8SLNy8eie5Cttn40a1tvW01j6C' : 
        `https://api.nasa.gov/planetary/apod?api_key=n13ulodf7NargZ8SLNy8eie5Cttn40a1tvW01j6C&start_date=${startdate}&end_date=${enddate}`
      )
      .then(res => res.json())
      .then(res => setApods(res))
      .catch(err => {
        console.log(err)
        setApods(undefined)
      })
    }

    getApods(quantity);

  }, [])

  return apods
}

export type ApodData = {
  copyright: string,
  date?: string,
  explanation?: string,
  hdurl?: string,
  media_type?: string,
  service_version?: string,
  title: string,
  url: string,
}

/**
 {
    "copyright": "Michael Seeley",
    "date": "2023-08-31",
    "explanation": "Not the James Webb Space Telescope's latest view of a distant galactic nebula, this illuminated cloud of gas and dust dazzled early morning spacecoast skygazers on August 26. The snapshot was taken about 2 minutes after the launch of of a Falcon 9 rocket on the SpaceX Crew-7 mission, the seventh commercial crew rotation mission for the International Space Station. It captures drifting plumes and exhaust from the separated first and second stage illuminated against the still dark skies. Near the center of the image, within the ragged blueish ring, are two bright points of light. The lower one is the second stage of the rocket carrying 4 humans to space in a Crew Dragon spacecraft. The bright point above is the Falcon 9 first stage booster orienting itself for the trip back to Landing Zone-1 at Cape Canaveral, planet Earth.",
    "hdurl": "https://apod.nasa.gov/apod/image/2308/Crew_7_Nebula_Seeley-1.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Crew-7 Nebula",
    "url": "https://apod.nasa.gov/apod/image/2308/Crew_7_Nebula_Seeley-1_1024.jpg"
}
 */