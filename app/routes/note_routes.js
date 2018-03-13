var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    // POST
    app.post('/notes', (req, res) => {
        const note = {text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
        // callback
        // console.log(req.body);
        // res.send('hello world');
    });
    // GET
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        });
    });
    // DELETE
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send('Note ' + id + ' is removed');
            }
        });
    });
    // PUT
    // app.get('/notes/:id', (req, res) => {
    //     const id = req.params.id;
    //     const details = {'_id': new ObjectID(id) };
    //     db.collection('notes').findOne(details, (err, item) => {
    //         if (err) {
    //             res.send({'error': 'An error has occured'});
    //         } else {
    //             res.send(item);
    //         }
    //     });
    // });
};