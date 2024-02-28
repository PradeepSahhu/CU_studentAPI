require("dotenv").config();
const express = require("express");
const app = express();
const student_router = require("./routes/student_routes");
const connectDB = require("./MONGODB/DB_connections");

const PORT = process.env.PORT || 8100;

//! Direct Route Addressing.
app.get("/", (req, res) => {
  res.send("I am Live and running but might be down later");
});
//! Route Addressing through middleware.
app.use("/api/students", student_router);

const start = async () => {
  await connectDB(process.env.MONGODB_URL);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on ${PORT}`);
  });
};

start();
