import Appbar from "./Appbar"

function Loading() {
  return (
    <div>
        <Appbar></Appbar>
        <div>
            <div className=" relative ">
            <div className=" absolute inset-x-0 left-1/2 transform -translate-x-1/2 max-w-xl">
                <div className="border-b-2 border-black pb-6 mt-10">
                    {skeleton()}
                </div>
                <div className="border-b-2 border-black pb-6 mt-10">
                    {skeleton()}
                </div>
                <div className="border-b-2 border-black pb-6 mt-10">
                    {skeleton()}
                </div>
                <div className="border-b-2 border-black pb-6 mt-10">
                    {skeleton()}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

function skeleton(){
    return(
        <div className="">
            <div role="status" className="max-w-sm animate-pulse ">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading