import './App.css';
import Header from './components/header';
import GetPosts from './components/showPost';
import {  Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
      <div id="App">
        <Header/>
        <Routes>
            <Route path='/Home' element = {<GetPosts/>} />            
            <Route path='/' element={<GetPosts/>} />      
            <Route path='/loai/:id/:pagenum?'element={<GetPosts/>} />
        </Routes>
        
      </div>
    
  );
}
export default App;
