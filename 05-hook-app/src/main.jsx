import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHook } from './03-example/MultipleCustomHook'

//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp' */

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <MultipleCustomHook />
//  </React.StrictMode>
)
