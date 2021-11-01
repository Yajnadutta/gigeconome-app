import { Menu } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menubar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div style={{"backgroundColor": '#565455'}}>
<div class="container full-nav">
<div class="topnav" id="myTopna">
  <a href="#" class="">Programming & Development</a>
  <a href="#">Writing & Translation</a>
  <a href="#">Design & Art</a>
  <a href="#">Administrative & Secretary</a>
  <a href="#">Sales & Marketing</a>
  <a href="#">Other</a>
  <a href="#" class="searchbaral"><input class="searchbar" type="text" placeholder="Search.." name="" /><button class="serch-button" type="submit"><i class="fa fa-search"></i></button></a> 

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
</div>
</div>
    </>
  );
}

export default Menubar;