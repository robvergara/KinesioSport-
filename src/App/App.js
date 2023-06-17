import "./App.css";
import { SideMenu } from "../SideMenu";
import { HomePage } from "../HomePage";
// import { Footer } from '../Footer';
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { RegisterPage } from "../RegisterPage";
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
import { UserProvider } from "../context/users.context";
import { ModalProvider } from "../context/modal.context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            {/* <UserProvider> */}
              <EpsProvider>
                <PatientProvider>
                  {/* <div className='row principal-container'> */}
                  <div className="d-inline-flex h-100 principal">
                    {/* <div className='d-inline-flex'> */}
                    <SideMenu />

                    <Routes>
                      <Route path="/" element={<HomePage />} />

                      {/* <Route path="/register" element={<RegisterPage />} /> */}

                      <Route path="/eps" element={<EpsPage />} />

                      <Route
                        path="/admission"
                        element={
                          <ModalProvider>
                            <FormsProvider>
                              <ConfirmationPage />
                            </FormsProvider>
                          </ModalProvider>
                        }
                      />
                      <Route path="login" element={<LoginPage />} />
                      <Route path="logout" element={<LogOutPage />} />

                      <Route path="users-managment" element={
                        <ModalProvider>
                          <UserProvider>
                            <UsersManagment/>
                          </UserProvider>
                        </ModalProvider>
                      } />

                    </Routes>
                  </div>

                  {/* <Footer/> */}
                </PatientProvider>
              </EpsProvider>
            {/* </UserProvider> */}
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
