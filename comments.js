//create web server
const express = require('express');
const app = express();
const port = 3000;
//create a route
app.get('/comments', (req, res) => {
    res.send('This is a comment page');
});

//listen on port 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
