import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home'
import ArrowFunctions from './ArrowFunctions'
import ArrayMethods from './ArrayMethods'
import Variable from './Variable'
import Props from './Props'
import Destructuring from './Destructuring'
import SpreadOperator from './SpreadOperator'
import Test from './Test'
import Events from './Events'
import ConditionalRendering from './ConditionalRendering'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import LocalStorages from './LocalStorages'
import View from './View'
import Edit from './Edit'
import Task from './Task'
import Employeedetail from './Employeedetail'
import Edit1 from './Edit1'
import Calculator from './Calculator'
const NotFound = () => {
  return(
    <div>
      <h1>Error 404</h1>
      <p>The page does not exist</p>
    </div>
  )
}
export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}  />        
        <Route exact path='/Arrow' element={<ArrowFunctions/>}/>
        <Route exact path='/Array' element={<ArrayMethods/>}/>
        <Route exact path='/Variables' element={<Variable/>}/>
        <Route exact path='/props' element={<Props/>}/>
        <Route exact path='/Destructuring' element={<Destructuring/>}/>
        <Route exact path='/spreadoperator' element={<SpreadOperator/>}/>
        <Route exact path='/test' element={<Test/>}/>
        <Route exact path='/events' element={<Events/>}/>
        <Route exact path='/conditional' element={<ConditionalRendering/>}/>
        <Route exact path='/Usestate' element={<Usestate/>}/>
        <Route exact path='/Useeffect' element={<Useeffect/>}/>
        <Route exact path='/LocalStorage' element={<LocalStorages/>}/>
        <Route exact path='/View' element={<View/>}/>
        <Route exact path='/Edit/:item' element={<Edit/>}/>
        <Route exact path='/Task' element={<Task/>}/>
        <Route exact path='/Employee' element={<Employeedetail/>}/>
        <Route exact path='/Edit1/:item' element={<Edit1/>}/>
        <Route exact path='/Calculator' element={<Calculator/>}/>


        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
