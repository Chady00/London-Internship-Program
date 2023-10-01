import React from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import "../styles/CustomList.css";
import { EmployerHubIcon } from "../assets/EmployerHubIcon";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group" | "header"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Filters", "header", []),
  { type: "divider" },
  getItem("Personal Information", "sub1", <EmployerHubIcon />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  { type: "divider" },
  getItem("Education", "sub2", <EmployerHubIcon />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  { type: "divider" },
  getItem("Work Experience", "sub4", <EmployerHubIcon />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
  ]),
  getItem("Activity Filter", "sub5", <EmployerHubIcon />, [
    getItem("Option 9", "12"),
    getItem("Option 10", "13"),
    getItem("Option 11", "14"),
  ]),
  getItem("Advanced Filter", "sub6", <EmployerHubIcon />, [
    getItem("Option 9", "15"),
    getItem("Option 10", "16"),
    getItem("Option 11", "17"),
  ]),
];

const CustomList: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      className="filter-menu"
      mode="inline"
      items={items}
    />
  );
};

export default CustomList;
