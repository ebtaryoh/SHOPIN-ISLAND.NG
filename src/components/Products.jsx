import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import products from './ProductDb';

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
    </Container>
  );
};

export default Products;
