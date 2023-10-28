import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL,IF } from "../../url";
import { UserContext } from "../context/UserContext";

const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const {user}=useContext(UserContext);
  const [loader,setLoader]=useState(false);
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState("");
  const navigate=useNavigate();





  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + `/api/posts/${postId}`);
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);

    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);
  
  //delete post

const handleDeletePost=async()=>{
  try{
    const res =await axios.delete(URL+'/api/posts/'+postId,{withCredentials:true});
    
    navigate('/');


  }catch(err){
    console.log(err)
  }
}

//comment fetch
const fetchComments=async()=>{
  try{
    const res=await axios.get(URL+'/api/comments/posts/'+postId);
    setComments(res.data);
   

  }catch(err){
    console.log(err);
  }
}



useEffect(()=>{
  fetchComments();

},[postId])




const postComment=async(e)=>{
  e.preventDefault();
  try{
    const res=await axios.post(URL+'/api/comments/create',
    {comment:comment,author:user.username,postId:postId,userId:user._id},
    {withCredentials:true})

    await fetchComments();

    setComment(""); 

  }catch(err){
    console.log(err);
  }
}





  return (
    <>
      <Navbar />
      { loader?<div className="h-[80vh] flex justify-center items-center"><Loader/></div>:
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold  text-black md:text-3xl">
            {post.title}
          </h1>
          {user?._id === post?.userId && (
            <div className="flex items-center justify-center space-x-2 ">
              <p onClick={()=>navigate('/edit/'+postId)} className="cursor-pointer">
                <BiEdit />
              </p>
              <p onClick={handleDeletePost} className="cursor-pointer">
                <MdDelete />
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        {post.photo && (post.photo.endsWith(".jpg") || post.photo.endsWith(".png") || post.photo.endsWith(".jpeg")) ? (
            <img src={IF + post.photo} alt="blog" className="w-full mx-auto mt-8" />
          ) : (
            <video controls className="w-full mx-auto mt-8">
              <source src={IF + post.photo} type="video/mp4" />
              {/* Add more source elements for other video formats if needed */}
            </video>
          )}
        <p className="mx-auto mt-8">{post.description}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2 ">
            {post.categories?.map((c, i) => (
              <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>
          {/* comments */}
         {
          comments?.map((c)=>(
            <Comment key={c._id} c={c} post={post}/>

          ))
         }
        </div>
        {/* writea comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
          onChange={(e)=>setComment(e.target.value)}
            type="text"
            placeholder="write a comment"
            className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
          />
          <button onClick={postComment} className="btn px-2 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      }
      <Footer />
    </>
  );
};

export default PostDetails;
