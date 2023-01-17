import styles from './LoginPage.css';
import { useLocation, useNavigate } from 'react-router';
const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';
    return (
        <div>
            <h1>Login Page</h1>
            {fromPage}
        </div>
);
}



export default LoginPage;