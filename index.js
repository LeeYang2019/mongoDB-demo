const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB();

//middle for telling the server
app.use(express.json({ extended: false }));

//route
app.use('/api/courses', require('./routes/courses'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
