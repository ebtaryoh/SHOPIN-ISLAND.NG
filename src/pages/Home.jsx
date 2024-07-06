import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar1 from "../components/Navbar1";
import HeroSection from "../components/HeroSection";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 10,
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 20,
    image: "/path/to/image2.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 3",
    price: 60,
    image: "/path/to/image2.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 4",
    price: 40,
    image: "/path/to/image2.jpg",
  },
];

const Home = () => (
  <>
    <Navbar1 />
    <HeroSection />
    <div className="text-center d-flex row">
      <h1>UNIQUE CATEGORIES</h1>
      <div className="d-flex gap-4 text-center">
        <Button type="button" className=" rounded-0 px-4 py-1 select-category">
          Chairs
        </Button>
        <Button type="button" className="btn rounded-0 px-4 py-1 ">
          Sofa
        </Button>
        <Button type="button" className="btn rounded-0 px-4 py-1 ">
          Tables
        </Button>
        <Button type="button" className="btn rounded-0 px-4 py-1 ">
          Bed
        </Button>
      </div>
    </div>
    <div>

    </div>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Footer/>
    </div>
  </>
);

export default Home;
