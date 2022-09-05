import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import NavBAr from './components/NavBAr';

function App() {
  return (
    <div className="App">
      <NavBAr />
      <Routes>
        <Route path='/' element={ <TodoContainer /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='*' element={ <NotMatch /> } />
      </Routes>
      
    </div>
  );
}

export default App;
