import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import path from 'path';

import connect from './database/conn.js';

const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;

app.use('/api', router); /** apis */

/*** Deployment */
const __dirname = path.resolve(); // Correctly use __dirname

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

} else {

    app.get('/', (req, res) => {
        try {
            res.json("Get Request");
        } catch (error) {
            res.json(error);
        }
    });

}

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
});
