const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Production Express Server running at localhost:${PORT}`);
});