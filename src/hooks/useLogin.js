import { doc, getDoc } from "firebase/firestore";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router";
import { auth, firestore } from "../Firebase/Firebase";

const useLogin = () => {
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const login = async (inputs) => {
        if (!inputs.email || !inputs.password) {
            return showToast("error", "Please fill all the fields", "error");
        }
        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred) {
                const docRef = doc(firestore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("bloguser", JSON.stringify(docSnap.data()));
                navigate('/')

            }
        } catch (error) {
            alert(error.message);
         }
    };
    return{loading,error,login};
};
export default useLogin;