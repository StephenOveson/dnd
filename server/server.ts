import express from 'express';
import next from 'next';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    try {
        await app.prepare();
        const server = express();
    
        server.all('*', (req, res) => {
            return handle(req, res);
        })
    
        server.listen(PORT, () => {
            console.log(`> listening on localhost:${PORT}`);
        })
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();