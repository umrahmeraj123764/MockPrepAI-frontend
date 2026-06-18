import React, { useState ,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Interview = () => {

    const [answer,setAnswer]=useState('')
    const [currentindex,setCurrentindex]=useState(0)
    const {token}=useContext(AuthContext)
    const navigate=useNavigate()
        const session=JSON.parse(localStorage.getItem('session'))
        const question=session.questions 
        const Currentquestion = question[currentindex]
        const [allfeedback,setAllfeedback]=useState([])
        const [loading, setLoading] = useState(false);

    const handleSubmit=async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/interview/response`,{
            sessionId:session._id,
            question:Currentquestion,answer
    },{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
    })
    const newFeedback=[...allfeedback,{
        question:Currentquestion,
        answer:answer,
        feedback:response.data.feedback,
        score:response.data.score
    }]
    setAllfeedback(newFeedback)
    if(currentindex+1>=question.length){
        localStorage.setItem('result',JSON.stringify(newFeedback))
    navigate('/result')
}
else {
    setCurrentindex(currentindex+1)
    setAnswer('')
}}
catch(error){
    console.log(error)
}
finally{
    setLoading(false)
}
}
return (
    <div>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col gap-6" disabled={loading}>    
       
         <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
        Interview Progress
      </span>
      <span className="text-sm font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
        Question {currentindex + 1} of {question.length}
      </span>
    
     <div className="bg-gray-50 rounded-xl p-5 border border-gray-200/60">
        <p className="text-lg font-medium text-gray-800 leading-relaxed">Question {currentindex+1} of {question.length}</p> 
        <p>{Currentquestion}</p>
        </div>

         <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        Your Answer
      </label>
        <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-y disabled:bg-gray-50 disabled:text-gray-400" />
        <button type='submit'className="w-full mt-2  bg-indigo-500 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed" disabled={loading} >{loading?( <>
          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>AI is submitting your response...</span>
        </> ):('Submit')}
        </button>
     </div>  
    </form>
    </div>
    </div>
    
)
}

export default Interview