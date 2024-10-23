import './App.css'
import Drection from './components/Drection'
import Header from './components/Header'
import Hero from './components/Hero'
function App() {
  return (
    <>
    <Header/>
    <main className='mt-[150px]'>
      <Hero/>
      <Drection/>
    </main>
    </>
  )
}

export default App
