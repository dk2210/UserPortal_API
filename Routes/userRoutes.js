const express = require("express");
const router = express.Router();
const dataController = require("../Controller/userController");

router.get("/", dataController.getData);
router.get("/:id", dataController.getDataById);
router.post("/create-user", dataController.createData);
router.delete("/delete-user/:id", dataController.deleteData);
router.put("/update-user/:id", dataController.updateData);

module.exports = router;