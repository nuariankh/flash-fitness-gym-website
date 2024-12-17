import { useState, useContext } from "react";
import UserContext from "../../UserContext";

const UserDashboard = () => {

    const { user } = useContext(UserContext);

    return (
        user ? (
            <div className="user-dashboard-page-container">
                <div className="user-dashboard-header">
                    <h1>{user.firstName}'s Dashboard!</h1>
                </div>
                <div className="user-dashboard-user-info-card">
                    <h3>{user.firstName + ' ' + user.lastName}</h3>
                </div>
            </div>
        ) : (
            <div>
                <h1>Please login to see dashboard.</h1>
            </div>
        )
    );
};

export default UserDashboard;