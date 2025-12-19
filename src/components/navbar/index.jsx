import React from "react";
import {
  NavbarContainer,
  NavLeft,
  NavRight,
  NavTitle,
  ProfileBox,
  ProfileImage,
  ProfileName,
} from "./style";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLeft>
        <NavTitle>Course Allocation System</NavTitle>
      </NavLeft>

      <NavRight>
        <ProfileBox>
          <ProfileImage>
            <FaUserCircle size={30} />
          </ProfileImage>
          <ProfileName>Admin</ProfileName>
        </ProfileBox>
      </NavRight>
    </NavbarContainer>
  );
};

export default Navbar;
