import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Setup from './pages/setup'
import Interview from './pages/interview'
import Result from './pages/result'
import Landing from './pages/landing'

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Landing/>}/>  
  <Route path="/register" element={<Register />}/>  
  <Route path="/login" element={<Login />}/>  
  <Route path="/setup" element={<Setup />}/>  
  <Route path="/interview" element={<Interview/>}/>  
  <Route path="/result" element={<Result/>}/>  
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
