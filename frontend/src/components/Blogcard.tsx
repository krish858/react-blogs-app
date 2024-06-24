import { useNavigate } from "react-router-dom"

interface Blogcard{
    authorname : string,
    title: string,
    content: string,
    publishdate: string,
    id: number
}

function Blogcard({authorname,title,content,publishdate,id}:Blogcard) {
    const navigate = useNavigate()
  return (
    <div className="p-2 m-4 border-b-2 border-slate-600 cursor-pointer" onClick={()=>{navigate(`/blog/${id}`)}}>
        <div className="text-slate-400 text-lg font-light">
           <Avatar name={authorname} /> {authorname}. {publishdate}
        </div>
        <div className="flex flex-col p-2">
           <span className="text-2xl font-semibold">{title}</span> 
           <span className="text-xl ">{content.slice(0,120) + "..."}</span>
        </div>
    </div>
  )
}

export function Avatar({name}:{name:string}){
    return(
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
             <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    )
}

export default Blogcard