// import Hr from "./Hr_Home/Hr_Home";
import Main from "./main/Main";
 import Forget_Password from "./Forget_Password/Forget_Password"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hr_Home from "./Hr_Home/Hr_Home";
import Timesheet from "./SideBar/Timesheet/Timesheet";
import TimeTracker from "./SideBar/TimeTracker/TimeTracker";
import EmployeeProfile from "./SideBar/EmployeeProfile/EmployeeProfile";
import RaiseTicket from "./SideBar/RaiseTicket/RaiseTicket";
import Settings from "./SideBar/Settings/Settings";
import Support from "./SideBar/Support/Support";
import ClientRegistration from "./Hr_lap/Client lap/ClientRegistration/Registration/ClientRegistration";
import Userinfo from "./Userinfo/Userinfo";
import Vender_registration from "./Hr_lap/Client lap/Vender lap/Registration/Vender_registration";
import Vendor_Search from "./Hr_lap/Client lap/Vender lap/Registration/Search/Vendor_Search";
import Vender_management from "./Hr_lap/Client lap/Vender lap/Registration/Management/Vender_management";
import ClientSearch from "./Hr_lap/Client lap/ClientRegistration/Search/ClientSearch";
import ITRegistration from "./it_lap/it_lap_registration/ITRegistration";
// import FirstFloor from "./assets lap/assetregistration/1stfloor/FirstFloor";
// import SecondFloor from "./assets lap/assetregistration/2ndfloor/SecondFloor";
import Add_Requirement from "./Requirement/AddRequirement/Add_Requirement";
import ClientManagement from "./Hr_lap/Client lap/ClientRegistration/Management/ClientManagement";
import Intern_Register from "./Hr_lap/internship lap/Internship_Register/Intern_Register";
import Intern_Search from "./Hr_lap/internship lap/internship_Search/Intern_Search";
import Intern_Management from "./Hr_lap/internship lap/internship_management/Intern_Management";
import Employee_Register from "./employee lap/employeeRegister/Employee_Register";
import Employee_Search from "./employee lap/employeeSearch/Employee_Search";
import Employee_Management from "./employee lap/employeeManagement/Employee_Management";
import RequirementSearch from "./Requirement/RequirementSearch/RequirementSearch";
import RequirementManagement from "./Requirement/RequirementManagement/RequirementManagement";
import AssetRegistrations from "./assets lap/assetregistration/AssetsRegister";
import ITSearch from "./it_lap/it_lap_Search/ITSearch";



function App() {
  return (
    <BrowserRouter>
      <Routes>
     
      <Route path="/" element={<Main />} />
      <Route path="/forgetpassword" element={<Forget_Password/>}/> 
        <Route path="/signUp" element={<Main/>}/>
        <Route path="/home" element={<Hr_Home/>}>
       
          <Route path="/home/clientRegistration" element={<ClientRegistration/>}/>
          <Route path="/home/clientSearch" element={<ClientSearch/>}/>
          <Route path="/home/clientMangement" element={<ClientManagement/>}/>
         


          <Route path="/home/venderRegistration" element={<Vender_registration/>}/>
          <Route path="/home/venderSearch" element={<Vendor_Search/>}/>
          <Route path="/home/venderManagement" element={<Vender_management/>}/>

          <Route path="/home/internRegistation" element={<Intern_Register/>}/>
          <Route path="/home/internSearch" element={<Intern_Search/>}/>
          <Route path="/home/internManagement" element={<Intern_Management/>}/>


          <Route path="/home/employeeRegistation" element={<Employee_Register/>}/>
          <Route path="/home/employeeSearch" element={<Employee_Search/>}/>
          <Route path="/home/employeeManagement" element={<Employee_Management/>}/>


          <Route path="/home/assetsRegistration" element={<AssetRegistrations/>}/>



          {/* <Route path="/home/assetsRegistration1stFloor" element={<FirstFloor/>}/>
          <Route path="/home/assetsRegistration2stFloor" element={<SecondFloor/>}/>

          <Route path="/home/assetsSearch1stFloor" element={<First_Floor/>}/>
          <Route path="/home/assetsSearch2stFloor" element={<Second_Floor/>}/>

          <Route path="/home/assetsManagement1stFloor" element={<First_Floor/>}/>
          <Route path="/home/assetsManagement2stFloor" element={<Second_Floor/>}/> */}

          <Route path="/home/itlapregister" element={<ITRegistration/>}/>
          <Route path="/home/itsearch" element={<ITSearch/>}/>


          <Route path="/home/addRequirement" element={<Add_Requirement/>}/>
          <Route path="/home/requirementSearch" element={<RequirementSearch/>}/>
          <Route path="/home/requirementManagement" element={<RequirementManagement/>}/>
          

          <Route path="/home/timetracker" element={<TimeTracker/>}/>
          <Route path="/home/employeeprofile" element={<EmployeeProfile/>}/>
          <Route path="/home/raiseticket" element={<RaiseTicket/>}/>
          <Route path="/home/timesheet" element={<Timesheet/>}/>
          <Route path="/home/settings" element={<Settings/>}/>
          <Route path="/home/support" element={<Support/>}/>

          <Route path="/home/userinfo" element={<Userinfo/>}/>

           </Route>
        {/* <Route path="/Forget_Password" element={<Forget_Password/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}
export default App;
