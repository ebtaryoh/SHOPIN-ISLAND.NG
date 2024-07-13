import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ProductDb from './ProductDb';

const Products = () => {
  return (
    <Container className="container-custom">
      <Row className="row-custom">
        <ProductDb>
          {(products, page, totalPages, setPage) => (
            <>
              {products.map((product, index) => (
                <Col md={3} key={index} className="col-custom">
                  <ProductCard product={product} />
                </Col>
              ))}
              <div className="pagination-controls">
                <Button className=" bg-info rounded-5 m-3 ps-4 pe-4 border-0"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span>Page {page} of {totalPages}</span>
                <Button className= "bg-info rounded-5 m-3 ps-5 pe-5 border-0"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </ProductDb>
      </Row>
    </Container>
  );
};

export default Products;
