import { BottomNavigation } from '@mui/material';
import React from 'react'
import { Outlet } from "react-router-dom"

function MainLayout() {
     return (
          <div>
               <Outlet />
               <BottomNavigation />
          </div>
     );
}

export default MainLayout;

