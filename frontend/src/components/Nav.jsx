
import { MessageSquare } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

function Nav() {

    const { selectedConversation } = useSelector(state => state.conversation)

    return (
        <div className="h-14 flex items-center  gap-2.5 px-5  border-b border-white/[0.06] 
        bg-[#0d0f14] ">

            <div className="">
                <MessageSquare />
            </div> 
            <div className="">
                {selectedConversation?.title || "New Chat" }
            </div>
            <div className="">
                
            </div>

        </div>
    )
}

export default Nav;
