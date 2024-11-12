const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// Connect to MongoDB
mongoose.connect('mongodb+srv://abbasrazaa02:30FWR6LU2rMBYJuw@cluster0.brzd5.mongodb.net/').then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // allow to server to accept request from different origin
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


