const express = require("express");
//http://localhost: o http://127.0.0.1:

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
