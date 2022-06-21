const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const PORT = process.env.port || 3030;

app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://localhost:3030',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const userRoutes = require('./api/user/user.routes');
const authRoutes = require('./api/auth/auth.routes');

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// app.get('/**', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

http.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
