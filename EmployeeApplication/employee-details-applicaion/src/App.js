import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreateEmployee from './components/CreateEmployee'
import EmployeeList from './components/EmployeeList'
import {BrowserRouter , Routes,Route,Navigate} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-details" element={<EmployeeList />} />
          <Route path="/create-new-employee" element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
