import React, { useState } from "react";
import "./Vender_registration.css";
import { vendorDetails } from "../../../../http-common";
 
export default function Vender_registration() {
  const [vendorId, setVendorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [rateCard, setRateCard] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [payRoll, setPayRoll] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [technology, setTechnology] = useState("");
  const [years, setYears] = useState("");
  const [firstReviewed, setFirstReviewed] = useState("");
  const [secondReviewed, setSecondReviewed] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
 
 
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
 
    const formData = new FormData();
    formData.append("vendorId", vendorId);
    formData.append("vendorName", vendorName);
    formData.append("rateCard", rateCard);
    formData.append("location", location);
    formData.append("jobType", jobType);
    formData.append("payRoll", payRoll);
    formData.append("candidateName", candidateName);
    formData.append("technology", technology);
    formData.append("years", years);
    formData.append("firstReviewed", firstReviewed);
    formData.append("secondReviewed", secondReviewed);
    formData.append("cvFormat", cvFile);
    try {
      // Using the vendorDetails function from http-common.js
      await vendorDetails(formData, setSuccessMessage, resetFormFields, setErrorMessage);
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
          "Failed to connect to the server. Please try again later."
      );
    }
  };
   
 
 
  const resetFormFields = () => {
    setVendorId("");
    setVendorName("");
    setRateCard("");
    setLocation("");
    setJobType("");
    setPayRoll("");
    setCandidateName("");
    setTechnology("");
    setYears("");
    setFirstReviewed("");
    setSecondReviewed("");
    setCvFile("");
  };
 
  return (
    <div className="vendormain">
      <h4 className="heading">Vendor Registration</h4>
 
      {/* Section: Registration */}
 
 <div className="form-section">
        <form onSubmit={handleFormSubmit}>
        <div className="firstsix">
          <div className="leftcol">

          <div className="side_by_side">
         <div>
          <label htmlFor="vendorId">Vendor ID</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="vendorId"
            id="vendorId"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            pattern="[0-9]*"
            title="Vendor ID must contain only numbers"
            required
          />
          {vendorId.length > 0 && !/^[0-9]*$/.test(vendorId) && (
                <p className="error-message">Vendor ID must contain only numbers</p>
              )}
            </div>
  </div>

 <div className="side_by_side">
         <div>
 <label htmlFor="candidateName">Candidate Name</label>
 </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="candidateName"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="Candidate Name must contain only letters"
            required
          />
          {candidateName.length > 0 && !/^[A-Za-z\s]+$/.test(candidateName) && (
                <p className="error-message">Candidate Name must contain only letters</p>
              )}
              </div>
  </div>
 
  <div className="side_by_side">
         <div>
          <label htmlFor="rateCard">Rate Card</label>
          
 </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="rateCard"
            id="rateCard"
            value={rateCard}
            onChange={(e) => setRateCard(e.target.value)}
            pattern="[0-9]*"
            title="Rate card must contain only numbers"
            required
          />
           {rateCard.length > 0 && !/^[0-9]*$/.test(rateCard) && (
                <p className="error-message">Rate card must contain only numbers</p>
              )}
              </div>
  </div>
 
  <div className="side_by_side">
         <div>
           <label htmlFor="firstReviewed">First Reviewed</label>
           </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="firstReviewed"
            id="firstReviewed"
            value={firstReviewed}
            onChange={(e) => setFirstReviewed(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="firstReviewed must contain only letters"
            required
          />
          {firstReviewed.length > 0 && !/^[A-Za-z\s]+$/.test(firstReviewed) && (
                <p className="error-message">First Reviewed must contain only letters</p>
              )}
 </div>
  </div>
         
  <div className="side_by_side">
         <div>
          <label htmlFor="jobType">Job Type</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="jobType"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="jobType must contain only letters"
            required
          />
           {jobType.length > 0 && !/^[A-Za-z\s]+$/.test(jobType) && (
                <p className="error-message">Job Type must contain only letters</p>
              )}
              </div>
  </div>
  
  <div className="side_by_side">
         <div>
          <label htmlFor="payRoll">Payroll</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="payRoll"
            id="payRoll"
            value={payRoll}
            onChange={(e) => setPayRoll(e.target.value)}
            pattern="[0-9]*"
            title="Rate card must contain only numbers"
            required
          />
          {payRoll.length > 0 && !/^[0-9]*$/.test(payRoll) && (
                <p className="error-message">Payroll must contain only numbers</p>
              )}
              </div>
  </div>
 
 </div>
     
 <div className="rightcol">

 <div className="side_by_side">
         <div>
 <label htmlFor="vendorName">Vendor Name</label>
 </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="vendorName"
            id="vendorName"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="Vendor Name must contain only letters"
            required
/>
{vendorName.length > 0 && !/^[A-Za-z\s]+$/.test(vendorName) && (
                <p className="error-message">Vendor Name must contain only letters</p>
              )}
               </div>
  </div>
 
  <div className="side_by_side">
         <div>
          <label htmlFor="technology">Technology</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="technology"
            id="technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="technology Name must contain only letters"
            required
          />
          {technology.length > 0 && !/^[A-Za-z\s]+$/.test(technology) && (
                <p className="error-message">Technology must contain only letters</p>
              )}
              </div>
  </div>
 
  <div className="side_by_side">
         <div>
          <label htmlFor="years">Years</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="years"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            pattern="[0-9]*"
            title="year must contain only numbers"
            required
          />
          {years.length > 0 && !/^[0-9]*$/.test(years) && (
                <p className="error-message">Years must contain only numbers</p>
              )}
              
 </div>
  </div>
 
         
  <div className="side_by_side">
         <div>
          <label htmlFor="secondReviewed">Second Reviewed</label>
          
 </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="secondReviewed"
            id="secondReviewed"
            value={secondReviewed}
            onChange={(e) => setSecondReviewed(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="Second reviewed must contain only letters"
            required
          />
          {secondReviewed.length > 0 && !/^[A-Za-z\s]+$/.test(secondReviewed) && (
                <p className="error-message">Second Reviewed must contain only letters</p>
              )}
</div>
  </div>


  <div className="side_by_side">
         <div>
          <label htmlFor="location">Location</label>
          </div>
          <div style={{marginLeft: "-90px"}}>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="location must contain only letters"
            required
          />
          {location.length > 0 && !/^[A-Za-z\s]+$/.test(location) && (
                <p className="error-message">Location must contain only letters</p>
              )}
              </div>
  </div>
 


          </div>
          </div>
 
          <br/>
          <div className="side_by_side">
         <div>
         <label htmlFor="cvFormat" style={{width:"200px"}}>CV Format (Word file only)</label>
         </div>
          <div style={{marginLeft: "-90px"}}> 
<input
  type="file"
  name="cvFormat"
  id="cvFormat"
  accept=".doc, .docx"
  onChange={(e) => {
    const file = e.target.files[0];
    const fileName = file.name.toLowerCase();
    const allowedExtensions = ['.doc', '.docx'];
    const extension = fileName.substring(fileName.lastIndexOf('.'));
    if (!allowedExtensions.includes(extension)) {
      e.target.value = ''; // Clear the file input
      alert('Please upload a Word document (.doc or .docx) only.');
      return;
    }
    setCvFile(file);
  }}
  required
/>
          
 </div>
  </div>
 <button type="submit" className="vendorsubmit">Submit</button>
         
        </form>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

