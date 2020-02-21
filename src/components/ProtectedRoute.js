import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const props = { ...rest }

    return (
        <Route {...props} render={() => {
                if (props.auth.authenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/signin' />
                }
            }}
        />
    )
}

export default ProtectedRoute