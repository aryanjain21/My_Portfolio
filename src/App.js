
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes, Navigate } from 'react-router-dom';
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
// import Home from "./components/home/home";
import SideNav from "./components/sideNav/sideNav";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'relative';
    }
  }, [showMenu]);

  return (
    <Box>
      <Box sx={{
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        <SideNav />
      </Box>
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#1d1d1d',
        pl: { xs: 0, md: '150px' },
      }}>
        <Box sx={{
          width: '100%',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          px: {xs: 0, md: '16px' },
          pt: {xs: 0, md: '16px'},
          position: 'fixed',
          zIndex: 10
        }}>
          {!showMenu && <Box sx={{
            pt: '16px',
            px: '16px',
          }} onClick={() => setShowMenu(prevState => !prevState)}>
            <MenuOutlinedIcon sx={{
              color: '#08fdd8',
              cursor: 'pointer',
            }} />
          </Box>}
          {showMenu && <SideNav showMenu={showMenu} setShowMenu={setShowMenu} />}
        </Box>
        <Routes>
          <Route exact path='/' element={<Navigate to='/about' />} />
          {/* <Route exact path='home' element={<Home />} /> */}
          <Route exact path='about' element={<About />} />
          <Route exact path='blog' element={<Blog />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='skills' element={<Skills />} />
          <Route exact path='works' element={<Works />} />
          <Route exact path='*' element={<Navigate to='/about' />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
