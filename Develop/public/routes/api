const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/notes', (req, res) => {
        var db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let note = {
            title: req.body.title,
            text: req.body.text
        };
        db.push(note);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });
};