import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/home/HomePage";
import ObjectDetails from "./pages/objectDetails/ObjectDetails";
import {objectsData} from "./components/catalogObjects/CatalogObjects";

function App() {
  // Define handleDiscoverClick function
  // const handleDiscoverClick = (id) => {
  //   // Your logic for handling the "Discover" click
  //   // For example, redirecting to ObjectDetails page
  //   // You might need to adapt this based on your specific requirements
  //   return `/Catalog/${id}`;
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route
            path="/Catalog/:id"
            element={<ObjectDetails objectsData={objectsData} />}
        />
        {/*<Route*/}
        {/*  path="/Catalog/:id"*/}
        {/*  element={*/}
        {/*    <ObjectDetails*/}
        {/*      objectsData={objectsData}*/}
        {/*      handleDiscoverClick={handleDiscoverClick}*/}
        {/*    />*/}
        {/*  }*/}
        {/*/>*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
