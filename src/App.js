import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { TodoContextProvider } from './context/TodoContext';


import './styles/styles_base.css';


const App = () => {
  return (
    <TodoContextProvider>
      <div className="width-100percent height-100vh bg-white flex-column-center">
        <Header />
        <Body />
        <Footer />
      </div>
    </TodoContextProvider>
  )
}

export default App;
