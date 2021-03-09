import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
