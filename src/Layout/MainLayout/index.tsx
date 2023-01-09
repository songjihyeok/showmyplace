import BottomNavigationComponent from "../BottomNavigation";
import React from 'react'
import styled from "styled-components"
import { Outlet } from "react-router-dom"

function MainLayout({ children }: { children: any }) {
     return (
          <Container>
               <CenterLayout>
                    {children}
                    <BottomNavigationComponent />
               </CenterLayout>
          </Container>
     );
}

export default MainLayout;


const Container = styled.div`
  display: flex; 
  width: 100%;
  justify-content: center;
`
const CenterLayout = styled.div`
  max-width: 512px;
  width: 100%;
  height: 100vh;
  position: relative;
 `