import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from './chakraTheme';
import Default from './layouts/Default';
import Home from './pages/Home';
import AccountApproval from './pages/AccountApproval'
import Customers from './pages/Customers'
import Merchants from './pages/Merchants'
import Orders from './pages/Orders'
import Earnings from './pages/Earnings'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './global.css'
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute><Default /></ProtectedRoute>} >
                <Route index element={<Home />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/merchants' element={<Merchants />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/earnings' element={<Earnings />} />
                <Route path='/settlements' element={<Merchants />} />
                <Route path='/account-approval' element={<AccountApproval />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <ChakraProvider theme={chakraTheme} >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
    </React.StrictMode>
);

export default App;
