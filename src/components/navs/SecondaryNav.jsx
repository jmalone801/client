import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import LogoutButton from './LogoutButton';
import ColorTheme from './ColorTheme';
import Button from '@mui/material/Button';



const NavContainer = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                    <Button href="/dashboard" variant="contained" color="secondary" >Dashboard</Button>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            style={{ fontWeight: 'bold' }}
                        >Motorsport Manager</Typography>
                        <LogoutButton/> {/* LogoutButton Import */}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
export default NavContainer;
