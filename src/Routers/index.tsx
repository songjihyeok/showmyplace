import React from 'react'
import {
     Routes,
     Route
} from "react-router-dom";

import Home from "../pages/Home"
import CustomLayoutRoute from './CustomLayoutRoute';
import MainLayout from '../Layout/MainLayout';


export default function Routers() {
     return (
          <Routes>
               <Route path="/" element={<MainLayout><Home /></MainLayout>} />
               {/* <CustomLayoutRoute exact path="/" component={Home} layout={MainLayout} /> */}
          </Routes>
     )
}
