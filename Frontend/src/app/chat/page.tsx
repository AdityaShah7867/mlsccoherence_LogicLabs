import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  return (
    <DefaultLayout>
         <div className='h-screen -mt-4'>
            <div className=" bg-gray-50 h-4/5 flex flex-col border-2 mx-5 overflow-hidden">
                {/* Header */}
                <div className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 -mt-4">Community name</h1>
                        <p className="mt-1 text-lg text-gray-600">Created by:</p>

                    </div>

                </div>

                {/* Chat messages */}

                <div className='lg:mb-0 overflow-scroll '>
                    

                        <div>
                            
                                <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8" >
                                    
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-end justify-end">
                                                <div className="mr-4">
                                                    <div className="bg-indigo-600 rounded-lg px-4 py-2 shadow text-white">
                                                        <p className="text-lg overflow-hidden">gfdrg ad as da da das dfgfd gf d</p>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={'data:image/jpeg;base64,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'}
                                                        alt="User avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                           
                        </div>
                   


                </div>

                <div className="bg-white shadow bottom-0 w-full mr-52 mb-3 xl:mb-0 fixed mt-3">
                    <div className="max-w-7xl  py-4 px-4 sm:px-6 lg:px-8">
                        <form
                            // onSubmit={handleSubmit}
                            className="flex space-x-3 justify-center">
                            <div className="flex-1 justify-center items-center ">
                                <label htmlFor="message" className="sr-only text-black">
                                    Message
                                </label>
                                <input
                                    type="text"
                                    name="newDiscussion"
                                    id="message"
                                    
                                    className="shadow-sm p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Type your message here"
                                />
                            </div>
                            <button
                                
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >

    </DefaultLayout>
  )
}

export default page