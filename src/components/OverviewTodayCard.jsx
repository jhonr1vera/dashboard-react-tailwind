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

  export const OverviewTodayCard = ({network, statsType, stats, percentage, isUp}) => {
    return (
      <article className='bg-Light-Grayish-Blue rounded-[7px] mb-4 h-[120px] w-[330px] mx-auto p-4 dark:bg-Dark-Desaturated-Blue desktop:w-[330px]'>
          <div className='flex'>
          <p className='text-sm font-bold text-Dark-Grayish-Blue flex-auto dark:text-Desaturated-Blue'>{statsType}</p>
          <img src={networkLogos[network]} className='' alt="" />
          </div>
          <div className='flex mt-7'>
            <p className='font-bold text-3xl flex-auto dark:text-white'>{stats}</p>
            <div className='gap-1 items-center flex'>
                <img src={`${isUp ? upIcon : downIcon}`}
                alt="" />
                <p className={`${ isUp ? "text-Lime-Green" : "text-Bright-Red" } font-bold text-sm/6`}>{percentage}%</p>
            </div>
          </div>
      </article>
    )
  }
  