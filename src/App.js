import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { mystore } from './Redux/mystore'
import { Provider } from 'react-redux'


export default function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header />
        <Outlet />
      </Provider>  
    
    </>
  )
}
