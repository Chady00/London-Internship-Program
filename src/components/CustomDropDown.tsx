import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Tag } from "antd";

const generateMenuItem = (label: string, key: string, count: number) => ({
  label,
  key,
  className: "custom-menu-item",
  itemIcon: <Tag className="dropdown-tag">{count}</Tag>,
});

const items: {
  label: string;
  key: string;
  className: string;
  itemIcon: React.ReactNode;
}[] = [
  generateMenuItem("Applied", "1", 1745),
  generateMenuItem("Shortlisted", "2", 453),
  generateMenuItem("Technical Interview", "3", 123),
  generateMenuItem("Opportunity Browsing", "4", 243),
  generateMenuItem("Video Interview I", "5", 25),
  generateMenuItem("Video Interview II", "6", 25),
  generateMenuItem("Video Interview III", "7", 25),
  generateMenuItem("Offer", "8", 25),
  generateMenuItem("Withdrawn", "9", 25),
];

function CustomDropDown(): React.ReactElement {
  const [selected, setSelected] = React.useState<any>(items?.[3]?.label);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
    if (items) {
      const selectedItem = items.find((item) => item?.key === e.key); // Use optional chaining here
      if (selectedItem) {
        setSelected(selectedItem.label);
      }
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
      <Dropdown menu={menuProps} className="custom-dropdown">
        <Button className="custom-dropdown">
          {selected}
          <DownOutlined style={{ color: "#1d4ed8" }} />
        </Button>
      </Dropdown>
    </Space>
  );
}

export default CustomDropDown;
