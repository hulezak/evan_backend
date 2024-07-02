const express = require("express");
const router = express.Router();



//* question controllers

const { allquestions, askquestions, questiondesc } = require("../controller/questionController");

//* authontication middleware - home page
router.get("/all-questions", allquestions)


router.post("/add-question", askquestions)

router.get("/:questionid", questiondesc)

module.exports = router