import React from 'react';
import {Route, Routes} from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
function App() {
  return (
    <div>
      <button className='btn btn-outline'>click</button>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
        <Route path='/note/:id' element={<NoteDetailPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App



