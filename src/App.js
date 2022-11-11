
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react'
import Samples from './Samples';



function App() {
  return (
    <Suspense >
      <BrowserRouter>
       <Samples />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
