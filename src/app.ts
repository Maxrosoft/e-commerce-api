import express, { Express } from "express";
import "dotenv/config";

const PORT: number = +(process.env.PORT || 3000);

const app: Express = express();

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
