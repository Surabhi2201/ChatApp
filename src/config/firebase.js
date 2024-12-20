
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore,se } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyA1rKASbDq9IqqEWxaeqbe7Gkv_D8WLtbA",
  authDomain: "baatein-70105.firebaseapp.com",
  projectId: "baatein-70105",
  storageBucket: "baatein-70105.firebasestorage.app",
  messagingSenderId: "360861399397",
  appId: "1:360861399397:web:229a2451bd1c6ed50b898c"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

const db = getFirestore(app);

const signup = async(username,email,password)=>{
try{
  const res= await createUserWithEmailAndPassword(auth,email,password);
  const user= res.user;
  await setDoc(doc(db,"users",user.uid),{
    id:user.uid,
    username:username.toLowerCase,
    email:email,
    name:"",
    avatar:"",
    bio:"Hey there i am using chat app",
    lastSeen:Date.now()
  })

  await setDoc(doc(db,"chats",user.uid),{
    chatData:[]
  })
}
catch(error){
 console.log(error);
}
}
 