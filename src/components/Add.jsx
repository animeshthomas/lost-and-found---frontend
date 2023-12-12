import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Add = () => {
  const [inputfield, changeInputfield] = useState({
    "name": "",
    "description": "",
    "category": "",
    "status": "",
    "location": "",
    "date_reported": "",
    "contact_name": "",
    "contact_phone": "",
    "contact_email": "",
    "image": "",
    "additional_information": "",
    "is_resolved": false,
  });

  const inputHandler = (event) => {
    changeInputfield({ ...inputfield, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(inputfield);
    axios.post('http://127.0.0.1:8000/api/addLostFound', inputfield)
      .then((response) => {
        alert(response.data.Status);
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12">
            <div className="row g-3">
              <div className="col col-6">
                <label htmlFor="" className="form-label">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputfield.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={inputfield.description}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={inputfield.category}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  value={inputfield.status}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={inputfield.location}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Date Reported</label>
                <input
                  type="date"
                  className="form-control"
                  name="date_reported"
                  value={inputfield.date_reported}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Contact Name</label>
                <input type="text" className="form-control" name="contact_name" value={inputfield.contact_name} onChange={inputHandler} />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Contact Phone</label>
                <input type="text" className="form-control" name="contact_phone" value={inputfield.contact_phone} onChange={inputHandler} />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Contact Email</label>
                <input type="text" className="form-control" name="contact_email" value={inputfield.contact_email} onChange={inputHandler} />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Image</label>
                <input type="text" className="form-control" name="image" value={inputfield.image} onChange={inputHandler} />
              </div>
              <div className="col col-6">
                <label htmlFor="" className="form-label">Additional Information</label>
                <textarea className="form-control" name="additional_information" value={inputfield.additional_information} onChange={inputHandler} /> 
              </div>
              
              {/* Add more input fields in pairs as needed... */}
              <div className="col col-12">
                <center>
                  <button onClick={readValue} className="btn btn-success">
                    Register
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
