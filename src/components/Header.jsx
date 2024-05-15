import { useState, useEffect } from "react"
export const Header = () => {

  const [darkMode, setDarkmode] = useState(false) //this state is fake initializating the page

  const handleClick = () => {
    setDarkmode(!darkMode)
  }

  useEffect(()=> {
    if(darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]) // this listen a state (in this case is darkMode), if this state change it will execute the function

  return (
    <header className="bg-Very-Pale-Blue h-[175px] rounded-b-[20px] pt-4 px-2 dark:bg-Dark-Desaturated-Blue">
    
    <h1 className=" text-Very_Dark_Blue text-2xl font-bold dark:text-White ">
    Social Media Dashboard
    </h1>
    <p className="mb-4 text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue">Total Followers: 23,004</p>
    
    <hr className="bg-black mb-4" />

    <div className="flex justify-between">
      
        <p className="text-Dark-Grayish-Blue font-bold  dark:text-Desaturated-Blue">Dark Mode</p>
        <label htmlFor="darkmode" className=" bg-Toggle-light  w-12 rounded-full h-6 cursor-pointer p-[3px] relative overflow-hidden">
          <input onClick={handleClick} id="darkmode" className="peer sr-only" type="checkbox"/>

          <div className="left-0 w-full h-full peer-checked:bg-Toggle-Dark absolute top-0 "></div>

          <div className="w-[18px] h-[18px] rounded-full bg-Light-Grayish-Blue translate-x-[24px] peer-checked:bg-Very-Dark-Blue  peer-checked:translate-x-[0] transition-all"></div>
        </label>
    
    </div>
    </header>
  )
}

// rafc
