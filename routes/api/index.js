const router = require("express").Router();
const routedNotes = require("./notes");

router.use("/notes", routedNotes);

router.get("/notes");

module.exports = router;
