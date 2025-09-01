const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3009;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Allan' });
});

app.use('/livros', require('./routes/livrosRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
