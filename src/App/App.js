import './App.css';
import { SideMenu } from '../SideMenu';
import { HomePage } from '../HomePage';
// import { Footer } from '../Footer';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { RegisterPage } from '../RegisterPage';
import { EpsPage } from '../EpsPage';
import { EpsProvider } from '../context/eps.context';
import { PatientProvider } from '../context/patients.context';

function App() {
  return (
    <>
    <BrowserRouter>
      <EpsProvider>
        <PatientProvider>
          <div className='row principal-container'>
            <SideMenu/>

          <Routes>

              <Route path='/' element={<HomePage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route path='/eps' element={<EpsPage/>} />

          </Routes>

          </div>

          {/* <Footer/> */}
        </PatientProvider>
      </EpsProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
