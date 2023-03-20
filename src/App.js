import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
function App() {
  
  return (
    
    <div className="min-h-screen flex flex-col">
    <Header/>
    <Main className="flex-grow"/>
    <Footer/>
  
    </div>


  );
}

export default App;
