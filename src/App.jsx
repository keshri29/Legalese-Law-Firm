import { Routes, Route, useNavigate } from 'react-router-dom'
import DesignOne from './components/DesignOne'
import DesignTwo from './components/DesignTwo'
import DesignThree from './components/DesignThree'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://legaleselawfirm.in/images/jaipurrera.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/60 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
          Select a Design
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/designone')}
            className="px-6 py-3 rounded-full bg-white/20 text-white backdrop-blur-md
                       hover:bg-orange-500 hover:scale-105 transition-all"
          >
            Design One
          </button>

          <button
            onClick={() => navigate('/designtwo')}
            className="px-6 py-3 rounded-full bg-white/20 text-white backdrop-blur-md
                       hover:bg-orange-500 hover:scale-105 transition-all"
          >
            Design Two
          </button>

          {/* <button
            onClick={() => navigate('/designthree')}
            className="px-6 py-3 rounded-full bg-white/20 text-white backdrop-blur-md
                       hover:bg-orange-500 hover:scale-105 transition-all"
          >
            Design Three
          </button> */}
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/designone" element={<DesignOne />} />
      <Route path="/designtwo" element={<DesignTwo />} />
      <Route path="/designthree" element={<DesignThree />} />
    </Routes>
  )
}

export default App
