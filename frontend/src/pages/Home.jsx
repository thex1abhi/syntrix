import { signInWithPopup } from "firebase/auth";
import React from "react";
import api from "../../utils/axios";
import { auth, googleProvider } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setUserdata } from "../redux/userSlice.js";
import Sidebar from "../components/SideBar.jsx";
import ChatArea from "../components/ChatArea.jsx";
import Artifact from "../components/Artifact.jsx";
function Home() {

    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user)
    // console.log(userData);

    const handleLogin = async (token) => {
        try {
            const { data } = await api.post("/api/auth/login", { token })
            dispatch(setUserdata(data))
        } catch (error) {
            console.log(error);
        }
    }

    const googlelogin = async () => {
        const data = await signInWithPopup(auth, googleProvider)
        const token = await data.user.getIdToken()
        console.log(token);
        await handleLogin(token)
        console.log(data);
    }

    return (
        <>
            <div className="h-screen flex  bg-[#0d0f14] text-white overflow-hidden  ">

                <Sidebar />
                <ChatArea />
                <Artifact />
                {!userData && <div className="fixed inset-0 z-50  flex items-center justify-center 
                 bg-black/60   backdrop-blur-sm ">
                    <div className="w-[340px] bg-[#13151c] border border-white/[0.08] 
                     rounded-2xl  p-7 flex flex-col  gap-5   ">
                        <div className="">
                            <h2 className=" text-[17px] font-semibold text-slate-100
                        tracking-tight "> Welcome to Syntrix AI </h2>
                            <p className="text-[13px] text-slate-500 ">Please login to continue   </p>
                        </div>

                        <button
                            onClick={googlelogin}
                            className=" w-full   flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90  bg-white  hover:bg-gray-200  transition-all duration-150 cursor-pointer  ">
                            <FcGoogle size={15} />
                            Continue with  google
                        </button>

                    </div>
                </div>}

            </div>
        </>
    )
}

export default Home;
