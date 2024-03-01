import React from 'react'
import  ReactDOM  from 'react-dom'
import router from './routes.js';

import { 
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const createroot = ReactDOM.createRoot(document.getElementById('root'))
console.log(createroot)

// console.log(createroot)

createroot.render(
  <RouterProvider router={router}/>
)