import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


export const Main = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-row relative' style={{paddingTop:70}}>
      <Sidebar />
      <Outlet />
    </div>
    </>
  )
}

// export default Main ;
