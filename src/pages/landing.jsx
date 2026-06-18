import { useNavigate,Link } from 'react-router-dom'
import {FaUserTie, FaChartLine, FaComments } from 'react-icons/fa'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-black">
      
     
      <nav className="flex justify-between items-center px-8 py-5 border-b shadow-lg bg-indigo-700 border-white">
        <h1 className="text-xl font-bold text-white">MockPrep AI</h1>
        <div className="flex gap-4">
          <button onClick={() => navigate('/login')}
            className="text-white hover:text-indigo-400 transition">
            Login
          </button>
          <button onClick={() => navigate('/register')}
            className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-lg  text-white font-semibold transition">
            Get Started
          </button>
        </div>
      </nav>
  
        


    
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <span className="bg-indigo-700 text-white text-sm px-4 py-1 rounded-full mb-6">
          Powered by Groq AI
        </span>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Ace Your Next<br />
          <span className="text-indigo-700">Tech Interview</span>
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mb-10">
          Practice with AI-generated questions tailored to your role. 
          Get instant feedback and scores on every answer.
        </p>
        <button onClick={() => navigate('/register')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition">
          Start Practicing Free
        </button>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20 max-w-5xl mx-auto">
        <div className="bg-indigo-700 p-6 rounded-2xl">
          <div className="text-3xl mb-3">
           <FaUserTie  className=' text-white' size={40} />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Role Specific</h3>
          <p className="text-white">Questions tailored for Frontend, Backend, Full Stack and more</p>
        </div>
        <div className="bg-indigo-700 p-6 rounded-2xl">
          <div className="text-3xl mb-3">
            <FaChartLine className=' text-white' size={40}/>
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Instant Feedback</h3>
          <p className="text-white">Get detailed feedback and score for every answer instantly</p>
        </div>
        <div className="bg-indigo-700 p-6 rounded-2xl">
          <div className="text-3xl mb-3">
            <FaComments className=' text-white' size={40}/>
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Track Progress</h3>
          <p className="text-white">Review past sessions and see how you improve over time</p>
        </div>
      </div>


      <footer className="bg-indigo-700 text-white mt-20">
  <div className="max-w-6xl mx-auto px-6 py-8">

    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div>
        <h2 className="text-xl font-bold">AI Mock Interviewer</h2>
        <p className="text-white text-sm">
          Practice smarter. Interview better.
        </p>
      </div>

      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-indigo-400 text-white">Home</a>
        <Link to="/login" className="hover:text-indigo-400 text-white">Login</Link>
        <Link to="/register" className="hover:text-indigo-400 text-white">Register</Link>
      </div>

    </div>

    <hr className="my-6 border-black" />

    <p className="text-center text-black text-sm">
      © 2026 AI Mock Interviewer. All rights reserved.
    </p>

  </div>
</footer>

    </div>
  )
}

export default Landing