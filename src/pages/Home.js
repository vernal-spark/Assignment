import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import search from "../assets/search.png";
import "./Home.css";
import BasicTable from "../components/Table";
const Home = () => {
  const [open,setOpen]=useState(false)
  return (
    <>
      <Header setOpen={setOpen}/>
      {open&&<Navbar setOpen={setOpen}/>}
      <div className="home-content">
        <div className="home-title">
          <h1>Recurring Invoices</h1>
          <button className="add-btn">Add recuring invoice +</button>
        </div>
        <div className="data">
          <div className="box1">
            <h5 style={{ color: "grey" }}>#Recurring Invoices</h5>
            <h1>215</h1>
          </div>
          <div className="box1">
            <h5 style={{ color: "grey" }}>#Recurring Revenue</h5>
            <h1>€2500</h1>
          </div>
          <div className="box1">
            <h5 style={{ color: "grey" }}>#Recurring Overdue</h5>
            <h1>22</h1>
          </div>
        </div>
        <div>
          <h1>Per client</h1>
        </div>
        <div className="search">
          <TextField label="Search client" variant="outlined" />
          <button className="add-btn">
            <img src={search} alt="search" />
            Search
          </button>
        </div>
        <div>
          <BasicTable />
        </div>
      </div>
    </>
  );
};
export default Home;
