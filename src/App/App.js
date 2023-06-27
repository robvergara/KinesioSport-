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
import { AuthProvider, AuthRoute } from "../context/auth";
import { LogOutPage } from "../LogoutPage";
import { ErrorProvider } from "../context/error.context";
import { UsersManagment } from "../UsersManagment";
import { UserProvider } from "../context/users.context";
import { ModalProvider } from "../context/modal.context";
import { FormsTemplate } from '../FormsTemplate'

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
                      <Route path="/" element={
                        <AuthRoute>
                          <HomePage />
                        </AuthRoute>
                        } />

                      {/* <Route path="/register" element={<RegisterPage />} /> */}

                      <Route path="/eps" element={
                        <AuthRoute>
                          <EpsPage />
                        </AuthRoute>
                      } />

                      <Route
                        path="/admission"
                        element={
                          <AuthRoute>
                            <ModalProvider>
                              <FormsProvider>
                                <ConfirmationPage />
                              </FormsProvider>
                            </ModalProvider>
                          </AuthRoute>
                        }
                      />
                      <Route path="login" element={<LoginPage />} />

                      <Route path="logout" element={
                        <AuthRoute>
                          <LogOutPage />
                        </AuthRoute>
                      } />

                      <Route path="templates" element={
                        <AuthRoute>
                          <FormsTemplate />
                        </AuthRoute>
                      } />

                      <Route path="users-managment" element={
                        <AuthRoute>
                          <ModalProvider>
                            <UserProvider>
                              <UsersManagment/>
                            </UserProvider>
                          </ModalProvider>
                        </AuthRoute>
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
