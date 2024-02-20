import React, { useState } from "react";
import "./ITRegistration.css";
import {
    itrecruitment,
} from "../../http-common";

export default function ITRegistration() {
    const [formData, setFormData] = useState({
        candidateinfo: {
            name: "",
            mobileNumber: "",
            emailId: "",
            higherDegree: "",
            passoutYear: "",
            collegeName: "",
            university: "",
            presentLocation: "",
            referedBy: "",
            source: "",
        },
        screeningDetails: {
            technology: "",
            ctcLpa: "",
            experience: "",
            expectedCtc: "",
            currentLocation: "",
            jobType: "",
        },
        interviewdetails: {
            interviewSchedule: "",
            l1: "",
            l2: "",
            l3: "",
            hrRound: "",
        },
        status: {
            active: false,
            inactive: false,
        },
        clientsidedetails: {
            clientMobileNumber: "",
            clientEmailId: "",
        },
    });

    const [accordionState, setAccordionState] = useState({
        candidateinfo: false,
        screeningDetails: false,
        interviewdetails: false,
        status: false,
        clientsidedetails: false,
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggleAccordion = (section) => {
        setAccordionState((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const handleInputChange = (section, field, value) => {
        let validationMessage = "";
        // Validate input based on field type (letters, numbers)
        if (
          (field === "mobileNumber" ||
            field === "passoutYear" ||
            field === "ctcLpa" ||
            field === "experience" ||
            field === "expectedCtc") &&
          !/^\d+$/.test(value)
        ) {
          validationMessage = "Please enter only numbers.";
        } else if (
          (field !== "mobileNumber" &&
            field !== "passoutYear" &&
            field !== "ctcLpa" &&
            field !== "experience" &&
            field !== "expectedCtc") &&
          !/^[a-zA-Z\s]+$/.test(value)
        ) {
          validationMessage = "Please enter only letters.";
        }
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
        return validationMessage;
    };

    const handleCheckboxChange = (section, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: !prevData[section][field],
            },
        }));
    };

    const handleReset = () => {
        setFormData({
            candidateinfo: {
                name: "",
                mobileNumber: "",
                emailId: "",
                higherDegree: "",
                passoutYear: "",
                collegeName: "",
                university: "",
                presentLocation: "",
                referedBy: "",
                source: "",
            },
            screeningDetails: {
                technology: "",
                ctcLpa: "",
                experience: "",
                expectedCtc: "",
                currentLocation: "",
                jobType: "",
            },
            interviewdetails: {
                interviewSchedule: "",
                l1: "",
                l2: "",
                l3: "",
                hrRound: "",
            },
            status: {
                active: false,
                inactive: false,
            },
            clientsidedetails: {
                clientMobileNumber: "",
                clientEmailId: "",
            },
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check for empty fields before submitting
    const isEmptyField = Object.values(formData).some((section) =>
    Object.values(section).some((field) => field === "")
  );

  if (isEmptyField) {
    setErrorMessage("Please fill out all required fields.");
    return;
  }

        console.log("Form submitted:", formData);

        try {
            await itrecruitment(formData.candidateinfo);
            setSuccessMessage("Form submitted successfully!");
            handleReset(); // Reset form after successful submission
        } catch (error) {
            setErrorMessage(
                error.response?.data.message ||
                "Failed to connect to the server. Please try again later."
            );
        }
    };

    return (
        <div className="itmain">
            <h4 className="itheading">IT Recruitment Lap Registration</h4>

            <div className="form-section">
                <form >
                    <h3 onClick={() => toggleAccordion("candidateinfo")}>
                        {accordionState.candidateinfo
                            ? "Candidate Details -"
                            : "Candidate Details +"}
                    </h3>
                    {accordionState.candidateinfo && (
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.candidateinfo.name}
                                        onChange={(e) => handleInputChange('candidateinfo', 'name', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="Name must contain only letters"
                                        required
                                   />
                                    {errorMessage && !formData.candidateinfo.name && (
                    <span className="validation-error">{errorMessage}</span>
                  )}
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Number:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        value={formData.candidateinfo.mobileNumber}
                                        onChange={(e) => handleInputChange('candidateinfo', 'mobileNumber', e.target.value)}
                                        pattern="[0-9]*"
                                        title="mobile number must contain only numbers"
                                        required
                                    />
                                     {errorMessage &&
                    !formData.candidateinfo.mobileNumber && (
                      <span className="validation-error">
                        {errorMessage}
                      </span>
                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Email Id:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="emailId"
                                        id="emailId"
                                        value={formData.candidateinfo.emailId}
                                        onChange={(e) => handleInputChange('candidateinfo', 'emailId', e.target.value)}
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // Basic email pattern
                                        title="Please enter a valid email address"
                                        required
                                                        />
                                                        {errorMessage &&
                                                          !formData.candidateinfo.emailId && (
                                                            <span className="validation-error">
                                                              {errorMessage}
                                                            </span>
                                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>Higher Degree:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="higherDegree"
                                        id="higherDegree"
                                        value={formData.candidateinfo.higherDegree}
                                        onChange={(e) => handleInputChange('candidateinfo', 'higherDegree', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="higher degree must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.higherDegree && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>
                            <tr>
                                <td>Passout Year:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="passoutYear"
                                        id="passoutYear"
                                        value={formData.candidateinfo.passoutYear}
                                        onChange={(e) => handleInputChange('candidateinfo', 'passoutYear', e.target.value)}
                                        pattern="[0-9]*"
                                        title="meeting time must contain only numbers"
                                        required
                                      />
                                      {errorMessage &&
                                        !formData.candidateinfo.passoutYear && (
                                          <span className="validation-error">
                                            {errorMessage}
                                          </span>
                                        )}
                                </td>
                            </tr>

                            <tr>
                                <td>College Name:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="collegeName"
                                        id="collegeName"
                                        value={formData.candidateinfo.collegeName}
                                        onChange={(e) => handleInputChange('candidateinfo', 'collegeName', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="college name must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.collegeName && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>

                            <tr>
                                <td>University:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="university"
                                        id="university"
                                        value={formData.candidateinfo.university}
                                        onChange={(e) => handleInputChange('candidateinfo', 'university', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="university must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.university && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>

                            <tr>
                                <td>Present Location</td>
                                <td>
                                    <input
                                        type="text"
                                        name="presentLocation"
                                        id="presentLocation"
                                        value={formData.candidateinfo.presentLocation}
                                        onChange={(e) => handleInputChange('candidateinfo', 'presentLocation', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="present location must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.presentLocation && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>

                            <tr>

                                <td>ReferedBy</td>
                                <td>
                                    <input
                                        type="text"
                                        name="referedBy"
                                        id="referedBy"
                                        value={formData.candidateinfo.referedBy}
                                        onChange={(e) => handleInputChange('candidateinfo', 'referedBy', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="refered by must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.referedBy && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>

                            <tr>
                                <td>Source</td>
                                <td>
                                    <input
                                        type="text"
                                        name="source"
                                        id="source"
                                        value={formData.candidateinfo.source}
                                        onChange={(e) => handleInputChange('candidateinfo', 'source', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="source must contain only letters"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.candidateinfo.source && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>
                            {/* ... (other candidate details fields) */}
                        </table>
                    )}
                </form>
            </div>

            {/* Section: 2 */}

            <div className="form-section">
                <form onSubmit={handleFormSubmit}>
                    <h3 onClick={() => toggleAccordion("screeningDetails")}>
                        {accordionState.screeningDetails
                            ? "Screening Details -"
                            : "Screening Details +"}
                    </h3>
                    {accordionState.screeningDetails && (
                        <table>
                            <tr>
                                <td>Technology:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="technology"
                                        id="technology"
                                        value={formData.screeningDetails.technology}
                                        onChange={(e) => handleInputChange('screeningDetails', 'technology', e.target.value)}
                                        pattern="[A-Za-z\s]+"
                                        title="technology must contain only letters"
                                        required
                                      />
                                      {errorMessage &&
                                        !formData.screeningDetails.technology && (
                                          <span className="validation-error">
                                            {errorMessage}
                                          </span>
                                        )}
                                </td>
                            </tr>
                            <tr>
                                <td>C.T.C LPA:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="ctcLpa"
                                        id="ctcLpa"
                                        value={formData.screeningDetails.ctcLpa}
                                        onChange={(e) => handleInputChange('screeningDetails', 'ctcLpa', e.target.value)}
                                        pattern="[0-9]*"
                                        title=" ctcLpa must contain only numbers"
                                        required
                                              />
                                              {errorMessage &&
                                                !formData.screeningDetails.ctcLpa && (
                                                  <span className="validation-error">
                                                    {errorMessage}
                                                  </span>
                                                )}
                                </td>
                            </tr>
                            <tr>
                                <td>Experience:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="experience"
                                        id="experience"
                                        value={formData.screeningDetails.experience}
                                        onChange={(e) => handleInputChange('screeningDetails', 'experience', e.target.value)}
                                        pattern="[0-9]*"
                                        title="experience must contain only numbers"
                                        required
                                      />
                                      {errorMessage &&
                                        !formData.screeningDetails.experience && (
                                          <span className="validation-error">
                                            {errorMessage}
                                          </span>
                                        )}
                                </td>
                            </tr>
                            <tr>
                                <td>Expected CTC:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="expectedCtc"
                                        id="expectedCtc"
                                        value={formData.screeningDetails.expectedCtc}
                                        onChange={(e) => handleInputChange('screeningDetails', 'expectedCtc', e.target.value)}
                                        pattern="[0-9]*"
                                        title="expectedCtc must contain only numbers"
                                        required
                                      />
                                      {errorMessage &&
                                        !formData.screeningDetails.expectedCtc && (
                                          <span className="validation-error">
                                            {errorMessage}
                                          </span>
                                        )}
                                </td>
                            </tr>
                            <tr>
                                <td>Current Location:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="currentLocation"
                                        id="currentLocation"
                                        value={formData.screeningDetails.currentLocation}
                                        onChange={(e) => handleInputChange('screeningDetails', 'currentLocation', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.screeningDetails.currentLocation && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>

                            <tr>
                                <td>Job Type:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="jobType"
                                        id="jobType"
                                        value={formData.screeningDetails.jobType}
                                        onChange={(e) => handleInputChange('screeningDetails', 'jobType', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.screeningDetails.jobType && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            {/* ... (other candidate details fields) */}
                        </table>
                    )}
                </form>
            </div>

            {/* section 3 */}

            <div className="form-section">
                <form onSubmit={handleFormSubmit}>
                    <h3 onClick={() => toggleAccordion("interviewdetails")}>
                        {accordionState.interviewdetails
                            ? "Interview Details -"
                            : "Interview Details +"}
                    </h3>
                    {accordionState.interviewdetails && (
                        <table>
                            <tr>
                                <td>Interview Schedule:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="interviewschedule"
                                        id="interviewschedule"
                                        value={formData.interviewdetails.interviewSchedule}
                                        onChange={(e) => handleInputChange('interviewdetails', 'interviewSchedule', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.interviewdetails.interviewSchedule && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>L1:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="l1"
                                        id="l1"
                                        value={formData.interviewdetails.l1}
                                        onChange={(e) => handleInputChange('interviewdetails', 'l1', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.interviewdetails.l1 && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>L2:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="l2"
                                        id="l2"
                                        value={formData.interviewdetails.l2}
                                        onChange={(e) => handleInputChange('interviewdetails', 'l2', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.interviewdetails.l2 && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>L3:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="l3"
                                        id="l3"
                                        value={formData.interviewdetails.l3}
                                        onChange={(e) => handleInputChange('interviewdetails', 'l3', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.interviewdetails.l3 && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>HR Round:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="hrround"
                                        id="hrround"
                                        value={formData.interviewdetails.hrRound}
                                        onChange={(e) => handleInputChange('interviewdetails', 'hrRound', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.interviewdetails.hrRound &&
                                          (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                        </table>
                    )}
                </form>
            </div>

            {/* section 4 */}

            <div className="form-section">
                <form onSubmit={handleFormSubmit}>
                    <h3 onClick={() => toggleAccordion("status")}>
                        {accordionState.status ? "Status -" : "Status +"}
                    </h3>
                    {accordionState.status && (
                        <table>
                            <tr>
                                <td>Active:</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="active"
                                        id="active"
                                        checked={formData.status.active}
                                        onChange={() => handleCheckboxChange('status', 'active')}
                                    />
                                     {errorMessage && !formData.status.active && (
                    <span className="validation-error">
                      {errorMessage}
                    </span>
                  )}
                                </td>
                            </tr>
                            <tr>
                                <td>In Active</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="inActive"
                                        id="inActive"
                                        checked={formData.status.inactive}
                                        onChange={() => handleCheckboxChange('status', 'inactive')}
                                    />
                                      {errorMessage && !formData.status.inactive && (
                    <span className="validation-error">
                      {errorMessage}
                    </span>
                  )}
                                </td>
                            </tr>
                        </table>
                    )}
                </form>
            </div>

            {/* section 5 */}

            <div className="form-section">
                <form onSubmit={handleFormSubmit}>
                    <h3 onClick={() => toggleAccordion("clientsidedetails")}>
                        {accordionState.clientsidedetails
                            ? "Client Side Details -"
                            : "Client silde Details +"}
                    </h3>
                    {accordionState.clientsidedetails && (
                        <table>
                            <tr>
                                <td>Mobile Number:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="clientMobileNumber"
                                        id="clientMobileNumber"
                                        value={formData.clientsidedetails.clientMobileNumber}
                                        onChange={(e) => handleInputChange('clientsidedetails', 'clientMobileNumber', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.clientsidedetails.clientMobileNumber && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                            <tr>
                                <td>Email Id:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="clientEmailId"
                                        id="clientEmailId"
                                        value={formData.clientsidedetails.clientEmailId}
                                        onChange={(e) => handleInputChange('clientsidedetails', 'clientEmailId', e.target.value)}
                                        required
                                        />
                                        {errorMessage &&
                                          !formData.clientsidedetails.clientEmailId && (
                                            <span className="validation-error">
                                              {errorMessage}
                                            </span>
                                          )}
                                </td>
                            </tr>
                        </table>
                    )}
                </form>
            </div>

            <button type="submit" className="itlapsubmit" onClick={handleFormSubmit}>Submit</button>
            {/* <button type="button" onClick={handleReset}>Reset</button> */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}







