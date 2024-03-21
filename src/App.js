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
import AddPage from "./pages/appPage/AddPage";
import SettingsPage from './pages/appPage/SettingsPage';
import InboxPage from './pages/appPage/InboxPage';
import HubPage from './pages/appPage/HubPage';
import NoteViewPage from "./pages/appPage/NoteViewPage";

// context imports
import { useAuthContext } from './hooks/useAuthContext';

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
      errorElement: <h1> this is the error page for app</h1>,
      children:[
        { index: true, action: homePageAction, loader: homePageLoader, element: <Home /> },
        { path: ":slug", element: <NoteViewPage />},
        { path: 'add-note', element: <AddPage />},
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
