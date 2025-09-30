import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<ItemList />} />
          <Route path='/items/:id' element={<ItemDetail />}/>
        </Routes>
    </div>
  )
}

export default App
