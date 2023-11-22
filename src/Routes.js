import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routes = [];

export const MyRoutes = () => {
    <Router>
        <Routes>
            {routes.map( (route, index) => (
                <Route
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                >
                    <route.Component />
                </Route>
            ))}
        </Routes>
    </Router>
}