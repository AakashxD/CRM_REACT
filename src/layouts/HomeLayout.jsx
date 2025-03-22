import React from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
const HomeLayout = ({ children }) => {
  return (
    <div className='mt-4 ml-4 '>
    <div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer" className='hover:cursor-pointer'>
    <BsFillMenuButtonWideFill size={"32px"} />
    </label>
  </div>
  <div className="drawer-side hover:cursor-pointer w-1/6">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      
      <li className='font-bold'><a >DASHBOARD</a></li>
      <li className='font-bold'><a>Check Tickets</a></li>
      <li className=' absolute bottom-8' >
        <div className='flex  items-center justify-center  space-x-9'> 
            <button className='btn btn-primary rounded-md font-medium'  >Login</button>
            <button className="btn btn-secondary rounded-md font-medium">Signup</button>
        </div>
      </li>
    </ul>
  </div>
</div>
      <div className='flex items-start justify-center mt-4 ml-4'>
        <div className=' w-3/4'>
        {children}
        </div>
      
      </div>
</div>

  )
}

export default HomeLayout