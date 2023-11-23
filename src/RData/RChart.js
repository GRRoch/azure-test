import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import LineChart from './LineChart';
import {Line} from 'react-chartjs-2';
import React, {useState, useEffect} from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const RChart = () => {
    const [jsonData, setJsonData] = useState([]);
  
    useEffect(() => {
      // Fetch your JSON data here and set it to the state
      const fetchData = async () => {
        try {
          const response = await fetch('/rvalue');
          const data = await response.json();
          setJsonData(data);
        } catch (error) {
          console.error('Error fetching JSON data:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>30 Day R Value Data</h1>
        <LineChart data={jsonData} />
      </div>
    );
  };