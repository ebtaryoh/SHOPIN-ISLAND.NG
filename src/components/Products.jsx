import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import products from './ProductDb';
import product1 from "./ProductDb1"
import product2 from "./ProductDb2"

const Products = () => {
  return (
    <Container className="container-custom">
      <Row className="row-custom">
        {products.map((product, index) => (
          <Col md={3} key={index} className="col-custom">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <p className='h3 fw-bold text-center'>      NEW MODERN REST
      </p>
      <p className='  text-center'>Discover our exclusive collection of Stylish Home and Living Chairs.</p>
      <Row className="row-custom">
        {product1.map((product, index) => (
          <Col md={3} key={index} className="col-custom">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <p className='h3 fw-bold text-center mt-5'>      COLORFUL REST
      </p>
      <p className='  text-center'>Discover our special collection of colorful Chairs.</p>
      <Row className="row-custom">
        {product2.map((product, index) => (
          <Col md={3} key={index} className="col-custom">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
