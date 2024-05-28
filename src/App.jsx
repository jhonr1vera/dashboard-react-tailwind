// import { useState } from 'react' //hook
import { Header } from "./components/Header"
import { Overview } from "./components/Overview"
import { OverviewToday } from "./components/Overview"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header></Header>
      <Overview></Overview>
      <OverviewToday></OverviewToday>
      <Footer></Footer>
      
    </>
  )
}

export default App
