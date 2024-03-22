// React-router-dom imports
import { 
  createBrowserRouter, 
  RouterProvider,
  Navigate
} from "react-router-dom";

// Library imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// Layout imports
import AppLayout from './layouts/AppLayout';
import AuthLayout, { authLayoutActions } from "./layouts/AuthLayout";

// Authentication page imports
import LoginPage from "./pages/authPage/LoginPage";
import SignUpPage from "./pages/authPage/SignUpPage";

// App page imports
import Home,{ homePageLoader, homePageAction } from "./pages/appPage/Home";
import SettingsPage from './pages/appPage/SettingsPage';
import InboxPage from './pages/appPage/InboxPage';
import HubPage from './pages/appPage/HubPage';

// context imports
import { useAuthContext } from './hooks/useAuthContext';
import LabelAuthor from './pages/appPage/LabelAuthor';
import AppPageError from "./components/AppPageError";

function App() {
  const { token } = useAuthContext();

  // Router
  const router = createBrowserRouter([
    {
      path: "/authentication",
      element: !token ? <AuthLayout /> : <Navigate to='/'/>,
      errorElement: <h1>This is the error page for auth</h1>,
      children:[
        { index: true, action: authLayoutActions, element: <LoginPage /> },
        { path: "register", action: authLayoutActions, element: <SignUpPage /> }
      ]
    },
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <AppPageError />,
      children:[
        { index: true, element: <Home /> },
        { path: ':action', element: <Home />},
        { path: 'note-labels', element: <LabelAuthor />},
        { path: 'note-label/:label', element: <Home />},
        { path: 'inbox', element: <InboxPage />},
        { path: 'settings', element: <SettingsPage />},
        { path: 'hub', element: <HubPage />}
      ]
    },
    { path: "*", element: <h1>This is the 404 page</h1> }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
