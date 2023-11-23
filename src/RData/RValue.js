import React from 'react';
import {useState, useEffect} from 'react';

export const RValue = () => {
    const [currentRValue, setCurrentRValue] = useState(null);

    useEffect( () => {
        const loadRValue = async () => {
        try {
            const response = await fetch('/rvalue');
            const rvalueresponse = await response.json();
            setCurrentRValue(rvalueresponse[rvalueresponse.length-1].RVal);
        } catch (error) {
            console.log('Error loading R value:', error.message);
            setCurrentRValue(null);
        }
    }

        loadRValue();
    },[]);
    
    return (
        <div>
            {currentRValue !== null && (
                <p>
                    R Value: {currentRValue}
                </p>
            )}
        </div>
    )
}