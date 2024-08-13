import React from 'react'
import Sidebar from './Sidebar'
const Announcement = () => {
  return (
    <>
    <div className='flex'>
        <Sidebar/>
        <div>
            <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">ADD ANNOUNCEMENT</h1>
            </div>
            <div className='mt-3'>
              <label className='font-medium'>Announcement</label>
                
                <span><textarea placeholder='ENTER ANNOUNCEMENT' name='password' rows="6" cols="50" className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500 pr-64' ></textarea></span>
<button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-32 mt-7">ADD ANNOUNCEMENT</button>
            </div>
        </div>
    </div>
</>
)
}
export default Announcement