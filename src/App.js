
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Suspense >
      <BrowserRouter>
        <div className="grid items-center text-green-800">Your first react project</div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
