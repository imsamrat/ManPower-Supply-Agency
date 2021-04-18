import React, { useEffect, useState } from 'react';
import trush from '../../../images/trush.png';
import './ManageService.css';

const ManageService = () => {
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('https://immense-escarpment-60935.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    const handleDeleteList = (id) =>{
        console.log(id)
        fetch(`https://immense-escarpment-60935.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("Successfully Deleted", result)
        })
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <table className="table">
                    <thead>
                        <tr><th>Service Name</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {
                            service.map(item => {
                                return <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>
                                    <button className="btn btn-danger" onClick={() => handleDeleteList(`${item._id}`)}>
											<img src={trush} alt="delete" style={{ width: '21px' }} />
										</button>
                                    </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;