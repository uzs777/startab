import express from 'express';
import { envConfig } from './config/index.js'
import { connectDB } from './config/db.js';
import { createSuperAdmin } from "./helpers/create-superadmin.js"
import { errorHandler } from "./middlewares/error-handling.js"
import router from './router/index.js';

const app = express();
const PORT = envConfig.PORT;

app.use(express.json());

await connectDB();
await createSuperAdmin();

app.use("/api", router)
app.all(/(.*)/, (req, res, next) => {
    next(new ApiError("not funt ulr", 404))
})

app.use(errorHandler);
app.listen(PORT, () => console.log('server running on port', PORT));