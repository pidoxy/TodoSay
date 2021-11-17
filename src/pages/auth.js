import { useEffect } from 'react';
import { withRouter } from "react-router-dom";



const Auth = withRouter(({ history, children }) => {
    useEffect(() => {
        let user = localStorage.getItem('user');
        if (!user) {
            history.push('/');
        }
    })

    return children;
});
export default Auth;