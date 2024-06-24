interface blog{
    authorname: string,
    title: string,
    content: string,
    publishdate: string
}

function Fullblog({authorname,title,content,publishdate}:blog) {
  return (
    <div className="flex flex-col md:flex-row w-full">
        <div className=" md:w-2/3 border-slate-300 mx-2 border-b-2 ">
          <div className="flex flex-row">
              <div className="md:p-2 ">
                  <div className="flex flex-col p-2">
                      <span className="text-5xl font-bold">{title}</span>
                      <span className="text-slate-500 text-xl font-light">Published on 1/04/2004</span>
                  </div>
                  <h1 className="p-4 text-2xl font-light">
                      {content}
                  </h1>
              </div>
          </div>
        </div>
        <div className="md:w-1/3 p-6">
          <div className="flex flex-col">
            <span className="text-xl">Author:</span>
            <span className="text-2xl font font-semibold">-{authorname}</span>
          </div>
          <div className="py-4">
            <h1 className="text-xl font-light">Random fact:</h1>
            <h1 className="font-semibold">Did you know that Vim has a built-in game? It's called "Vim Adventures,"</h1>
          </div>
        </div>
    </div>
  )
}

export default Fullblog