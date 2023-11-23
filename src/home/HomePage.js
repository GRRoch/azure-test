import React from 'react';
import { Link } from 'react-router-dom';
import { RValue, RChart } from '../RData';

export const HomePage = () => {
    return(
        <div className="page-container">
                <RValue />
                <RChart />
        </div>
    )
};