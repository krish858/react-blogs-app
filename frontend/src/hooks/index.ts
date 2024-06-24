import {useEffect, useState} from 'react'
import axios from "axios";

interface blogs{
    content: string,
    title: string,
    id: number,
    author: {
        name: string,
    }
}

interface blog{
    content: string,
    title: string,
    author: {
        name: string,
    }
}

export const useblogs = ( ) =>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<blogs[]>([]);

    useEffect(()=>{
        axios.get("https://blog-app.xitashi.workers.dev/api/v1/blog/allblogs",{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false)
            })

    },[])
    return{
        loading,
        blogs
    }
}

export const useblog = ({id}:{id : string}) =>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<blog>();

    useEffect(()=>{
        axios.get(`https://blog-app.xitashi.workers.dev/api/v1/blog/blog/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false)
            })

    },[id])
    return{
        loading,
        blog
    }
}