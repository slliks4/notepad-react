// React-router-dom imports
import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom";

// Layout imports
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>This is the error page</h1>,
    children:[
      {
        path: "about",
        element: <h1>This is the about page</h1>
      },
      {
        path: "contact",
        element: <h1>This is the contact page</h1>
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
    <RouterProvider router={router} />
  );
}

export default App;
