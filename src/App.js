import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import PagesHome from './views/PagesHome/PagesHome';
import Header from './components/Header/Header';
import PagesAgregar from './views/PagesAgregar/PagesAgregar';
import PagesModificar from './views/PagesModificar/PagesModificar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={PagesHome}/>
        <Route path='/agregar' Component={PagesAgregar} />
        <Route path='/modificar' Component={PagesModificar} />
        <Route path='/:idtask' Component={}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
