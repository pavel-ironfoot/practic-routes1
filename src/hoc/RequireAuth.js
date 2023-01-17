import { useLocation, Navigate } from "react-router";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = false;

    if(!auth){
        return <Navigate to='/login' state={{from:location}} />
    }
    
    return children;
}


export default RequireAuth;