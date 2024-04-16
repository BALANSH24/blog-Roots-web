import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../Firebase/Firebase';

const useGetBlog = () => {
    const[isLoading,setIsLoading]=useState(true);
    const getPosts=async()=>{
        setIsLoading(true);
        const q =query(
            collection(firestore,"blogs"),
    );
    try{
        const querySnapshot=await getDocs(q);
        const feedPosts=[];
        querySnapshot.forEach((doc)=>{
            feedPosts.push({id:doc.id,...doc.data()});
        });
        feedPosts.sort((a,b)=>b.createdAt-a.createdAt);
        return feedPosts;

    }catch(e){
        console.log(e);
        alert("some error occured")
    }

    }
  return {isLoading,getPosts };
  
}

export default useGetBlog

