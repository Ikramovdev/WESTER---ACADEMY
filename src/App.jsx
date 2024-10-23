import './App.css'
import Drection from './components/Drection'
import Header from './components/Header'
import Hero from './components/Hero'
import Questions from './components/Questions'
function App() {
  return (
    <>
    <Header/>
    <main className='mt-[120px] lg:mt-[150px]'>
      <Hero/>
      <Drection/>
      <Questions/>
    </main>
    </>
  )
}

export default App
