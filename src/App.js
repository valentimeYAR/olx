import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Main state={props.state.categories} shops={props.state.shops}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
