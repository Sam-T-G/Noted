const router = require("express").Router();
const routedNotes = require("./notes");
const path = require("path");

router.use("/notes", routedNotes);

router.get("/notes");

module.exports = router;
