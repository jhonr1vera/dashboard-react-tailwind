import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import upIcon from '../assets/images/icon-up.svg'
import downIcon from '../assets/images/icon-down.svg'

const networkLogos = {
  Facebook : facebookLogo,
  Twitter: twitterLogo,
  YouTube: youtubeLogo,
  Instagram: instagramLogo,
  
}

const networkColors = {
    Facebook : 'bg-Facebook',
    Twitter: 'bg-Twitter',
    YouTube: 'bg-YouTube',
    Instagram: 'bg-Instagram',
}

const stateTextColor = {
  true: 'text-Lime-Green',
  false: 'text-Bright-Red',
}

export const OverviewCard = ({user, audienceType, audience, today, network, isUp}) => {
  return ( 
    <article className=" bg-Light-Grayish-Blue h-[230px] w-[330px] rounded-[7px] mb-4 text-center dark:bg-Dark-Desaturated-Blue overflow-hidden mx-auto">
      <div className={`top-0 h-[5px] ${networkColors[network]}`}></div>
      <div className='flex items-center place-content-center gap-2 mb-5 mt-5'>
      <img className='' src={networkLogos[network]} alt={`logo ${network}`} />
      <p className='text-Dark-Grayish-Blue text-sm font-bold dark:text-Desaturated-Blue'>{user}</p>
      </div>
      <h1 className='text-6xl  dark:text-white font-bold '>{audience}</h1>
      <p className='text-Dark-Grayish-Blue uppercase tracking-widest mb-7 dark:text-Desaturated-Blue'>{audienceType}</p>
      <div className='flex items-center place-content-center gap-2' >
      <img src={isUp ? upIcon : downIcon} alt="" />
      <p className={`${stateTextColor[isUp]} font-bold text-sm`}>{today} Today</p>
      </div>
    </article>
  )
}



