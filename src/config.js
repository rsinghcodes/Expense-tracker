import dotenv from 'dotenv';

dotenv.config();

const MONOGO_DB = process.env.MONGO_URI;
const PORT = process.env.PORT;
const NODE_ENV = process.env.development;

export { MONOGO_DB, PORT, NODE_ENV };
