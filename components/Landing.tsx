import React, { useState } from 'react'
import Pie from '../components/charts/Pie'

interface user {
  name: string
}

const Landing = () => {

  const me = {
    name: 'John'
  }

  const [user, setUser] = useState<user | null>(null);
  const [isClicked, setIsClicked] = useState({
    userProfile: true
  })

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 top-44 md:top-1/4 absolute w-full'>
      <div className='ml-3 mt-12 md:ml-12 lg:ml-52 2xl:ml-112 text-5xl font-bold'>
        <div className='text-2xl'>Welcome to</div>
        <div className='font-mono'>Urrl Link</div>
        <div className='mb-6 text-2xl'>Give us a link to make magic</div>
      </div>

      <div className='ml-3 mr-3 max-w-sm'>
        <div className="code-preview rounded-xl bg-gradient-to-r bg-white border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter your url</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className="flex mb-6">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              urely.com/
            </span>
            <input type="text" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your custom alias here"/>
          </div>
          <label className="relative inline-flex items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"/>
            <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Use custom alias</span>
          </label>
          <label className={`relative inline-flex items-center mb-4 ${user ? "cursor-pointer" : ""}`}>
            <input type="checkbox" value="" className="sr-only peer" disabled={user ? false : true}/>
            <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className={`ml-3 text-sm font-medium ${user ? "text-gray-900 dark:text-gray-300": "text-gray-400 dark:text-gray-500"}`}>Reserve generated alias</span>
          </label>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block">Make URL</button>
        </div>
      </div>
    </div>
    <div className='p-3 m-auto mt-120 md:mt-104 lg:mt-112 xl:mt-112 2xl:mt-142'>
      <div className="w-40">
        <Pie/>
      </div>
      <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 md:m-auto">
          <h5 className="mb-4 text-2xl font-medium text-gray-500 dark:text-gray-400">Standard Plan</h5>
          <h6 className="mb-4 text-l font-medium text-gray-500 dark:text-gray-400">Register free for access</h6>
          <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">0</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>

          <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Personalized and Custom URL</span>
              </li>
              <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Short link data insight and tracking</span>
              </li>
              <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Save and share documents</span>
              </li>
              <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Visualization of URL visit statistics</span>
              </li>
              <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">API access</span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500">URL re-assigned if not used</span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-base font-normal leading-tight text-gray-500">Limit to short links created</span>
              </li>
          </ul>
          <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Landing