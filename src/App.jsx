import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './Auth/AuthLayout';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
