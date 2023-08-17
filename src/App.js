import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PagesHome from './views/PagesHome/PagesHome';
import Header from './components/Header/Header';
import PagesAgregar from './views/PagesAdd/PagesAdd';
import PagesModificar from './views/PagesEdit/PagesEdit';
import Footer from './components/Footer/Footer';
import PagesTaskDetails from './views/PagesTaskDetails/PagesTaskDetails';
import PagesError from './views/PagesError/PagesError';
import PagesEditOnly from './views/PagesEditOnly/PagesEditOnly';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={PagesHome}/>
          <Route path='/agregar' Component={PagesAgregar} />
          <Route path='/modificar' Component={PagesModificar} />
          <Route path='/modificar/:idmod' Component={PagesEditOnly}/>
          <Route path='/:idtask' Component={PagesTaskDetails}/>
          <Route path='/*' Component={PagesError} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
