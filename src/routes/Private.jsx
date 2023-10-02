import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../component/AuthProvider";
import PropTypes from 'prop-types';

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading) return <span className="loading loading-ball loading-xs"></span>
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};
Private.propTypes={
    children:PropTypes.node,
}

export default Private;