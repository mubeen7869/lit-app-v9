
import React, { useState } from "react";

import "./AssetsRegister.css"
import { AssetRegister,SecondAssetRegister } from "../../http-common";

function AssetRegistrations() {
  const [floor, setFloor] = useState('first');
  // const [firstName, setFirstName] = useState('');
  // const [cellNo, setCellNo] = useState('');
  // const [moveName, setMoveName] = useState('');
  // const [ticketNo, setTicketNo] = useState('');

  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };


  //  first floor s
   
     const [accordionState, setAccordionState] = useState({
    Chairs: {
      isOpen: false,
      normalChairs: "",
      wheelChairs: "",
    },
    Remote: {
      isOpen: false,
      acRemotes: "",
      fanRemotes: "",
    },
    Pedestals: {
      isOpen: false,
      pedestals: "",
    },
    AirConditioners: {
      isOpen: false,
      airConditioners: "",
    },
    OtherAssets: {
      isOpen: false,
      laptops: "",
      mouses: "",
      chargers: "",
      bags: "",
    },
    Fans: {
      isOpen: false,
      fans: "",
    },
    Dustbins: {
      isOpen: false,
      dustbins: "",
    },
    Tables: {
      isOpen: false,
      tables: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNormalChairsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Chairs: {
        ...prevState.Chairs,
        normalChairs: value,
      },
    }));
  };
  
  const handleWheelChairsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Chairs: {
        ...prevState.Chairs,
        wheelChairs: value,
      },
    }));
  };


  const handleACRemotesChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Remote: {
        ...prevState.Remote,
        acRemotes: value,
      },
    }));
  };
  
  const handleFanRemotesChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Remote: {
        ...prevState.Remote,
        fanRemotes: value,
      },
    }));
  };
  
  const handlePedestalsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Pedestals: {
        ...prevState.Pedestals,
        pedestals: value,
      },
    }));
  };
  
  const handleAirConditionersChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      AirConditioners: {
        ...prevState.AirConditioners,
        airConditioners: value,
      },
    }));
  };
  
  const handleLaptopsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      OtherAssets: {
        ...prevState.OtherAssets,
        laptops: value,
      },
    }));
  };
  
  const handleMousesChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      OtherAssets: {
        ...prevState.OtherAssets,
        mouses: value,
      },
    }));
  };
  
  const handleChargersChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      OtherAssets: {
        ...prevState.OtherAssets,
        chargers: value,
      },
    }));
  };
  
  const handleBagsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      OtherAssets: {
        ...prevState.OtherAssets,
        bags: value,
      },
    }));
  };
  
  const handleFansChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Fans: {
        ...prevState.Fans,
        fans: value,
      },
    }));
  };
  
  const handleDustbinsChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Dustbins: {
        ...prevState.Dustbins,
        dustbins: value,
      },
    }));
  };
  
  const handleTablesChange = (value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      Tables: {
        ...prevState.Tables,
        tables: value,
      },
    }));
  };
  



  const resetFormFields = () => {
    setAccordionState({
      Chairs: { isOpen: false, normalChairs: "", wheelChairs: "" },
      Remote: { isOpen: false, acRemotes: "", fanRemotes: "" },
      Pedestals: { isOpen: false, pedestals: "" },
      AirConditioners: { isOpen: false, airConditioners: "" },
      OtherAssets: { isOpen: false, laptops: "", mouses: "", chargers: "", bags: "" },
      Fans: { isOpen: false, fans: "" },
      Dustbins: { isOpen: false, dustbins: "" },
      Tables: { isOpen: false, tables: "" },
    });
  };

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        isOpen: !prevState[section].isOpen,
      },
    }));
  };

  const handleInputChange = (section, field, value) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const requiredFields = [
        accordionState.Chairs.normalChairs,
        accordionState.Chairs.wheelChairs,
        accordionState.Remote.acRemotes,
        accordionState.Remote.fanRemotes,
        accordionState.Pedestals.pedestals,
        accordionState.AirConditioners.airConditioners,
        accordionState.OtherAssets.laptops,
        accordionState.OtherAssets.mouses,
        accordionState.OtherAssets.chargers,
        accordionState.OtherAssets.bags,
        accordionState.Fans.fans,
        accordionState.Dustbins.dustbins,
        accordionState.Tables.tables,
      ];

      if (requiredFields.some((field) => field.trim() === "")) {
        throw new Error("All fields are required");
      }

      const dataToSend = {
        ...accordionState.Chairs,
        ...accordionState.Remote,
        ...accordionState.Pedestals,
        ...accordionState.AirConditioners,
        ...accordionState.OtherAssets,
        ...accordionState.Fans,
        ...accordionState.Dustbins,
        ...accordionState.Tables,
      };

      await AssetRegister(dataToSend, resetFormFields);
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
       // Code for second floor submission
    if (floor === 'second') {
      const secondFloorDataToSend = {
        // Structure your dataToSend object for second floor similarly to the first floor
      };
      await SecondAssetRegister(dataToSend, resetFormFields);
      console.log(dataToSend);
      setSuccessMessage("Second floor data posted successfully!");
    }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
      setErrorMessage(error.message);
    }
  };
 

  //  first floor e


  return (
    <div>
  <div className='title'><h2>Asset Registration Information</h2></div>
  
  <div className='radio1'>
    <label htmlFor="firstFloor" >First Floor  </label>
      <input 
        type="radio"
        id="firstFloor"
        name="floor"
        value="first"
        checked={floor === 'first'}
        onChange={handleFloorChange}
        style={{marginLeft:"-140px"}}
      />
    

    <label htmlFor="secondFloor">Second Floor</label>
      <input 
        type="radio"
        id="secondFloor"
        name="floor"
        value="second"
        checked={floor === 'second'}
        onChange={handleFloorChange}
        style={{marginLeft:"-140px"}}
      />
    
  </div>

  {floor === 'first' && (
    
    <div className="firstfloormain">
    <h4 className="firstfloorheading">1st Floor Assets</h4>
    {/* Your form sections and inputs go here */}
  {/* start */}

    {/* Section 1: chairs */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("Chairs")}>
        {accordionState.Chairs.isOpen ? "1. Chairs  -" : "1. Chairs +"}
      </h6>
      {accordionState.Chairs.isOpen && (
        <table>

          <tr>
            <td>Normal Chairs</td>
            <td>
              <input
                type="text"
                value={accordionState.Chairs.normalChairs}
                onChange={(e) => handleNormalChairsChange(e.target.value)}
                pattern="[0-9]*"
                title="Normal Chairs must contain only numbers"
                required
              />
              {accordionState.Chairs.normalChairs.length > 0 && !/^[0-9]*$/.test(accordionState.Chairs.normalChairs) && (
                <p className="error-message">Normal Chairs must contain only numbers</p>
              )}
            </td>
          </tr>


          <tr>
            <td>Wheel Chairs:</td>
            <td >
              <input
                type="text"
                value={accordionState.Chairs.wheelChairs}
                onChange={(e) => handleWheelChairsChange(e.target.value)}
                pattern="[0-9]*"
                title="Wheel Chairs must contain only numbers"
                required
              />
              {accordionState.Chairs.wheelChairs.length > 0 && !/^[0-9]*$/.test(accordionState.Chairs.wheelChairs) && (
                <p className="error-message">Wheel Chairs must contain only numbers</p>
              )}


            </td>
          </tr>



        </table>
      )}
    </div>

    {/* Section 2: Remote */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("Remote")}>
        {accordionState.Remote.isOpen ? "2. Remotes  -" : "2. Remotes +"}
      </h6>
      {accordionState.Remote.isOpen && (
        <table>
          <tr>
            <td>AC Remotes:</td>
            <td>
              <input
                type="text"
                value={accordionState.Remote.acRemotes}
                onChange={(e) => handleACRemotesChange(e.target.value)}
                pattern="[0-9]*"
                title="AC Remotes must contain only numbers"
                required
              />

              {accordionState.Remote.acRemotes.length > 0 && !/^[0-9]*$/.test(accordionState.Remote.acRemotes) && (
                <p className="error-message">AC Remotes must contain only numbers</p>
              )}

            </td>
          </tr>
          <tr>
            <td>Fan Remotes:</td>
            <td>
              <input
                type="text"
                value={accordionState.Remote.fanRemotes}
                onChange={(e) => handleFanRemotesChange(e.target.value)}
                pattern="[0-9]*"
                title="Fan Remotes must contain only numbers"
                required
              />
              {accordionState.Remote.fanRemotes.length > 0 && !/^[0-9]*$/.test(accordionState.Remote.fanRemotes) && (
                <p className="error-message">Fan Remotes must contain only numbers</p>
              )}

            </td>
          </tr>
        </table>
      )}
    </div>

    {/* Section 3: Pedestals */}
    <div className="form-section">
      <h6>
        3. Pedestals
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Pedestals.pedestals}
              onChange={(e) => handlePedestalsChange(e.target.value)}
              pattern="[0-9]*"
              title="Pedestals must contain only numbers"
              required
            />

            {accordionState.Pedestals.pedestals.length > 0 && !/^[0-9]*$/.test(accordionState.Pedestals.pedestals) && (
              <p className="error-message">Pedestals must contain only numbers</p>
            )}

          </td>
        </tr>
      </table>

    </div>
    {/* Section 4: AirConditioners */}
    <div className="form-section">
      <h6 >

        4. AirConditioners

      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.AirConditioners.airConditioners}
              onChange={(e) => handleAirConditionersChange(e.target.value)}
              pattern="[0-9]*"
              title="AirConditioners must contain only numbers"
              required
            />

            {accordionState.AirConditioners.airConditioners.length > 0 && !/^[0-9]*$/.test(accordionState.AirConditioners.airConditioners) && (
              <p className="error-message">AirConditioners must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>



    </div>
    {/* Section 5: OtherAssets */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("OtherAssets")}>
        {accordionState.OtherAssets.isOpen
          ? "5. OtherAssets  -"
          : "5. OtherAssets +"}
      </h6>
      {accordionState.OtherAssets.isOpen && (
        <table>
          <tr>
            <td>Laptops</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.laptops}
                onChange={(e) => handleLaptopsChange(e.target.value)}
                pattern="[0-9]*"
                title="Laptops must contain only numbers"
                required
              />

              {accordionState.OtherAssets.laptops.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.laptops) && (
                <p className="error-message">Laptops must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Mouses:</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.mouses}
                onChange={(e) => handleMousesChange(e.target.value)}
                pattern="[0-9]*"
                title="Mouses must contain only numbers"
                required
              />
              {accordionState.OtherAssets.mouses.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.mouses) && (
                <p className="error-message">Mouses must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Chargers</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.chargers}
                onChange={(e) => handleChargersChange(e.target.value)}
                pattern="[0-9]*"
                title="Chargers must contain only numbers"
                required
              />
              {accordionState.OtherAssets.chargers.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.chargers) && (
                <p className="error-message">Chargers must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Bags</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.bags}
                onChange={(e) => handleBagsChange(e.target.value)}
                pattern="[0-9]*"
                title="Bags must contain only numbers"
                required
              />
              {accordionState.OtherAssets.bags.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.bags) && (
                <p className="error-message">Bags must contain only numbers</p>
              )}
            </td>
          </tr>
        </table>
      )}
    </div>
    {/* Section 6: Fans */}
    <div className="form-section">
      <h6 >
        6. Fans
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Fans.fans}
              onChange={(e) => handleFansChange(e.target.value)}
              pattern="[0-9]*"
              title="Fans must contain only numbers"
              required
            />
            {accordionState.Fans.fans.length > 0 && !/^[0-9]*$/.test(accordionState.Fans.fans) && (
              <p className="error-message">Fans must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>


    </div>
    {/* Section 7: Dustbins */}
    <div className="form-section">
      <h6 >
        7. Dustbins
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Dustbins.dustbins}
              onChange={(e) => handleDustbinsChange(e.target.value)}
              pattern="[0-9]*"
              title="Dustbins must contain only numbers"
              required
            />

            {accordionState.Dustbins.dustbins.length > 0 && !/^[0-9]*$/.test(accordionState.Dustbins.dustbins) && (
              <p className="error-message">Dustbins must contain only numbers</p>
            )}

          </td>
        </tr>
      </table>

    </div>
    {/* Section 8: Tables */}
    <div className="form-section">
      <h6 >
        8. Tables
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Tables.tables}
              onChange={(e) => handleTablesChange(e.target.value)}
              pattern="[0-9]*"
              title="Tables must contain only numbers"
              required
            />
            {accordionState.Tables.tables.length > 0 && !/^[0-9]*$/.test(accordionState.Tables.tables) && (
              <p className="error-message">Tables must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>

    </div>

    {/* end */}

    <div className="addsubmit">
      <button onClick={handleSubmit}>Submit</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  </div>


  )}

  {floor === 'second' && (
    

    <div className="firstfloormain">
    <h4 className="firstfloorheading">2nd Floor Assets</h4>
    {/* Your form sections and inputs go here */}
  {/* start */}

    {/* Section 1: chairs */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("Chairs")}>
        {accordionState.Chairs.isOpen ? "1. Chairs  -" : "1. Chairs +"}
      </h6>
      {accordionState.Chairs.isOpen && (
        <table>

          <tr>
            <td>Normal Chairs</td>
            <td>
              <input
                type="text"
                value={accordionState.Chairs.normalChairs}
                onChange={(e) => handleNormalChairsChange(e.target.value)}
                pattern="[0-9]*"
                title="Normal Chairs must contain only numbers"
                required
              />
              {accordionState.Chairs.normalChairs.length > 0 && !/^[0-9]*$/.test(accordionState.Chairs.normalChairs) && (
                <p className="error-message">Normal Chairs must contain only numbers</p>
              )}
            </td>
          </tr>


          <tr>
            <td>Wheel Chairs:</td>
            <td >
              <input
                type="text"
                value={accordionState.Chairs.wheelChairs}
                onChange={(e) => handleWheelChairsChange(e.target.value)}
                pattern="[0-9]*"
                title="Wheel Chairs must contain only numbers"
                required
              />
              {accordionState.Chairs.wheelChairs.length > 0 && !/^[0-9]*$/.test(accordionState.Chairs.wheelChairs) && (
                <p className="error-message">Wheel Chairs must contain only numbers</p>
              )}


            </td>
          </tr>



        </table>
      )}
    </div>

    {/* Section 2: Remote */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("Remote")}>
        {accordionState.Remote.isOpen ? "2. Remotes  -" : "2. Remotes +"}
      </h6>
      {accordionState.Remote.isOpen && (
        <table>
          <tr>
            <td>AC Remotes:</td>
            <td>
              <input
                type="text"
                value={accordionState.Remote.acRemotes}
                onChange={(e) => handleACRemotesChange(e.target.value)}
                pattern="[0-9]*"
                title="AC Remotes must contain only numbers"
                required
              />

              {accordionState.Remote.acRemotes.length > 0 && !/^[0-9]*$/.test(accordionState.Remote.acRemotes) && (
                <p className="error-message">AC Remotes must contain only numbers</p>
              )}

            </td>
          </tr>
          <tr>
            <td>Fan Remotes:</td>
            <td>
              <input
                type="text"
                value={accordionState.Remote.fanRemotes}
                onChange={(e) => handleFanRemotesChange(e.target.value)}
                pattern="[0-9]*"
                title="Fan Remotes must contain only numbers"
                required
              />
              {accordionState.Remote.fanRemotes.length > 0 && !/^[0-9]*$/.test(accordionState.Remote.fanRemotes) && (
                <p className="error-message">Fan Remotes must contain only numbers</p>
              )}

            </td>
          </tr>
        </table>
      )}
    </div>

    {/* Section 3: Pedestals */}
    <div className="form-section">
      <h6>
        3. Pedestals
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Pedestals.pedestals}
              onChange={(e) => handlePedestalsChange(e.target.value)}
              pattern="[0-9]*"
              title="Pedestals must contain only numbers"
              required
            />

            {accordionState.Pedestals.pedestals.length > 0 && !/^[0-9]*$/.test(accordionState.Pedestals.pedestals) && (
              <p className="error-message">Pedestals must contain only numbers</p>
            )}

          </td>
        </tr>
      </table>

    </div>
    {/* Section 4: AirConditioners */}
    <div className="form-section">
      <h6 >

        4. AirConditioners

      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.AirConditioners.airConditioners}
              onChange={(e) => handleAirConditionersChange(e.target.value)}
              pattern="[0-9]*"
              title="AirConditioners must contain only numbers"
              required
            />

            {accordionState.AirConditioners.airConditioners.length > 0 && !/^[0-9]*$/.test(accordionState.AirConditioners.airConditioners) && (
              <p className="error-message">AirConditioners must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>



    </div>
    {/* Section 5: OtherAssets */}
    <div className="form-section">
      <h6 onClick={() => toggleAccordion("OtherAssets")}>
        {accordionState.OtherAssets.isOpen
          ? "5. OtherAssets  -"
          : "5. OtherAssets +"}
      </h6>
      {accordionState.OtherAssets.isOpen && (
        <table>
          <tr>
            <td>Laptops</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.laptops}
                onChange={(e) => handleLaptopsChange(e.target.value)}
                pattern="[0-9]*"
                title="Laptops must contain only numbers"
                required
              />

              {accordionState.OtherAssets.laptops.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.laptops) && (
                <p className="error-message">Laptops must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Mouses:</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.mouses}
                onChange={(e) => handleMousesChange(e.target.value)}
                pattern="[0-9]*"
                title="Mouses must contain only numbers"
                required
              />
              {accordionState.OtherAssets.mouses.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.mouses) && (
                <p className="error-message">Mouses must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Chargers</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.chargers}
                onChange={(e) => handleChargersChange(e.target.value)}
                pattern="[0-9]*"
                title="Chargers must contain only numbers"
                required
              />
              {accordionState.OtherAssets.chargers.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.chargers) && (
                <p className="error-message">Chargers must contain only numbers</p>
              )}
            </td>
          </tr>
          <tr>
            <td>Bags</td>
            <td>
              <input
                type="text"
                value={accordionState.OtherAssets.bags}
                onChange={(e) => handleBagsChange(e.target.value)}
                pattern="[0-9]*"
                title="Bags must contain only numbers"
                required
              />
              {accordionState.OtherAssets.bags.length > 0 && !/^[0-9]*$/.test(accordionState.OtherAssets.bags) && (
                <p className="error-message">Bags must contain only numbers</p>
              )}
            </td>
          </tr>
        </table>
      )}
    </div>
    {/* Section 6: Fans */}
    <div className="form-section">
      <h6 >
        6. Fans
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Fans.fans}
              onChange={(e) => handleFansChange(e.target.value)}
              pattern="[0-9]*"
              title="Fans must contain only numbers"
              required
            />
            {accordionState.Fans.fans.length > 0 && !/^[0-9]*$/.test(accordionState.Fans.fans) && (
              <p className="error-message">Fans must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>


    </div>
    {/* Section 7: Dustbins */}
    <div className="form-section">
      <h6 >
        7. Dustbins
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Dustbins.dustbins}
              onChange={(e) => handleDustbinsChange(e.target.value)}
              pattern="[0-9]*"
              title="Dustbins must contain only numbers"
              required
            />

            {accordionState.Dustbins.dustbins.length > 0 && !/^[0-9]*$/.test(accordionState.Dustbins.dustbins) && (
              <p className="error-message">Dustbins must contain only numbers</p>
            )}

          </td>
        </tr>
      </table>

    </div>
     {/* Section 8: Tables */}
     <div className="form-section">
      <h6 >
        8. Tables
      </h6>

      <table>
        <tr>
          <td>
            <input
              type="text"
              value={accordionState.Tables.tables}
              onChange={(e) => handleTablesChange(e.target.value)}
              pattern="[0-9]*"
              title="Tables must contain only numbers"
              required
            />
            {accordionState.Tables.tables.length > 0 && !/^[0-9]*$/.test(accordionState.Tables.tables) && (
              <p className="error-message">Tables must contain only numbers</p>
            )}
          </td>
        </tr>
      </table>

    </div>

    {/* end */}

    <div className="addsubmit">
      <button onClick={handleSubmit}>Submit</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  </div>

    

  )}
</div>

  );
}

export default AssetRegistrations;