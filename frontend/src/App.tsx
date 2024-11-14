import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import UserList from './pages/UserList';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import SignIn from './pages/Authentication/SignIn';
import ProtectedRoute from './Routes/ProtectedRoute';

import { UserProvider } from './Context/useAuth';
import { ToastContainer } from 'react-toastify';
import UserEditForm from './pages/Form/UserEditForm';
import ProductList from './pages/ProductList';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();  
  const routes = [
    // Routes with DefaultLayout
    { path: "/", title: "eCommerce Dashboard ", component: <ECommerce />, index: true },
    { path: "/calendar", title: "Calendar ", component: <Calendar /> },
    { path: "/profile", title: "Profile ", component: <Profile /> },
    { path: "/edit-user", title: "Form Elements ", component: <UserEditForm /> },
    { path: "/forms/form-elements", title: "Form Elements ", component: <FormElements /> },
    { path: "/forms/form-layout", title: "Form Layout ", component: <FormLayout /> },
    { path: "/user-list", title: "Tables ", component: <UserList /> },
    { path: "/product-list", title: "Tables ", component: <ProductList /> },
    { path: "/settings", title: "Settings ", component: <Settings /> },
    { path: "/chart", title: "Basic Chart", component: <Chart /> },
    { path: "/ui/alerts", title: "Alerts ", component: <Alerts /> },
    { path: "/ui/buttons", title: "Buttons ", component: <Buttons /> },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => { 
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
    <>
      <UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" 
          />
        <ToastContainer />
        
        <Routes>
          {/* Route for Login (no DefaultLayout) */}
          <Route index path="/auth/signin" 
            element={
              <>
                <PageTitle title={"SignIn Page"} />
                <SignIn />
              </>
          } />

          <Route index path="/auth/signup" 
            element={
              <>
                <PageTitle title={"SignUp Page"} />
                <SignUp />
              </>
          } />

          {/* Other routes wrapped with DefaultLayout */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <DefaultLayout>
                  <Routes>
                    {routes.map(({ path, title, component }) => (
                        <Route
                          key={path}
                          path={path}
                          element={
                            <>
                              <PageTitle title={title} />
                              {component}
                            </>
                          }
                        />
                    ))}
                  </Routes>
                </DefaultLayout>    
              </ProtectedRoute>
            }
          />
          
        </Routes>  
      </UserProvider>
    </>
  );
}

export default App;
