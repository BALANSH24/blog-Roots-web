import React, { useEffect, useState } from 'react'
import useGetUserById from '../../../hooks/useGetUserById'
import '../Home.css'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../../Firebase/Firebase'
const FeedPost = ({post}) => {
    console.log(post)
    console.log(post.createdBy)
    const [user , setUser] = useState();

    const getUserProfile=async()=>{
        console.log(post.createdBy)
        console.log("scsnckndcjksdnjdsjvda")
        try{
            const userRef=await getDoc(doc(firestore,"users",post.createdBy));
            if(userRef.exists()){
                console.log(userRef)
                console.log(userRef.data())
                setUser(userRef.data());
              
            }else{
                console.log("no user")
            }
        } catch(error){
            console.log(error);
        }finally{
          
        }
      
    }
   
    useEffect(()=>{
        getUserProfile();
      },[])

 
    if(!user){
        return <></>
    }
  return (
    <div className="div89">
    <div>
        <div className='profile-inline'><div className='profile-logo'></div>
         <div className="">{user.username}</div></div>
        
        
        <h1 className='daada'>{post.title}</h1>
        <p className='daadi'>{post.blog}</p>
        <p>{post.username}</p>
        </div>

    <div className='card-image-container'><img className='card-image' src={post.imageURL} height={'200px'} alt="" /></div>

</div>
  )
}

export default FeedPost
