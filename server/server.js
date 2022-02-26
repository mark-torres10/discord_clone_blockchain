import express from 'express';
import Gun from 'gun';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 9000;

app.use(cors())

app.use(Gun.serve);

app.get('/', (req, res) => {
    res.status(200).send('LIVE SERVER');
});

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

Gun({ web: server });