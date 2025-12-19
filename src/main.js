import express from 'express';
import { envConfig} from './config/index.js'
import { connectDB } from './config/db.js';

const app = express();
const PORT = envConfig.PORT;

app.use(express.json());

await connectDB();

app.listen(PORT, () => console.log('server running on port', PORT));