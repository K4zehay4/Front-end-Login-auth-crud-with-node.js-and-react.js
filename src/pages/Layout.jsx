import React from 'react'
import Navbar from '../component/Navbar.jsx';
import SideBar from '../component/SideBar';

const Layout = ({ children }) => {
  return (
  
         <React.Fragment>
            <Navbar/>
            <div className="columns pl-2 mt-6" style={{minHeight:"100vh"}}>
                <div className="column is-2">
                    <SideBar/>
                    </div>
                    <div className="column has-background-light">
                        <main>{children}</main>
                    </div>
                </div>
         </React.Fragment>
  ) 
}

export default Layout;