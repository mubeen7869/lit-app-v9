import axios from "axios";
 
const api = axios.create({
  baseURL: "http://localhost:3043",
  headers: {
    "Content-type": "application/json"
  }
});
 
export const createHr = async (hr) => {
  try {
    const response = await api.post('/littuss/hr/hrregister', hr);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
 
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/littuss/hr/hrregister/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
 
export const loginUser = async (credentials) => {
  try {
    // console.log(credentials.email);
    const response = await api.post('/littuss/hr/hrlogin', credentials);
    console.log(response.data);
    // alert("User Login successful");
    return response.data;
  } catch (error) {
    alert("User not found. Please sign up first.");
    // console.error('Login failed:', error);
    // throw error;
  }
};
 
export const registerUser = async (hr) => {
  try {
    console.log("hi" + hr);
    const response = await api.post('/littuss/hr/hrregister', hr);
    console.log("end");
    alert("successfully registered");
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};
 
export const loginClient = async (credentials) => {
  try {
    const response = await api.post('/client', credentials);
    console.log(response.data);
    // You can handle the login response as needed
    alert("Client Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;  
  }
};
 
export const vendorDetails = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043/vendorDetails/save/vendorName",
      formData
    );
 
    if (response.status === 200) {
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
      console.log(response);
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 
export const client = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043/client/register",
      formData
    );
 
    if (response.status === 200) {
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 
 
 
 
export const itrecruitment = async (formData) => {
  try {
    const response = await api.post("/itrecruitment/savecandidate", formData);
 
    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};
 
export const getitrecruitment = async (id) => {
  try {
    const response = await api.get(`/itrecruitment/get/${id}`); // Removed unnecessary quotes and curly braces around requirementid
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching Requirement data:', error);
    throw error;
  }
};
 
 
export const requirement = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043/requirement/save/technology",
      formData
    );
    console.log("hi")
    if (response.status === 200) {
      console.log("hi1");
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 
export const Requirement = async (requirementid) => {
  try {
    const response = await api.get(`/requirement/get/${requirementid}`); // Removed unnecessary quotes and curly braces around requirementid
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching Requirement data:', error);
    throw error;
  }
};

export const updateRequirement = async (requirementId, formData) => {
  try {
    const response = await api.put(`/requirement/update/${requirementId}`, formData);
    console.log(response);
    return { success: true, message: 'Data updated successfully' };
  } catch (error) {
    console.error('Error updating the changes:', error);
    throw { success: false, message: 'Failed to update data' };
  }
};
 
export const deleteRequirement = async (requirementId) => {
  try {
    const response = await api.delete(`/requirement/delete/${requirementId}`);
    console.log(response);
    return { success: true, message: 'Data deleted successfully' };
  } catch (error) {
    console.error('Error deleting the data:', error);
    throw { success: false, message: 'Failed to delete data' };
  }
};


 
 
export const ClassDataById = async (id) => {
  try {
    const response = await api.get(`/client/get/${id}`
   
    );
     console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching client data:', error);
    throw error;
  }
};
export const updateClient = async (id, formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.put(`http://localhost:3043/client/update/${id}`, formData);
 
    return { success: true, message: "Data updated successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to update data. Please try again." };
  }
};
export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3043/client/delete/${id}`);
    return { success: true, message: "Data deleted successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to delete data. Please try again." };
  }
}; 

export const AssetRegister  = async (formData, resetFormFields) => {
  try {
    const response = await api.post("/assetsfirstfloor/register", formData);
 
    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};
 
export const SecondAssetRegister  = async (formData, resetFormFields) => {
  try {
    const response = await api.post("/assetsecondfloor/register", formData);
 
    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};

export const DataById = async (id) => {
  try {
    const response = await api.get(`http://localhost:3043/vendorDetails/get/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching client data:', error);
    throw error;
  }
};