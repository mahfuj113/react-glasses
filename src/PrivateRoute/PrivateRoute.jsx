import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading) return <h1 className="text-5xl">Loading</h1>

    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;