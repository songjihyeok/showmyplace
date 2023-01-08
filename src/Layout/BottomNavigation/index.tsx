import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from 'react-router-dom';

const BottomNavigationComponent = () => {
     const navigate = useNavigate()
     const [value, setValue] = useState(0);



     useEffect(() => {
          if (value === 0) {
               navigate("list")
               return
          }
          if (value === 1) {
               navigate("map")
               return
          }
          if (value === 2) {
               navigate("home")
               return
          }

     }, [value])




     return <BottomLayout>
          <Box sx={{ width: "100%" }} >
               <StyledBottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                         setValue(newValue);
                    }}
               >
                    <BottomNavigationAction label="리스트" icon={<FormatListBulletedIcon />} />
                    <BottomNavigationAction label="지도" icon={<MapIcon />} />
                    <BottomNavigationAction label="추가신청" icon={<AddIcon />} />
               </StyledBottomNavigation>
          </Box>
     </BottomLayout>
}

export default BottomNavigationComponent;

const StyledBottomNavigation = styled(BottomNavigation)`
     padding-top: 8px;
     .MuiBottomNavigationAction-label{
          display:flex;
          align-items: center;
     }
`

const BottomLayout = styled.div`
     position:absolute;
     bottom: 0;
     height: 65px;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content:center;
     box-shadow: rgb(0 0 0 / 24%) 0px -10px 10px -10px;
    border-top: 1px solid rgb(231, 231, 231);

`
