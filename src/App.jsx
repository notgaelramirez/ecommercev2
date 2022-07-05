import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from './components/Purchases/PurchasesScreen'
import HeaderScreen from './components/Shared/HeaderScreen'

function App() {

  return (
    <div className="App">
      <HeaderScreen />

      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen />} />
       
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes isLogged={true}/>}>
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/purchases' element={<PurchasesScreen />} />          
        </Route>
      </Routes>
    </div>
  )
}

export default App
