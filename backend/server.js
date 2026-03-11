const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173',
  process.env.CORS_ORIGIN
].filter(origin => origin); // Remove undefined/null

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Route files
const auth = require('./routes/auth');
const hospitals = require('./routes/hospitals');
const medicines = require('./routes/medicines');
const appointments = require('./routes/appointments');
const reports = require('./routes/reports');
const newsletter = require('./routes/newsletter');
const testBookings = require('./routes/testBookings');

// Mount routers
app.use('/api/auth', auth);
app.use('/api/hospitals', hospitals);
app.use('/api/medicines', medicines);
app.use('/api/appointments', appointments);
app.use('/api/reports', reports);
app.use('/api/newsletter', newsletter);
app.use('/api/test-bookings', testBookings);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
