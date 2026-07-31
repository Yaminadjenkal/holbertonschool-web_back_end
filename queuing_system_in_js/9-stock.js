import express from 'express';
import redis from 'redis';
import { promisify } from 'util';

// ---------------------------
// DATA
// ---------------------------
const listProducts = [
  { id: 1, name: 'Suitcase 250', price: 50, stock: 4 },
  { id: 2, name: 'Suitcase 450', price: 100, stock: 10 },
  { id: 3, name: 'Suitcase 650', price: 350, stock: 2 },
  { id: 4, name: 'Suitcase 1050', price: 550, stock: 5 }
];

function getItemById(id) {
  return listProducts.find((item) => item.id === id);
}

// ---------------------------
// REDIS CLIENT
// ---------------------------
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Reserve stock in Redis
async function reserveStockById(itemId, stock) {
  await setAsync(`item.${itemId}`, stock);
}

// Get reserved stock from Redis
async function getCurrentReservedStockById(itemId) {
  const reserved = await getAsync(`item.${itemId}`);
  return reserved ? parseInt(reserved) : 0;
}

// ---------------------------
// EXPRESS SERVER
// ---------------------------
const app = express();
const PORT = 1245;

// Format product for output
function formatProduct(product, currentQuantity = null) {
  return {
    itemId: product.id,
    itemName: product.name,
    price: product.price,
    initialAvailableQuantity: product.stock,
    ...(currentQuantity !== null && { currentQuantity })
  };
}

// ---------------------------
// ROUTES
// ---------------------------

// List all products
app.get('/list_products', (req, res) => {
  const formatted = listProducts.map((p) => formatProduct(p));
  res.json(formatted);
});

// Product detail with current stock
app.get('/list_products/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (!product) {
    return res.json({ status: 'Product not found' });
  }

  const reserved = await getCurrentReservedStockById(itemId);
  const currentQuantity = product.stock - reserved;

  res.json(formatProduct(product, currentQuantity));
});

// Reserve a product
app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (!product) {
    return res.json({ status: 'Product not found' });
  }

  const reserved = await getCurrentReservedStockById(itemId);
  const currentQuantity = product.stock - reserved;

  if (currentQuantity <= 0) {
    return res.json({
      status: 'Not enough stock available',
      itemId
    });
  }

  await reserveStockById(itemId, reserved + 1);

  res.json({
    status: 'Reservation confirmed',
    itemId
  });
});

// ---------------------------
// START SERVER
// ---------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

