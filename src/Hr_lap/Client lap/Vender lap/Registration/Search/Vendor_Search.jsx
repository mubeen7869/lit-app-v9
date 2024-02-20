import React, { useState } from 'react';
import { DataById } from '../../../../../http-common';
import "./Vendor_Search.css";
import { IoSearch } from "react-icons/io5";
 
const Vendor_Search = () => {
  const [vendorId, setVendorId] = useState('');
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
 
  const handleInputChange = (e) => {
    setVendorId(e.target.value);
  };
 
  const fetchData = async () => {
    try {
      setSearchResults([]);
      const response = await DataById(vendorId);
      const res1= response;
      setSearchResults((prevArray)=>[
        ...prevArray,
        res1
      ]);
      setError(null);
    } catch (error) {
      setError('Data not found');
      setVendorId(null);
    }
  };
 
  return (
    <div className="search-page-container">
      <h1>Vendor Search</h1>
      <div className='search-bar-container'>
        <div className='search-input-container'>
          <input
            type='text'
            id="searchInput"
            value={vendorId}
            onChange={handleInputChange}
            placeholder='Search by Vendor ID'
          />
          <button type='button' className='search-button' onClick={fetchData}>
           <IoSearch />
          </button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <table className='result-table'>
          <thead>
            <tr className='label1'>
              <th>ID</th>
              <th>CandidateName</th>
              <th>VendorName</th>
              <th>Job Type</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.candidateName}</td>
                <td>{item.vendorName}</td>
                <td>{item.jobType}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p style={{ color:'red'}}>{error}</p>}
    </div>
  );
};
 
export default Vendor_Search;