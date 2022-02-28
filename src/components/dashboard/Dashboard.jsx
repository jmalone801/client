import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Album from './Album';
import MainNav from '../navs/MainNav';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const history = useHistory();


    // Verifys user logging in
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/loggedInUser', { withCredentials: true }) // withCreditials is needed for JWT/Cookies
            .then(res => {
                console.log("Results for logged in user", res)
                if (res.data.results) {
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err => {
                console.log("Error for logged in user", err)
                history.push("/dashboard")
            })
    }, [history])

    return (
        <div>
            <MainNav />
            <h1 style={{visibility: "hidden"}}>Welcome to the Dashboard, {loggedInUser.firstName}!</h1>
            <Album />
        </div>


    );

};


export default Dashboard;