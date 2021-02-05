import { IconButton } from "@material-ui/core";
import React from "react";
import "../styles/Footer.css";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

function Footer() {
  return (
    <div className="sidebar__footer">
      <div className="sidebar__footerIcons">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
