import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../Firebase/Firebase";

import React from 'react'

const useGetUserById = (uid) => {
    const [isLoading,setIsLoading]=useState(true);
const[userProfile,setUserProfile]=useState(null);

return {userProfile}
}

export default useGetUserById
