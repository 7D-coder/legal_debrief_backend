const  Post  = require("../models/post");
const FeaturedPost = require("../models/featured")

const FEATURED_POST_COUNT = 5;

const addToFeaturedPost = async (postId) =>{

    const featuredPost = new FeaturedPost({post: postId});
    await featuredPost.save();


const featuredPosts = await FeaturedPost.find({}).sort({ created: -1});

featuredPosts.forEach(async(post,index) =>{
    if(index >= FEATURED_POST_COUNT)
        await FeaturedPost.findByIdAndDelete(post._id)
});

};

exports.createPost = async(req, res) =>
{
    console.log(req.body);
    //console.log(title);
    const {title,meta,content,slug,author,tags,featured} = req.body;
     const newPost = new Post ({title,meta,content,slug,author,tags});
     await newPost.save();

     if(featured) await addToFeaturedPost(newPost._id)

      res.json(newPost);
}