const express = require('express');
const dotenv = require('dotenv');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const laundryRoutes = require('./routes/laundryRoutes');

dotenv.config();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/laundries', laundryRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
