// React imports
import React from 'react';

// React dom imports
import ReactDOM from 'react-dom/client';

// import style
import './assets/css/style.css';

// app import
import App from './App';

// helpers imports
import reportWebVitals from './helpers/reportWebVitals';
import TokenRefresh from './helpers/TokenRefresh';

// Context imports
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <React.StrictMode>
            <App />
            {/* <TokenRefresh /> */}
        </React.StrictMode>
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
