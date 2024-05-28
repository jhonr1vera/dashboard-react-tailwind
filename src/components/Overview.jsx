import React from 'react'
import data from '../../data/data.json'
import { OverviewCard } from './OverviewCard'
import { OverviewTodayCard } from './OverviewTodayCard'

const convertNumber = (number) =>{
  if (number >= 10000){
    return `${number/1000}k`
  } else {
    return number
  }
}

export const Overview = () => {



  return (
    <section className='max-w-[1440px] flex flex-wrap mx-auto absolute top-[190px] left-0 right-0'>
      {
        data.overview.map(object => ( <OverviewCard  
          key={object.id} 
          user={object.user}
          network={object.network} 
          audienceType={object.audienceType} 
          audience={convertNumber(object.audience)} 
          isUp={object.isUp}
          today={object.today} 
          />) 
        )
      }
    </section>
  )
}

export const OverviewToday = () => {
  return (
    <section className='mt-[970px] md:mt-[500px] content-center desktop:mt-[230px] desktop:w-[100%] mx-auto ultra-desktop:w-[75%] mb-14 '>
      <h1 className=" text-Dark-Grayish-Blue font-bold text-2xl mb-10 dark:text-white px-6">Overview - Today</h1>
      <div className='flex flex-wrap'>
      {
      data.overviewToday.map(object => (<OverviewTodayCard key={object.id}
      network={object.network}
      statsType={object.statsType}
      stats={convertNumber(object.stats)}
      percentage={object.percentage}
      isUp={object.isUp}
      />
    )
    )
      }
      </div>
      </section>
    
  )
}
