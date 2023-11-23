import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const history = useNavigate();

    return (
        <button className="back-button" onClick={history.goBack}>Back</button>
    )
}