import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext,useState } from 'react'
import CreatableSelect from "react-select/creatable"

const Setup = () => {
    const [role,setRole]=useState('')
    const [type,setType]=useState('')
    const navigate=useNavigate()
     const roleOptions=[
        {value:"frontend",label:"Frontend"},
        {value:"backend",label:"Backend"},
        {value:"fullstack",label:"FullStack"},
        {value:"devops",label:"DevOps"},
    ]
    const typeOptions=[
         {value:"technical",label:"Technical"},
          {value:"behavioral",label:"Behavioral/HR"},
    ]

     const API_BASE_URL = import.meta.env.VITE_API_URL || "https://mockprepai-backend.onrender.com";
    const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
         const token=localStorage.getItem('token')
        console.clear()
            console.log('sending token',token)
    const response=await axios.post(`${API_BASE_URL}/api/interview/start`,{
        role,type
    },
    {headers:{
        Authorization:`Bearer ${token}`
    }})
    localStorage.setItem('session',JSON.stringify(response.data))
    navigate('/interview')
}
catch(error){
    console.log(error)
}}
return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 flex flex-col gap-5 bg-white rounded-xl shadow-md border border-gray-100 space-y-5" >    
    <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
        Setup Your Interview
    </h2>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
        Job Role
    </label>
        <CreatableSelect type='text' options={roleOptions} value={roleOptions.find(option=>option.value===role)} required className="w-full border p-2 rounded  outline-indigo-300/7" isClearable isSearchable  onChange={(selected)=>setRole(selected ? selected.value:"")} / >
    
            
    <label className="block text-sm font-semibold text-gray-700 mb-1">
        Interview Type
    </label>
        <CreatableSelect type='text' options={typeOptions} value={typeOptions.find(option=>option.value===type)} required  className="w-full border p-2 rounded  outline-indigo-300/7" isClearable isSearchable   onChange={(selected)=>setType(selected ? selected.value:"")} />    
            
    
        <button type='submit' className="w-full bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition dynamic shadow-sm hover:shadow-md"
    >Start Interview</button>
        </form>
    </div>
)}
export default Setup 

