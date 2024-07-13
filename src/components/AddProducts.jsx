const axios = require('axios');

const API_KEY = 'your_api_key_here';
const TIMBU_URL = 'https://api.timbu.cloud/products';

const product3 = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 100,
    category: 'Retail Business',
    images: ['https://link_to_image1.jpg', 'https://link_to_image2.jpg'],
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 200,
    category: 'Retail Business',
    images: ['https://link_to_image1.jpg', 'https://link_to_image2.jpg'],
  },
];

const addProduct = async (product) => {
  try {
    const response = await axios.post(
      TIMBU_URL,
      product,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`Added: ${product.name}`);
  } catch (error) {
    console.error(`Failed to add ${product.name}: ${error.message}`);
  }
};

const addProducts = async () => {
  for (const product of products) {
    await addProduct(product);
  }
};

AddProducts();
