import React from 'react'

function SkeletonLoading() {
  return (
    
<div role="status" className="animate-pulse py-10 space-y-4 min-h-screen">
    <div className=" h-4 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px] mb-2.5 mx-auto mt-10"></div>
    <div className="h-4  mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px]"></div>
    <div className="flex items-center justify-center mt-4">
        
        <div className=" w-6/12 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700 mr-3"></div>
        <div className="w-20 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
        <div className=" h-4 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px] mb-2.5 mx-auto mt-10"></div>
    <div className="h-4  mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px]"></div>
    <div className="flex items-center justify-center mt-4">
        
        <div className=" w-6/12 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700 mr-3"></div>
        <div className="w-20 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
        <div className=" h-4 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px] mb-2.5 mx-auto mt-10"></div>
    <div className="h-4  mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[840px]"></div>
    <div className="flex items-center justify-center mt-4">
        
        <div className=" w-6/12 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700 mr-3"></div>
        <div className="w-20 h-10 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

  )
}

export default SkeletonLoading