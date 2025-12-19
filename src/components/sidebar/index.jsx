
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  MenuItem,
  Divider
} from "./style";
import { FaHome, FaUsers, FaBook, FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SidebarHeader>Course Allocation</SidebarHeader>
      <Divider />
      <SidebarMenu>
        <MenuItem onClick={() => navigate("/admin/dashboard")}>
          <FaHome /> Dashboard
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/teacherManagment")}>
          <FaUsers /> Teacher List
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/courseManagment")}>
          <FaBook /> Course List
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/generateAllocate")}>
          <FaTasks /> Generate & Allocate
        </MenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
