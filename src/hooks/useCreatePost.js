import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { firestore, storage } from '../Firebase/Firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { update } from 'firebase/database';

const useCreatePost = () => {
    const user = JSON.parse(localStorage.getItem("bloguser"));
    const [isLoading, setIsLoading] = useState(false);
    const handleCreatepost = async (image, post) => {
        if (isLoading) return;
        setIsLoading(true);

        if (!image || !post) {
            alert("Please enter complete data");
            return;
        }
        try {
            const postDocRef = await addDoc(collection(firestore, "blogs"), post);
            const userdocRef = doc(firestore, "users", user.uid);
            const imageRef = ref(storage, `blogs/${postDocRef.id}`);

            await updateDoc(userdocRef, { blogs: arrayUnion(postDocRef.id) });

            // Convert image to data URL
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = async function () {
                const imageURL = reader.result;
                await uploadString(imageRef, imageURL, "data_url");
                const downloadURL = await getDownloadURL(imageRef);

                await updateDoc(postDocRef, { imageURL: downloadURL });

                alert("Post created successfully");
            };
            reader.onerror = function (error) {
                console.log("Error: ", error);
                alert("An error occurred while creating the post");
                setIsLoading(false);
            };
        } catch (error) {
            console.log(error);
            alert("An error occurred while creating the post");
            setIsLoading(false);
        }
    };
    // const handleCreatepost = async ( image,post) => {
    //     if (isLoading) return;
    //     setIsLoading(true);

    //     if(!image || !post){
    //         alert("please enter complete data")
    //         return;
    //     }
    //     try {

    //         const postDocRef = await addDoc(collection(firestore, "blogs"), post);
    //         const userdocRef = doc(firestore, "users", user.uid);
    //         const imageRef = ref(storage, `blogs/${postDocRef.id}`);
    //         await updateDoc(userdocRef, { blogs: arrayUnion(postDocRef.id) });
    //         const imageURL = URL.createObjectURL(image);

    //         await uploadString(imageRef, imageURL, "data_url");
    //         const downloadURL = await getDownloadURL(imageRef);
    //         await updateDoc(postDocRef, { imageURL: downloadURL });
    //         alert("post created successfully");






    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    //     finally {
    //         setIsLoading(false);
    //     }

    // }
    return {isLoading, handleCreatepost }
}

export default useCreatePost