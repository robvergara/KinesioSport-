import "./App.css";
import { SideMenu } from "../SideMenu";
import { HomePage } from "../HomePage";
// import { Footer } from '../Footer';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RegisterPage } from "../RegisterPage";
import { EpsPage } from "../EpsPage";
import { EpsProvider } from "../context/eps.context";
import { PatientProvider } from "../context/patients.context";
import { ConfirmationPage } from "../ConfirmationsPage";
import { FormsProvider } from "../context/forms.context";
import { LoginPage } from "../LoginPage";
import { AuthProvider } from "../context/auth";
import { LogOutPage } from "../LogoutPage";
import { ErrorProvider } from "../context/error.context";
import { UsersManagment } from "../UsersManagment";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <EpsProvider>
              <PatientProvider>
                {/* <div className='row principal-container'> */}
                <div className="d-flex flex-nowrap h-100 principal">
                  {/* <div className='d-inline-flex'> */}
                  <SideMenu />

                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/eps" element={<EpsPage />} />
                    <Route
                      path="/admission"
                      element={
                        <FormsProvider>
                          <ConfirmationPage />
                        </FormsProvider>
                      }
                    />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="logout" element={<LogOutPage />} />
                    <Route path="users-managment" element={<UsersManagment/>} />
                  </Routes>
                </div>

                {/* <Footer/> */}
              </PatientProvider>
            </EpsProvider>
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
