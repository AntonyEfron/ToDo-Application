import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import HomePage from './scenes/homePage'
import AddingPage from './scenes/addingPage'
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/addTask' element={<AddingPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
