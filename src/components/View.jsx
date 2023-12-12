import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const View = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios.post('http://127.0.0.1:8000/api/getLostFound')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12">
            <div className="row g-5">
              {loading ? (
                <div className="col col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="col col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date Reported</th>
                        <th scope="col">Contact Email</th>
                        <th scope="col">Image</th>
                       
                        <th scope="col">Is Resolved</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.category}</td>
                          <td>{item.location}</td>
                          <td>{item.date_reported}</td>
                          <td>{item.contact_email}</td>
                          <td><img src={item.image}></img></td>
                        
                          <td>{item.is_resolved}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
