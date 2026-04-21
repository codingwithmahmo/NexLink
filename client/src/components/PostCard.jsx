import { Badge, BadgeCheck, Heart, MessageCircle, MessageCircleCheck, Share, Share2 } from 'lucide-react'
import React, { useState } from 'react'
import moment from 'moment'
import { dummyUserData } from '../assets/assets'

const PostCard = ({post}) => {

    const postWithHashtags = post.content.replace(/(#\w+)/g, '<span class="cursor-pointer text-indigo-600">$1</span>')
    const [likes,setLikes]=useState(post.likes_count)
    const currentUser = dummyUserData

    // function to handle like button click
    const handleLike = async () => {

    }
  return (
    <div className='bg-white rounded-3xl shadow p-4 space-y-4 w-full max-w-2xl'>
        {/* UserInfo  */}
        <div className='inline-flex items-center gap-3 cursor-pointer'>
            
            {/* User Profile Picture goes here */}
            <img src={post.user.profile_picture}  className='w-10 h-10 rounded-full shadow' />
            <div>
                {/* This will contain the name & check icon */}
                <div className='flex items-center space-x-1'>
                    <span>{post.user.full_name}</span>
                    <BadgeCheck className='w-4 h-4 text-blue-600' />
                </div>

                <div className='text-gray-400 text-sm'>
                    @{post.user.username} • {moment(post.createdAt).fromNow()}
                </div>
            </div>
        </div>

        {/* Post content */}
        {post.content && <div className='text-gray-800 text-sm text-justify whitespace-pre-line' dangerouslySetInnerHTML={{__html: postWithHashtags}} />}

        {/* Imagaes goes here */}
        <div className='grid grid-cols-2 gap-2'>
            {post.image_urls.map((image,index)=>{
                return <img src={image} key={index} className={`w-full h-48 object-cover rounded-2xl ${post.image_urls.length === 1 && 'col-span-2 h-auto'}`} alt="Post image" />
            })}
        </div>

        {/* Action Buttons Goes Here */}
        <div className='flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300'>
            <div className='flex items-center gap-1'>
                <Heart onClick={handleLike()} className={`w-4 h-4 cursor-pointer ${likes.includes(currentUser._id) && 'text-red-500 fill-red-500'}`} />
                <span>{likes.length}</span>
            </div>

            <div className='flex items-center gap-1'>
                <MessageCircle className='w-4 h-4 cursor-pointer hover:text-indigo-600' />
                <span>{30}</span>
            </div>

            <div className='flex items-center gap-1'>
                <Share2 className='w-4 h-4 cursor-pointer hover:text-indigo-600' />
                <span>{45}</span>
            </div>
        </div>

        
    </div>
  )
}

export default PostCard