module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // callback
        console.log(req.body);
        res.send('hello world');
    });
};