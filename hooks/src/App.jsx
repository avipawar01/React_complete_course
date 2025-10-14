import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/useState';
import DataFetcher from './components/useEffect';
import PreviousValue from './components/useRef';
import Counter1 from './components/useReducer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/use-state' element={<Counter title={"Counter"} />} /> 
          <Route path='/use-effect' element={<DataFetcher />} /> 
          <Route path='/use-ref' element={<PreviousValue />} /> 
          <Route path='/use-reducer' element={<Counter1 />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
