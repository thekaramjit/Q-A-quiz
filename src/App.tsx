import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionComp } from './Components/Question Container/QuestionComp';

function App() {
  return (
    <div className='container boss'>
      <QuestionComp/>
    </div>
  );
}

export default App;
