import React, { useState } from "react";
import "./Add_Requirement.css";
import { requirement } from "../../http-common";
 
const Add_Requirement = () => {
  const [sector, setSector] = useState("IT"); 
  const [selectedITOption, setSelectedITOption] = useState("");
  const [selectedNon_ITOption, setSelectedNon_ITOption] = useState("");
  const [gender, setGender] = useState(null);
  const [selectedActive, setSelectedActive] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [experience, setExperience] = useState("");
  const [clientName, setClientName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [clientNameError, setClientNameError] = useState("");
  const [othersValue, setOthersValue] = useState("");
 
  const options1 = [
    { value: "IT", label: "IT" },
    { value: "Non IT", label: "Non IT" },
  ];
 
  const optionsIT = ["Python", "Java", "Informatica", "Splunk", "DevOps","Others"];
 
  const optionsNon_IT = [
    "GIS",
    "Autocad",
    "ARC",
    "Fusion-X",
    "Microstations",
    "Others"
  ];
 
  const handleSectorChange = (event) => {
    const sectorValue = event.target.value;
    setSector(sectorValue);
    setSelectedITOption("");
    setSelectedNon_ITOption("");
  };
 
  const handleDropdownChange = (event) => {
    const value = event.target.value;
    if (sector === "IT") {
      setSelectedITOption(value);
    } else if (sector === "Non IT") {
      setSelectedNon_ITOption(value);
    }
  };
 
  const handleFullNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
      setFullName(value);
      setFullNameError("");
    } else {
      setFullNameError("Only letters and spaces are allowed.");
    }
  };
 
  const handleExperienceChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) || value === "") {
      setExperience(value);
      setExperienceError("");
    } else {
      setExperienceError("Only numbers are allowed.");
    }
  };
 
  const handleClientNameChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
      setClientName(value);
      setClientNameError("");
    } else {
      setClientNameError("Only letters and spaces are allowed.");
    }
  };
 
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };
 
  const handleActiveChange = (selectedStatus) => {
    setSelectedActive(selectedStatus);
  };
 
  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleOthersChange = (event) => {
    const value = event.target.value;
    setOthersValue(value);
  };
 
  const handleSubmit = async () => {
    if (!isAgreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    if (fullName.trim() === "" || experience.trim() === "" || clientName.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }
 
    if (fullNameError !== "" || experienceError !== "" || clientNameError !== "") {
      alert("Please correct the errors in the form.");
      return;
    }
 
    try {
      const formData = {
        fullName,
        experience,
        clientName,
        sector,
        selectedITOption,
        selectedNon_ITOption,
        gender,
        selectedActive,
        isAgreed,
      };
 
      const setSuccessMessage = (message) => {
        // Handle the success message, e.g., display it to the user
      };
 
      const resetFormFields = () => {
        setSector("IT");
        setSelectedITOption("");
        setSelectedNon_ITOption("");
        setGender(null);
        setSelectedActive(null);
        setIsAgreed(false);
        setFullName("");
        setExperience("");
        setClientName("");
        setFullNameError("");
        setExperienceError("");
        setClientNameError("");
        setOthersValue("");
      };
 
      // Assuming you have setErrorMessage as part of your component state
      const setErrorMessage = () => {};
 
      const response = await requirement(
        formData,
        setSuccessMessage,
        resetFormFields,
        setErrorMessage
      );
 
      // Handle success
      // console.log("Server Response:", response);
      // Display success message
      setSuccessMessage("Form Submitted!");
      alert("Data Posted Successfully");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      // Display error message
      window.alert("Failed to submit form. Please try again.");
    }
  };
 
  // const handleReset = () => {
  //   // Reset form fields here
  //   setSector("IT");
  //   setSelectedITOption("");
  //   setSelectedNon_ITOption("");
  //   setGender(null);
  //   setSelectedActive(null);
  //   setIsAgreed(false);
  //   setFullName("");
  //   setExperience("");
  //   setClientName("");
  //   setFullNameError("");
  //   setExperienceError("");
  //   setClientNameError("");
  //   setOthersValue("");
  // };
 
  return (
    <div className="add-requirement-container">
      <h4 className="addheading ">Add Requirement</h4>
      <table>
        <tbody>
          <tr> 
            <td>Full Name</td>
            <td>
              <input
           
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
              />
              {fullNameError && <span className="error">{fullNameError}</span>}
            </td>
          </tr>
 
          <tr>
            <td>Experience</td>
            <td>
              <input
                type="text"
                name="experience"
                id="experience"
                value={experience}
                onChange={handleExperienceChange}
              />
              {experienceError && <span className="error">{experienceError}</span>}
            </td>
          </tr>
 
          <tr>
            <td>Client Name</td>
            <td>
              <input
                type="text"
                name="clientName"
                id="clientName"
                value={clientName}
                onChange={handleClientNameChange}
              />
              {clientNameError && <span className="error">{clientNameError}</span>}
            </td>
          </tr>
 
          {/* Sector */}
<tr>
  <td>Sector</td>
  <td>
    <label htmlFor="dropdown1" className="options">Select</label> {"\t"}{"\t"}
    <select
      id="dropdown1"
      value={sector}
      onChange={handleSectorChange}
    >
      {options1.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </td>
</tr>
 
{/* IT options */}
{sector === "IT" && (
  <tr>
    <td>IT</td>
    <td>
      <label htmlFor="singleDropdown"className="options">Select an option:</label>
      <select
        id="singleDropdown"
        value={selectedITOption}
        onChange={handleDropdownChange}
      >
        {optionsIT.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
          
        ))}
        
      </select>
      {selectedITOption === "Others" && (
                  <input
                    type="text"
                    id="othersTextBox"
                    value={othersValue}
                    onChange={handleOthersChange}
                    placeholder="Enter other IT technology..."
                  />
      )}
    </td>
  </tr>
)}
 
{/* Non IT options */}
{sector === "Non IT" && (
  <tr>
    <td>Non IT</td>
    <td>
      <label htmlFor="singleDropdown" className="options">Select an option:</label>
      <select
        id="singleDropdown"
        value={selectedNon_ITOption}
        onChange={handleDropdownChange}
      >
        {optionsNon_IT.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedNon_ITOption === "Others" && (
                  <input
                    type="text"
                    id="othersTextBox"
                    value={othersValue}
                    onChange={handleOthersChange}
                    placeholder="Enter other non-IT technology..."
                  />
      )}
    </td>
  </tr>
)}
 
{/* Gender */}
<tr>
  <td>Gender</td>
  <td>
    <label className="Genderplaceing">
      <input
        className="radio"
        type="radio"
        value="Male"
        checked={gender === "Male"}
        onChange={() => handleGenderChange("Male")}
      />
     <span style={{fontSize:'14px', fontWeight:'lighter'}}>Male</span>
    </label>{"\t"}{"\t"}
    <label className="Genderplaceing">
      <input
        className="radio"
        type="radio"
        value="Female"
        checked={gender === "Female"}
        onChange={() => handleGenderChange("Female")}
      />
     <span style={{fontSize:'14px', fontWeight:'lighter'}}>Female</span>
    </label>
  </td>
</tr>
 
{/* Status */}
<tr>
  <td>Status</td>
  <td>
    <label className="Activeplaceing">
      <input className="radio"
        type="radio"
        value="Active"
        checked={selectedActive === "Active"}
        onChange={() => handleActiveChange("Active")}
      />
      <span style={{fontSize:'14px', fontWeight:'lighter'}}>Active</span>
    </label>{"\t"}{"\t"}
    <label className="Activeplaceing">
      <input className="radio"
        type="radio"
        value="Non Active"
        checked={selectedActive === "Non Active"}
        onChange={() => handleActiveChange("Non Active")}
      />
      <span style={{fontSize:'14px', fontWeight:'lighter'}}>Non Active</span>
    </label>
  </td>
</tr>
 
        </tbody>
      </table>
 
    <div className="check1">
<label>
<input
            className="radio"
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreementChange}
          />
          I agree to the terms and conditions
</label>
</div>
      <div>
        <div className="final">
          <button onClick={handleSubmit}>Submit</button>
          {"\t"}
          {/* <button onClick={handleReset}>Reset</button> */}
        </div>
      </div>
    </div>
  );
};


 
export default Add_Requirement;



