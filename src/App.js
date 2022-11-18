
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react'
import SideBar from './components/SideBar';
import shallow from 'zustand/shallow'
import { useNav } from './stores/user.store';


function App() {
  const [ open ] = useNav((state)=>([ state.open]), shallow );
  return (
    <Suspense >
      <BrowserRouter>
       {/* <Samples /> */}
       <main className='w-Screen flex'>
          <SideBar />
          <section   className={`${ open ? "ml-72" : "ml-32" } duration-500`}>
             content: 
          </section> 
       </main>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;