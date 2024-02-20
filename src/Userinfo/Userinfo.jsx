import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef } from 'react';
import "./Userinfo.css";
import { useNavigate } from 'react-router-dom';


export default function Userinfo() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isUserInfoVisible, setUserInfoVisible] = useState(false);
    const navigate= useNavigate();
    const [userInfo, setUserInfo] = useState({
        username: 'Dharma teja',
        empid: '230322005',
       
        email: 'teja@gmail.com',
        lastLogin: '2024-02-06 3:45 PM', // Add your logic to get the last login time
    });

    const dropdownRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setUserInfoVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            clearInterval(intervalId);
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const formatDate = (date) => {
        const options = {
            day: 'numeric',
            month: 'short',
            year: '2-digit',
        };
        return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (date) => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return date.toLocaleTimeString(undefined, options);
    };

    const toggleUserInfo = () => {
        setUserInfoVisible(!isUserInfoVisible);
    };

    const handleLogout = () => {
        console.log('User logged out');
        setUserInfoVisible(false);
        navigate("/")
    };

    return (
        <div className="userinformation">
            <div className='div4-1'>
                <div className="user-info-container">
               

                    <div className="user-info-button" onClick={toggleUserInfo}>
                        <FontAwesomeIcon icon={faUserTie} className='userimge' />
                    </div>
                    {isUserInfoVisible && (
                        <div className="user-info-dropdown" ref={dropdownRef}>
                               {/* <div className= " image"> <img src="image/image dp1.jpg" alt="dp" className="img" />  </div> */}
                               <p>{userInfo.username}</p>
                               <p>{userInfo.empid}</p>
                           
                            <p>{userInfo.email}</p>
                            <hr />
                            {/* <p>Current Date: {new Date().toLocaleDateString()}</p> */}
                            <p>Current Date: {formatDate(currentDateTime)}</p>
                            <p>Last Login: {userInfo.lastLogin}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="div4-3">
                <h5>Dharma Teja</h5>
            </div>
            <div className='div4-2'>
                <div className="datetime">
                    <p>{formatDate(currentDateTime)}</p>
                    <p>{formatTime(currentDateTime)}</p>
                </div>
            </div>
        </div>
    );
}





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserTie } from '@fortawesome/free-solid-svg-icons';
// import React, { useState, useEffect, useRef } from 'react';
// import "./UserInfo.css";

// export default function UserInfo() {
//     const [currentDateTime, setCurrentDateTime] = useState(new Date());
//     const [isUserInfoVisible, setUserInfoVisible] = useState(false);
//     const [userInfo, setUserInfo] = useState({
//         empid: '230322013',
//         username: 'Thirumal',
//         email: 'thiru.g@gmail.com',
//         lastLogin: '2024-02-06 3:45 PM', // Add your logic to get the last login time
//     });

//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentDateTime(new Date());
//         }, 1000);

//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setUserInfoVisible(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             clearInterval(intervalId);
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const formatDate = (date) => {
//         const options = {
//             day: 'numeric',
//             month: 'short',
//             year: '2-digit',
//         };
//         return date.toLocaleDateString(undefined, options);
//     };

//     const formatTime = (date) => {
//         const options = {
//             hour: 'numeric',
//             minute: 'numeric',
//             hour12: true,
//         };
//         return date.toLocaleTimeString(undefined, options);
//     };

//     const toggleUserInfo = () => {
//         setUserInfoVisible(!isUserInfoVisible);
//     };

//     const handleLogout = () => {
//         console.log('User logged out');
//         setUserInfoVisible(false);
//     };

//     return (
//         <div className="userinformation">
//             <div className='div4-1'>
//                 <div className="user-info-container">
               

//                     <div className="user-info-button" onClick={toggleUserInfo}>
//                         <FontAwesomeIcon icon={faUserTie} className='userimge' />
//                     </div>
//                     {isUserInfoVisible && (
//                         <div className="user-info-dropdown" ref={dropdownRef}>
//                                {/* <div className= " image"> <img src="image/image dp1.jpg" alt="dp" className="img" />  </div> */}
                            
//                                <p>{userInfo.empid}</p>
//                             <p>{userInfo.username}</p>
//                             <p>{userInfo.email}</p>
//                             <hr />
//                             {/* <p>Current Date: {new Date().toLocaleDateString()}</p> */}
//                             <p>Current Date: {formatDate(currentDateTime)}</p>
//                             <p>Last Login: {userInfo.lastLogin}</p>
//                             <button onClick={handleLogout}>Logout</button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className="div4-3">
//                 <h5>User Name</h5>
//             </div>
//             <div className='div4-2'>
//                 <div className="datetime">
//                     <p>{formatDate(currentDateTime)}</p>
//                     <p>{formatTime(currentDateTime)}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }



