import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/home/HomePage";
import Cart from "./pages/cart/Cart";

import ObjectDetails from "./pages/objectDetails/ObjectDetails";
import {getStoneList} from "./fetching";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from "./pages/profile/Profile";
import PrivateRoutes from "./components/protectedRoutes/ProtectedRoutes";



function App() {

    const [objectsData, setObjectsData] = useState('');

    useEffect(() => {
        getStoneList()
            .then(response => {
                console.log(response)
                setObjectsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(objectsData)

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Register />} />
                {/*<Route element={<PrivateRoutes />}>*/}
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Catalog" element={<Catalog />} />
                    <Route path="/Catalog/:id"
                        element={
                            <ObjectDetails objectsData={objectsData} />
                        }
                    />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path='/Profile' element={<Profile />} />
                {/*</Route>*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;