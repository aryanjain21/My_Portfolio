import { Box } from "@mui/material";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/home/home";
import SideNav from "./components/sideNav/sideNav";
import Skills from "./components/skills/skills";

function App() {
  return (
    <Box>
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        <SideNav />
      </Box>
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#1d1d1d',
        pl: { xs: 0, md: '150px' }
      }}>
        <Routes>
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route exact path='home' element={<Home />} />
          <Route exact path='skills' element={<Skills />} />
          <Route exact path='*' element={<Navigate to='/home' />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
