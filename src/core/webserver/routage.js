app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});


app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});