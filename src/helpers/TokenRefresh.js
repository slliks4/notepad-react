// import { useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { setCookie } from './Cookies';

// const TokenRefresh = () => {
//     const { logout } = useAuth();
//     const { token } = useAuthContext();

//     const tokenRefresh = async () => {
//         try {
//             if (token){
//                 const url = "http://127.0.0.1:8000/token/refresh/";
//                 const response = await fetch(url, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body:JSON.stringify({
//                         "refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMzM5MTQxNiwiaWF0IjoxNzEwNzk5NDE2LCJqdGkiOiI2YmE0NzE0MTE0MGI0ZDEzODQ2MzBkY2JlZjkwMDhmYyIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4ifQ.78BH4LHbl5wz-Tpmyc9Sd4H4WVw4ttjn7NaR6-2bbic"
//                     })        
//                 });
    
//                 if (response.ok) {
//                     const data = await response.json();
//                     setCookie("access", data.access, "/", 0.2)
//                     setCookie("refresh", data.refresh, "/", 30)

//                     return true;
//                 } else if (response.status === 400 || response.status === 401) {
//                     await logout(); 
//                 } else {
//                     const errorMessage = await response.text();
//                     throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
//                 }
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     useEffect(() => {
//         const interval = setInterval(tokenRefresh, 0.1 * 60 * 1000);
//         return () => clearInterval(interval);
//     }, [token]);

//     return null;
// };

// export default TokenRefresh;
