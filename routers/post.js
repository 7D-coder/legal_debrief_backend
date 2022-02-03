const router = require("express").Router();


//const { json } = require("body-parser");
//const { JSON } = require("express/lib/response");
const JSON = require("JSON");
const { createPost } = require("../controllers/post");
const multer = require("../middleware/multer");
const { postvalidator, validate } = require("../middleware/postvalidtor");
const { parseData } = require("../middleware");

router.post("/create",multer.single("thumbnail"),

    parseData,

postvalidator, 
validate,
 createPost
 );

module.exports = router;