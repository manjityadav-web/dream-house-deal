import React from 'react'
import NavBar from '../landingComponents/NavBar'
  import  { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContactUsList = () => {


const[data, setData]= useState([]) 
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {

    fetchData();
    // axios.get('http://localhost:5500/api/contact-list') // replace with your API
    //   .then(res => setContacts(res.data))
    //   .catch(err => console.log(err));
  }, []);

  const fetchData = async()=>{

        const result = await axios.get('https://dream-house-deal-1.onrender.com/api/contact-list')

         if(result?.data?.code==200){
          setData(result?.data?.data)
        }
  }

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
  };
  return (


   <>

   <NavBar />

       <div className="container mt-5">
    <center>  <h1 className='pb-5 text-danger'>Contact Submissions</h1></center>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Subject</th>
            <th>View Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.subject}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => handleViewMessage(item.message)}>
                  View Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal or div for message display */}
      {selectedMessage && (
        <div className="alert alert-info mt-3">
          <h5>User Message:</h5>
          <p>{selectedMessage}</p>
          <button className="btn btn-danger btn-sm" onClick={() => setSelectedMessage(null)}>Close</button>
        </div>
      )}
    </div>
  


   
   </>
  )
}

export default AdminContactUsList
