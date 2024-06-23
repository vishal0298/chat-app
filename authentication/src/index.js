const dotenv = require('dotenv');
const startServer = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5000;

startServer().then(app => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to start server:', err);
});
