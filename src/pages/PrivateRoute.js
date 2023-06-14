import React from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children,...rest}) => {
  const {myUser}=useUserContext()
  const navigate=useNavigate()
  return <Routes><Route {...rest} render={()=>{
    return myUser ? children : navigate('/')
  }}></Route></Routes>
};
export default PrivateRoute;
