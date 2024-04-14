
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PageSecond, Pagefirst, Signup, Goals, Workout, Login, Calendar} from './components'


function App() {
 

  return (
    <div>
    { <Routes>
      <Route path='/' element={<Pagefirst/>}/>
      <Route path='/page2' element={<PageSecond/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/workout' element={<Workout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      
    </Routes>}
    </div>
  )
}

export default App
