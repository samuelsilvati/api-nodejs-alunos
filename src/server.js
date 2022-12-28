import app from './app';

// Add Access-Control-Allow-Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/api', (req, res) => {
  res.json('Hello');
});

const port = process.env.APP_PORT;
app.listen(port);
