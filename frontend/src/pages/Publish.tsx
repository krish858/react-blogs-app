import { Avatar } from "../components/Blogcard"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import {blogInput} from './../../../common/src/index'

function Publish() {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();

    async function submit(){
        const data:blogInput = {
            title: title,
            content: content
        }
        try{
            const response = await axios.post("https://blog-app.xitashi.workers.dev/api/v1/blog/create",data,{
                headers:{
                    Authorization : localStorage.getItem("token")
                }
            });
            navigate("/blogs")
        }catch(e){
            alert(e)
        }
        
    }

  return (
    <div>
        <div className="flex border-b-2 border-black justify-between p-2 items-center">
            <div className="cursor-pointer" onClick={()=>{navigate('/blogs')}} ><h1 className="text-2xl font-semibold">Blog-app</h1></div>
            <div><Avatar name="User"/></div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl p-4">CREATE BLOG</h1>
            <div className="flex flex-row m-4 justify-center items-center w-[80%]">
                                                 {/* @ts-ignore */}
                <span className="text-4xl"><ion-icon name="add-circle-outline"></ion-icon></span>
                <input type="text" required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
        </div>
        <div className=" flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-[80%] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="w-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea
                    //@ts-ignore
                    rows={"15"}
                    className="w-full outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write your blog..."
                    required
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    ></textarea>
                </div>
            </div>
            <button type="button" className="bg-blue-700 p-2 rounded-xl  text-white font-bold" onClick={()=>{submit()}}>PUBLISH</button>
        </div>
    </div>
  )
}

export default Publish