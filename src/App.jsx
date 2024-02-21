import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Nabvar } from './shared/Nabvar'
import { Home } from './shared/Home'
import { List } from './task/ListTask';
import { Form } from './task/Form';
import { Details } from './task/Detalles';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nabvar></Nabvar>}>
          <Route index element={<Navigate to={"/home"} replace></Navigate>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/task' element={<List></List>}></Route>
          <Route path='/addTask' element={<Form></Form>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
