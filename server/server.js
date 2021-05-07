const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const app = require("./app");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
