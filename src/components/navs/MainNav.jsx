import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import LogoutButton from './LogoutButton';
import Search from './Search';
import AddButton from './AddButton';
import ColorTheme from './ColorTheme';



const MainNav = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <AddButton /> {/* AddButton Import */}
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            style={{ marginLeft: 160, fontWeight: 'bold' }}
                        >Motorsport Manager</Typography>
                        <Search/> {/* Search Import */}
                        <LogoutButton/> {/* LogoutButton Import */}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
export default MainNav;
