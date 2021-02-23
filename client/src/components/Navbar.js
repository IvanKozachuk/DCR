import React, {useState, useEffect} from 'react'
import './navbar.css';
import { useDispatch } from 'react-redux'; 
import { Link, useHistory } from 'react-router-dom';

import * as actionType from '../constants/actionTypes';

const Navbar = ({logingOut}) => {
  const [userInfo, setUserInfo] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const logOut = () => {
    dispatch({ type: 'LOGOUT'});

    history.push('/');

    setUserInfo(null);

    logingOut(false);
  }
  
  const userMaintanance = async () => {
    const data =  await JSON.parse(localStorage.getItem('profile'))

    const userRaw =  data.result.name.split(" ");
    const user =  userRaw.map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    const admin = data.result?.admin;
    setIsAdmin(admin);

    setUserInfo(user);
  }

  userMaintanance();

  return (
    <div className="navbar">
        <div className="toolbar">
        <div className="initials">
        <h6 className="user_name">{userInfo}</h6>
          {isAdmin && <Link to="/dcr"><button className="nav_btn">DCR</button></Link>}
          {isAdmin && <Link to="/dashboard"><button className="nav_btn">Dashboard</button></Link>}
          <button onClick={logOut} className="logout_btn">Logout</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
