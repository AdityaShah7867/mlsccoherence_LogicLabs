import React from 'react'

const Navbar = () => {
  return (
    <div>
  <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-white text-2xl py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div className="flex shrink-0">
          <a aria-current="page" className="flex items-center" href="/">
            <img className="h-7 w-auto" src="https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg" alt='logo'/>
            <p className="sr-only">Website Title</p>
          </a>
        </div>
       
        <div className="flex items-center justify-end gap-3 ">
          <a className="hidden items-center justify-center rounded-xl text-lg bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex" href="/login">Sign in</a>
          <a className="inline-flex items-center justify-center rounded-xl text-lg bg-blue-600 px-3 py-2 font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Login</a>
        </div>
      </div>
    </div>
  </header>
</div>

  )
}

export default Navbar