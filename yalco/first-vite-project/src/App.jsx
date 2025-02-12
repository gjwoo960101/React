import { useState } from 'react'
import './App.css'
import Child from './Child'
import { Classcomp, FunctionComp,ArrowFunctionComp } from './Components'

const Hello = () => {
 return (
    <h1>Hello World</h1>
 )
}


function App() {
  return (
    <>
      <Hello />
      <h1>Hello</h1>
      <Child/>
      <Classcomp/>
      <FunctionComp/>
      <ArrowFunctionComp/>
    </>
  )
}

export default App
