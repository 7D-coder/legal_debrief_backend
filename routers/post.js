const router = require("express").Router();


//const { json } = require("body-parser");
//const { JSON } = require("express/lib/response");
const JSON = require("JSON");
const { createPost,deletePost, updatePost , getPost , getFeaturedPosts , getPosts ,searchPost , getRelatedPosts, uploadImage} = require("../controllers/post");
const multer = require("../middleware/multer");
const { postvalidator, validate } = require("../middleware/postvalidtor");
const { parseData } = require("../middleware");

router.post(
    "/create",
    multer.single("thumbnail"),
    parseData,
    postvalidator, 
    validate,
    createPost
 );// clear 

 router.put(
    "/:postId",
    multer.single("thumbnail"),
    parseData,
    postvalidator, 
    validate,
    updatePost
 );// error hai same as in delete post



 router.delete("/:postId", deletePost);//error hai iis me 
 router.get("/single/:slug", getPost);// clear
 router.get("/featured-posts", getFeaturedPosts);// error 
router.get("/posts",getPosts);//clear
router.get("/search",searchPost);// error hai trim me 
router.get("/related-posts/:postId", getRelatedPosts)// clear 

router.post("/upload-image",multer.single("image"),uploadImage);//clear

module.exports = router;