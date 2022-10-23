import { Box } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBank from "../AddBank/AddBank";
import Agent from "../Agent/Agent";
import AllAgent from "../Agent/AllAgent";
import Deactivate from "../Agent/Deactivate";

import Reject from "../Agent/Reject";
import BankDetails from "../BankDetails/BankDetails";
import ChartOfAccount from "../ChartOfAccount/ChartOfAccount";
import ChartOfAccountDetails from "../ChartOfAccount/ChartOfAccountDetails";
import AddCustomer from "../Customer/AddCustomer";
import Customer from "../Customer/Customer";
import DashboardComponent from "../Dashboard/DashboardComponent/DashboardComponent";
import ManageSetup from "../Dashboard/DashboardMain/Setup/ManageSetup/ManageSetup";
import EmployeeDetailsForm from "../EmployeeDetailsForm/EmployeeDetailsForm";
import Employees from "../Employees/Employees";
import AttandanceDetail from "../EmployeeTable/AttandanceDetail";
import EmpDetails from "../EmployeeTable/EmpDetails";
import EmployeeInfoTest from "../EmployeeTable/EmployeeInfoTest";
import ActivityLog from "../FlyFarInternational/ActivityLog";
import Booking from "../FlyFarInternational/Booking";
import All from "../FlyFarInternational/BookingComponents/All";
import BookingDetails from "../FlyFarInternational/BookingComponents/BookingDetails";
import Cancelled from "../FlyFarInternational/BookingComponents/Cancelled";
import Expired from "../FlyFarInternational/BookingComponents/Expired";
import Hold from "../FlyFarInternational/BookingComponents/Hold";
import BookHoldData from "../FlyFarInternational/BookingComponents/BookHoldData/BookHoldData";

import Issued from "../FlyFarInternational/BookingComponents/Issued";
import Refund from "../FlyFarInternational/BookingComponents/Refund";
import Reissued from "../FlyFarInternational/BookingComponents/Reissued";
import Ticketed from "../FlyFarInternational/BookingComponents/Ticketed";
import Void from "../FlyFarInternational/BookingComponents/Void";
import Control from "../FlyFarInternational/Control";
import FlyFarInternational from "../FlyFarInternational/FlyFarInternational";
import GroupFare from "../FlyFarInternational/GroupFareComponent/GroupFare";
import HomeRoute from "../FlyFarInternational/HomeRoute";
import Notification from "../FlyFarInternational/Notification";
import AllPayment from "../FlyFarInternational/PaymentComponents/AllPayment";
import Payment from "../FlyFarInternational/PaymentComponents/Payment";
import SearchList from "../FlyFarInternational/SearchList";
import TourPackage from "../FlyFarInternational/TourPackage";
import FlyFarLadies from "../FlyFarLadies/FlyFarLadies";
import InventoryManagement from "../InventoryManagement/InventoryManagement";
import Login from "../Login/Login";
import ManageWebsite from "../ManageWebsite/ManageWebsite";
import Productivity from "../Productivity/Productivity";
import CreateQuotation from "../Quotation/CreateQuotation";
import Quotation from "../Quotation/Quotation";
import SalesQuotation from "../Quotation/SalesQuotation";
import SalaryDetails from "../SalaryDetails/SalaryDetails";
import TableCompoSalaryDetails from "../TableCompo/TableCompoSalaryDetails";
import TableCompoWithDetails from "../TableCompo/TableCompoWithDetails";
import AddVendor from "../Vendor/AddVendor";
import Vendor from "../Vendor/Vendor";

import DashboardMain from "./../Dashboard/DashboardMain/DashboardMain";
import Ticketing from "../FlyFarInternational/Ticketing/Ticketing";
import Approved from "../FlyFarInternational/PaymentComponents/Approved";
import Pending from "../FlyFarInternational/PaymentComponents/Pending";
import PendingAgent from "../Agent/PendingAgent";
import RejectedPayment from "../FlyFarInternational/PaymentComponents/RejectedPayment";
import IssuedDetails from "../FlyFarInternational/BookingComponents/IssuedDetails/IssuedDetails";
import ApiPage from "../FlyFarInternational/ControlPage/ApiPage/ApiPage";
import Airlines from "../FlyFarInternational/ControlPage/Airlines/Airlines";
import CurrencyPage from "../FlyFarInternational/ControlPage/CurrencyPage/CurrencyPage";
import AllGroupFares from "../FlyFarInternational/GroupFareComponent/AllGroupFares";
import NonStop from "../FlyFarInternational/GroupFareComponent/NonStop";
import OneStop from "../FlyFarInternational/GroupFareComponent/OneStop";
import TwoStop from "../FlyFarInternational/GroupFareComponent/TwoStop";
import ActiveAgent from "../Agent/ActiveAgent";
import AddGroupFareRoute from "../../GroupFareRoutes/AddGroupFareRoute";
const Router = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardMain />}>
            <Route path="/managesetup" element={<ManageSetup />} />
            <Route path="/visaquerysetup" element={<ManageSetup />} />
            <Route path="/dashboard" element={<DashboardComponent />} />

            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/vendor" element={<Vendor />}>
              <Route path="/vendor/addVendor" element={<AddVendor />}></Route>
            </Route>

            <Route path="/bookholddata" element={<BookHoldData />} />
            <Route path="/issuedetail" element={<IssuedDetails />} />

            <Route path="/customer" element={<Customer />}>
              <Route
                path="/customer/addCustomer"
                element={<AddCustomer />}
              ></Route>
            </Route>
            <Route path="/chartOfAccount" element={<ChartOfAccount />}></Route>

            <Route path="/vendorDetails/:vendorId" element={<Vendor />}></Route>
            <Route
              path="/attandanceDetails"
              element={<AttandanceDetail />}
            ></Route>
            <Route
              path="/employeeDetailsForm"
              element={<EmployeeDetailsForm />}
            ></Route>

            <Route path="/details/:empId" element={<EmpDetails />}></Route>
            <Route
              path="/productivity"
              element={<Productivity></Productivity>}
            ></Route>
            <Route
              path="/inventoryManagement"
              element={<InventoryManagement></InventoryManagement>}
            ></Route>
            <Route
              path="/employeeDoc/:empId"
              element={<TableCompoWithDetails></TableCompoWithDetails>}
            ></Route>
            <Route
              path="/salary-details/:empId"
              element={<TableCompoSalaryDetails></TableCompoSalaryDetails>}
            ></Route>
            <Route
              path="/chartOfAccountDetail/:empId"
              element={<ChartOfAccountDetails></ChartOfAccountDetails>}
            ></Route>
            <Route path="/add-bank" element={<AddBank />}>
              {" "}
            </Route>
            <Route path="/salary-details" element={<SalaryDetails />}>
              {" "}
            </Route>
            <Route path="/quotation" element={<Quotation />}></Route>
            <Route path="/salesQuotation" element={<SalesQuotation />}></Route>
            <Route path="/manageWebsite" element={<ManageWebsite />}></Route>
            <Route
              path="/createQuotation"
              element={<CreateQuotation />}
            ></Route>
            <Route
              path="/manageWebsite/:website"
              element={<FlyFarLadies />}
            ></Route>
            <Route
              path="/manageWebsite/www.flyfarint.com"
              element={<FlyFarInternational />}
            >
              <Route
                path="/manageWebsite/www.flyfarint.com/home"
                element={<HomeRoute />}
              ></Route>

              <Route
                path="/manageWebsite/www.flyfarint.com/agent"
                element={<Agent />}
              >
                {/* Nested Route Inside Agent Component */}
                <Route
                  path="/manageWebsite/www.flyfarint.com/agent/all"
                  element={<AllAgent />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/agent/pending"
                  element={<PendingAgent></PendingAgent>}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/agent/active"
                  element={<ActiveAgent></ActiveAgent>}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/agent/reject"
                  element={<Reject />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/agent/deactivate"
                  element={<Deactivate />}
                ></Route>
              </Route>
              <Route
                path="/manageWebsite/www.flyfarint.com/booking"
                element={<Booking />}
              >
                {/* Nested Route inside Booking component */}
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/all"
                  element={<All />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/hold"
                  element={<Hold />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/issued"
                  element={<Issued />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/ticketed"
                  element={<Ticketed />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/expired"
                  element={<Expired />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/cancelled"
                  element={<Cancelled />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/reissued"
                  element={<Reissued />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/void"
                  element={<Void />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/booking/refund"
                  element={<Refund />}
                ></Route>
              </Route>

              {/*  control nested route */}
              <Route
                path="/manageWebsite/www.flyfarint.com/control"
                element={<Control />}
              >
                <Route
                  path="/manageWebsite/www.flyfarint.com/control/apipage"
                  element={<ApiPage />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/control/airlinepage"
                  element={<Airlines />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/control/currencypage"
                  element={<CurrencyPage />}
                ></Route>
              </Route>

              <Route
                path="/manageWebsite/www.flyfarint.com/payment"
                element={<Payment />}
              >
                {/* Nested Route inside Payment Component */}
                <Route
                  path="/manageWebsite/www.flyfarint.com/payment/all"
                  element={<AllPayment />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/payment/pending"
                  element={<Pending />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/payment/approved"
                  element={<Approved />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/payment/cancelled"
                  element={<RejectedPayment />}
                ></Route>
              </Route>
              <Route
                path="/manageWebsite/www.flyfarint.com/groupFare"
                element={<AllGroupFares />}
              >
                {/* <Route
                  path="/manageWebsite/www.flyfarint.com/groupFare/nonStop"
                  element={<NonStop />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/groupFare/oneStop"
                  element={<OneStop />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/groupFare/twoStop"
                  element={<TwoStop />}
                ></Route> */}
              </Route>

              <Route
                path="/manageWebsite/www.flyfarint.com/ticketing"
                element={<Ticketing />}
              />

              <Route
                path="/manageWebsite/www.flyfarint.com/tourPackage"
                element={<TourPackage />}
              ></Route>
              <Route
                path="/manageWebsite/www.flyfarint.com/searchList"
                element={<SearchList />}
              ></Route>
              <Route
                path="/manageWebsite/www.flyfarint.com/activityLog"
                element={<ActivityLog />}
              ></Route>
              <Route
                path="/manageWebsite/www.flyfarint.com/notifications"
                element={<Notification />}
              ></Route>
                <Route path="/manageWebsite/www.flyfarint.com/addGroupFareRoute" element={<AddGroupFareRoute/>}>
                <Route
                  path="/manageWebsite/www.flyfarint.com/addGroupFareRoute/nonStop"
                  element={<NonStop />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/addGroupFareRoute/oneStop"
                  element={<OneStop />}
                ></Route>
                <Route
                  path="/manageWebsite/www.flyfarint.com/addGroupFareRoute/twoStop"
                  element={<TwoStop />}
                ></Route>
                </Route>
            </Route>
          
          </Route>
     
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Router;
