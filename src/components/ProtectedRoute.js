import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const props = { ...rest }
    const { auth } = props

    return (
        <Route
            {...props}
            render={() => auth.authenticated ? <Component { ...props } /> : <Redirect to='/signin' />}
        />
    )
}

export default ProtectedRoute