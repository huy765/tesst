require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const RouterRole = require("./router/role");
const RouterAuth = require("./router/auth");
const RouterAuthAdmin = require("./router/authAdmin");
const RouterCard = require("./router/card");
const RouterCategory = require("./router/category");
const RouterUnit = require("./router/unit");
const RouterUpload = require("../Middleware/upload");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/role", RouterRole);
app.use("/api/auth", RouterAuth);
app.use("/api/admin", RouterAuthAdmin);
app.use("/api/category", RouterCategory);
app.use("/api/unit", RouterUnit);
app.use("/api/upload", RouterUpload);
app.use("/api/card", RouterCard);

app.get("/image/:id", (req, res) => {
    res.sendFile(path.join(__dirname, `/public/upload/${req.params.id}`));
});

app.listen(process.env.PORT, () =>
    console.log("Máy chủ đã chạy tại công 8080")
);
