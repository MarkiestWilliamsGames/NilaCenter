const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Nila server is working!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nila running on port ${PORT}`);
});
