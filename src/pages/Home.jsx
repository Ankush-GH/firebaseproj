import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar
        style={{
          height: "90vh",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <Menu
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            height: "90vh",
            background: "#0077ff",
          }}
        >
          <SubMenu label="Overview">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
