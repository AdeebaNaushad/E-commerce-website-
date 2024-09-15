import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ProductContext } from "./main";
import { Grid, Box } from "@chakra-ui/react";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleProductCard from './Components/SingleProductCard';
import Product from './Components/Product';
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from "react-router-dom";

function App() {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_Api_url}products.json`).then((response) => {
      const data = response.data;

      // If data is an object, convert it into an array
      const productsArray = data ? Object.values(data) : [];

      setProducts(productsArray);
    });
  }, [setProducts]);

  const ProductRoute = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));
    return product ? <Product product={product} /> : <p>Product not found</p>;
  };

  return (
    <Router>
      <Navbar />
      <Box
        maxW="1320px"
        mx="auto"
        px="4"
        mt="10"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="6"
        >
          {products && products.length > 0 ? (
            products.map((product) => (
              <SingleProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </Grid>
        <Routes>
          <Route path="/product/:id" element={<ProductRoute />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
