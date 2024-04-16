import{useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React from 'react'
import { auth, firestore } from '../Firebase/Firebase';

const useSignUp = () => {
    const [createUserWithEmailAndPassword,user,loading,error]=
    useCreateUserWithEmailAndPassword(auth);
    const SignUp = async(input)=>{
        if(!input.email || !input.password || !input.username){
            alert("please enter username and pasword")
            return ;
        }

        const userRef=collection(firestore,"users");
        const q=query(userRef,where("username","==",input.username));
        const querySnapshot=await getDocs(q);
        if(!querySnapshot.empty){
            alert("Username Already Exist");
            return;
        }
        try{
            const newUser=await createUserWithEmailAndPassword(input.email,input.password);
            if(!newUser && error){
                alert(
                    error.message
                )
            }
            if(newUser){
                const userDoc={
                    uid:newUser.user.uid,
                    email:input.email,
                    username:input.username,
                    fullname:'',
                    bio:'',
                    profilePicUrl:'',
                    followers:[],
                    following:[],
                    blogs:[],
                    createdAt:Date.now(),
                }
            await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
            localStorage.setItem("bloguser",JSON.stringify(userDoc));
              
            }

        }catch(e){
           console.log(e);
        }
    }
  return {SignUp}
}

export default useSignUp
