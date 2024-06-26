import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

export default function ResultTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:5000/api/result'; 
        getServerData(apiUrl, (res) => {
            setData(res);
        });
    }, []);

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <th>Name</th>
                        <th>Attempts</th>
                        <th>Earn Points</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="4">No Data Found</td>
                        </tr>
                    ) : (
                        data.map((v, i) => (
                            <tr className='table-body' key={i}>
                                <td>{v?.username || ''}</td>
                                <td>{v?.attempts || 0}</td>
                                <td>{v?.points || 0}</td>
                                <td>{v?.achieved === "Passed" ? "Passed" : "Failed"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
