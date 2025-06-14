import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PostModel } from '@/types/post'
import Tags from '../fragments/Tags'

const PostCard = (post: PostModel) => {
  return (
    <Card className="w-full max-w-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl text-[#1E3A8A]">{post.title}</CardTitle> 
        <CardDescription className='mt-5'>
          {post.body}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tags data={post.tags} />
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2 mt-2">
        <div className="flex-1 flex items-center gap-5">
          <div className='flex gap-2 items-center'>
            <span>{post.reactions?.likes}</span>
             <AiOutlineLike className='text-[#1E3A8A]'/>        
          </div>
           <div className='flex gap-2 items-center'>
            <span>{post.reactions?.dislikes}</span>
            <AiOutlineDislike className='text-[#1E3A8A]'/>        
          </div>
        </div>
        <div className="text-sm text-gray-600">{post.views} views</div>
      </CardFooter>
    </Card>
  )
}

export default PostCard
