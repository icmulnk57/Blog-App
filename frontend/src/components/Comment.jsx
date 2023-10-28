import React, { useContext, useEffect } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { URL } from '../../url'
import axios from 'axios'
import { UserContext } from '../context/UserContext'

const Comment = ({c,post}) => {
  const {user}=useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteComment=async(id)=>{
    try{
      setIsDeleting(true);
      await axios.delete(URL+`/api/comments/`+id,{withCredentials:true});
   
      
      
    }catch(err){
      console.log(err);
    }finally {
      setIsDeleting(false);
    }
  }
  

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-gray-600">@{c.author}</h3>
      <div className="flex justify-center items-center space-x-4">
        <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
        <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
        {user?._id === c?.userId && (
          <div className="flex items-center justify-center space-x-2">
            <p
              className="cursor-pointer"
              onClick={() => deleteComment(c?._id)}
              disabled={isDeleting}
            >
              <MdDelete />
            </p>
          </div>
        )}
      </div>
    </div>
    <p className="px-4 mt-2">{c.comment}</p>
  </div>
);
};

export default Comment