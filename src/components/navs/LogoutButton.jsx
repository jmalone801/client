import axios from 'axios';
import { useHistory } from "react-router-dom";
import React from 'react';
import Button from '@mui/material/Button';

// This file only contains the title and logout button
const LogoutButton = () => {
    const history = useHistory();

    // Logs out signed in user
    const logoutUser = () => {
        axios.get('http://localhost:8000/api/user/logout', { withCredentials: true })
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                console.log("Error logging out:", err)
            })
    }

    return (
        <div>
            <Button variant="contained" color="secondary" style={{ marginLeft: 20 }} onClick={logoutUser}>Log Out</Button>
        </div>

    );
};


export default LogoutButton;