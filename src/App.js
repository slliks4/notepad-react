// React-router-dom imports
import { 
  createBrowserRouter, 
  RouterProvider, 
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
import Home from "./pages/appPage/Home";
import { homePageLoader, homePageAction } from './pages/appPage/Home';


// Router
const router = createBrowserRouter([
  {
    path: "/authentication",
    element: <AuthLayout />,
    errorElement: <h1>This is the error page for auth</h1>,

    children:[
      {
        index: true,
        action: authLayoutActions,
        element: <LoginPage />
      },
      {
        path: "register",
        action: authLayoutActions,
        element: <SignUpPage />
      }
    ]
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1> this is the error page for app</h1>,
    children:[
      {
        index: true,
        action: homePageAction,
        loader: homePageLoader,
        element: <Home />,
      }
    ]
  },
  {
    path: "*",
    element: <h1>This is the 404 page</h1>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
