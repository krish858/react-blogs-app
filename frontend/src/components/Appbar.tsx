import { Avatar } from "./Blogcard"
import { useNavigate } from "react-router-dom"

function Appbar() {
  const navigate = useNavigate();
  return (
    <div className="flex border-b-2 border-black justify-between p-2 items-center">
        <div className="cursor-pointer" onClick={()=>{navigate("/blogs")}} ><h1 className="text-2xl font-semibold">Blog-app</h1></div>
        <div> 
          <button type="button" className="bg-green-400 p-1 rounded-xl mx-3 text-white font-medium" onClick={()=>{navigate("/publish")}} >publish</button>
          <Avatar name="User"/>
        </div>
    </div>
  )
}

export default Appbar