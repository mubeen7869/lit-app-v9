import React from 'react'
import { Link } from "react-router-dom";
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className='sidebar'>
            <ul>
            <li><Link to={"/home/timetracker"}>Time Tracker</Link></li> <br /> 
                <li><Link to={"/home/employeeprofile"}>Employee Profile</Link></li><br />
                <li><Link to={"/home/raiseticket"}>Raise Ticket</Link></li><br />
                <li><Link to={"/home/timesheet"}>Time Sheet</Link></li><br />
                <li><Link to={"/home/settings"}>Settings</Link></li><br />
                <li><Link to={"/home/support"}>Support</Link></li>
            </ul>
            </div>
  )
}

export default SideBar
