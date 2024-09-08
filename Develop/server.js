const express = require('express');


const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

require('./public/routes/api')(app);
require('./public/routes/html')(app);
app.listen(PORT, () => {
    console.log(`App listening to http://localhost:${PORT}`);
});