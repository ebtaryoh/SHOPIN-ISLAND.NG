import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDb = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=66463b38709a4cf98ec5811780b8ea7e&Appid=SEKBK1J42EYNC0H&Apikey=24ff0c84141444edad9e9f38110bff4820240713000328036304&size=${pageSize}&page=${page}`);
        const fetchedProducts = response.data.items.map(item => ({
          id: item.id,
          chairType: item.name,
          price: item.current_price[0].NGN[0],
          text: item.description,
          image: `https://api.timbu.cloud/images/${item.photos.length > 0 ? item.photos[0].url : ""}`,
          slug: item.url_slug,
        }));
        setProducts(fetchedProducts);
        setTotalPages(Math.ceil(response.data.total / pageSize));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [page]);

  return children({ products, page, totalPages, setPage });
};

export default ProductDb;
