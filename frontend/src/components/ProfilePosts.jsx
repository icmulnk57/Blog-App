import React from 'react'
import {IF,URL} from '../../url'

const ProfilePosts = ({p}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left div */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    {p.photo && (p.photo.endsWith(".jpg") || p.photo.endsWith(".png") || p.photo.endsWith(".jpeg")) ? (
            <img src={IF + p.photo} alt="blog" className="w-full mx-auto mt-8" />
          ) : (
            <video controls className="w-full mx-auto mt-8">
              <source src={IF + p.photo} type="video/mp4" />
              {/* Add more source elements for other video formats if needed */}
            </video>
          )}
    </div>
    {/* right div */}
    <div className="flex flex-col w-[75%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
       {p.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>{p.username}</p>
        <div className="flex space-x-2">
        <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
        </div>
      </div>
      <p className="text-sm md:text-lg">
      {p.description}
      </p>
    </div>
  </div>
  )
}

export default ProfilePosts