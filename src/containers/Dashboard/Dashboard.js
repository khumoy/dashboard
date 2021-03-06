import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardWrapper from './DashboardWrapper';

const Dashboard = ({ children }) => {
    return (
        <DashboardWrapper >
            <div className="sideBar">
                <ul>
                    <li><Link to="/" className="active">Home</Link> </li>
                    <li><Link to="/dashboard/users" >Users</Link> </li>
                    <li><Link to="/dashboard/todos" >Todos</Link> </li>
                    <li><Link to="/dashboard/albums" >Albums</Link> </li>
                    <li><Link to="/dashboard/photos" >Photos</Link> </li>
                    <li><Link to="/dashboard/posts" >Posts</Link> </li>
                </ul>
            </div>
            <div className="rightBar">
                <header className="shadow">
                    <button className="btn ">
                        <FontAwesomeIcon size="lg" icon={faBars} />
                    </button>
                </header>
                <div className="row">
                    {children}
                </div>
            </div>
        </DashboardWrapper>

    )
}

export default Dashboard
