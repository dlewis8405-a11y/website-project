const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Basic proxy middleware
app.use('/', createProxyMiddleware({
  target: 'http://example.com', // Target host
  changeOrigin: true,
}));

// Basic homepage route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my proxy site</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
