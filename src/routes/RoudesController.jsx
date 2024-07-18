import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from '../routes/home/Home'
import SinglePage from '../routes/single-page/SinglePage'
import Auth from '../routes/auth/Auth'
import NotFound from '../routes/not-found/NotFound'
import Login from '../routes/auth/login/Login'
import Register from '../routes/auth/register/Register'
import Products from '../routes/products/Products'
import Category from './category/Category'
import Cart from './cart/Cart'

const RoudesController = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  

  // useEffect(() => {
  //   if(localStorage.getItem("token")){
  //     navigate("/")
  //   }
  // }, [])

  return (
    <Routes>
      <Route path='' element={<Home />} />
      
      <Route  path='single-page/:id' element={<SinglePage />} />

      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='' element={<Navigate to='login' />} />
        <Route path='login' element={<Login />} />
      </Route>

      <Route path='cart' element={ token ? <Cart /> : <Navigate to='/auth' />}/>

      <Route path='products' element={ token ? <Products /> : <Navigate to='/auth' />}/>
        
      <Route path='category/:title' element={ token ? <Category /> : <Navigate to='/auth' />}/>

      <Route path='not-found' element={<NotFound />} />
      <Route path='*' element={<Navigate to='not-found' />} />
    </Routes>
  )
}

export default RoudesController
