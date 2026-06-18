import React from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Result = () => {
    const {token}= useContext(AuthContext)
    const result=JSON.parse(localStorage.getItem('result'))
    const navigate=useNavigate()

    const averageScore=result.reduce((sum,item)=>sum+item.score,0)/result.length

return (
    <div>
<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<div className="w-full max-w-3xl flex flex-col gap-8">
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center flex flex-col items-center gap-3">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
    INTERVIEW RESULT
    </h1>
    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        Average Score
    </p>
    <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 rounded-full px-6 py-3 border border-blue-100">
        <span className="text-3xl sm:text-4xl font-black">
        {averageScore.toFixed(1)}/10
    </span>
        <span className="text-xl font-semibold text-blue-500 ml-1">/ 10</span>
      </div>
    </div>

 <div className="flex flex-col gap-6">
    {result.map((item,index)=>(
        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 relative overflow-hidden"
        >
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-lg font-bold text-gray-800">
        Question {index+1}
        </h3>
         <span className="text-sm font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Score: <span className="text-blue-600">{item.score}</span>/10
            </span>
          </div>

            <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
              Question
            </span>
        <p><b>Q:</b>{item.question}</p>
         </div>
         
          <div className="space-y-1 bg-blue-50/40 p-3.5 rounded-xl border border-blue-100/50">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Feedback
            </span>

            <div className="space-y-1 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
            Your Answer
            </span>
        <p  className="text-gray-700 text-sm whitespace-pre-line">{item.answer}</p>
        </div>

        <div className="space-y-1 bg-blue-50/40 p-3.5 rounded-xl border border-blue-100/50">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Feedback
            </span>
        <p className="text-gray-700 text-sm leading-relaxed">{item.feedback}</p>
        </div>
        </div>
        <p><b>score:</b>{item.score}/10</p>
        </div>

    ))}
    <div className="flex justify-center mt-2">
    <button onClick={()=>navigate('/setup')} className="w-full sm:w-auto  bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer text-center">Try Again
</button>
    </div>
    </div>
    </div>
    </div>
    </div>

)
}

export default Result