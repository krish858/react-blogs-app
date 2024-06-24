import Blogcard from "../components/Blogcard"
import Appbar from "../components/Appbar"
import { useblogs } from "../hooks"
import Loading from "../components/Loading"

function Blogs() {
    const {loading,blogs} = useblogs();
    if(loading){
        return(
            <div>
                <Loading/>
            </div>
        )
    }
  return (
    <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
        <div className="flex flex-col justify-center max-w-xl">
            {blogs.map(blog => <Blogcard
            authorname={blog.author.name}
            title={blog.title}
            content={blog.content}
            id={blog.id}
            publishdate="1/04/2004"/>)}
        </div>
        </div>
    </div>
  )
}

export default Blogs