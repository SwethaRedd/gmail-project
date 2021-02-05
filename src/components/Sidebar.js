import React from "react";
import "../styles/Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./Footer";
import SendMail from "./SendMail";
import { openSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        selected={true}
        Icon={InboxIcon}
        title="Inbox"
        number={54}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={20} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={NearMeIcon} title="Sent" />
      <SidebarOption Icon={NoteIcon} title="Drafts" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <Footer />
    </div>
  );
}

export default Sidebar;
