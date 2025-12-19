import React from 'react'
import { Main, LeftDiv } from './style.js';
import Sidebar from '../../components/sidebar/index.jsx';


const AdminLayout = ({ children }) => {
  return (
    <Main>
      <LeftDiv>
        <div>
          <Sidebar />
        </div>
      </LeftDiv>

      <div className="dA-content">
        {/* <div> <Navbar/></div> */}
        {children}
      </div>
    </Main>
  )
}

export default AdminLayout
