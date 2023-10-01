import React, { useState } from "react";
import { ShareAltOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import "../styles/CustomLayout.css";
import CustomDropDown from "./CustomDropDown";
import { TagIcon } from "../assets/TagIcon";
import { UserCheckIcon } from "../assets/UserCheckIcon";
import { UserCloseIcon } from "../assets/UserCloseIcon";
import { UserVoiceIcon } from "../assets/UserVoiceIcon";
import { MailIcon } from "../assets/MailIcon";
import JobSearchFilter from "./JobSearchFilter";
import CustomList from "./CustomList";
import CandidatesList from "./CandidatesList";
import { DashboardIcon } from "../assets/DashboardIcon";
import { CandidateBankIcon } from "../assets/CandidateBankIcon";
import { InterviewManagerIcon } from "../assets/InterviewManagerIcon";
import { EmployerHubIconLarge } from "../assets/EmployerHubIconLarge";
import { ReportsIcon } from "../assets/ReportsIcon";
import { SharingIcon } from "../assets/SharingIcon";

import UserData from "../assets/Data/CandidateData";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "2", <DashboardIcon />),
  getItem("Candidate Bank", "3", <CandidateBankIcon />),
  getItem("Interview Manager", "sub1", <InterviewManagerIcon />),
  getItem("Opportunity Hub", "sub2", <ShareAltOutlined />),
  getItem("Employer Hub", "9", <EmployerHubIconLarge />),
  getItem("Reports", "14", <ReportsIcon />),
  getItem("Sharing", "10", <SharingIcon />),
];

const CustomLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [data, setData] = useState(UserData);
  const [filteredData, setFilteredData] = useState(UserData);

  // receive filtered data from job search filter
  const GetFiltered = (data: any) => {
    setFilteredData(data);
    console.log(data);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: colorBgContainer }}
        className="sider-vertical"
      >
        <Avatar
          style={{
            backgroundColor: "#d9d9d9",
            marginLeft: "29px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[""]}
          mode="inline"
          items={items}
          className="menu-vertical"
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: "#f9faff", paddingBottom: "90px" }}
          className="header-menu"
        >
          <div className="header-content">
            <div className="left-header">
              London Internship Program
              <div className="london-text">London</div>
            </div>
            <div className="middle-header">
              <CustomDropDown />
            </div>
            <div className="right-header">
              <Space wrap>
                <Button
                  type="primary"
                  icon={<TagIcon />}
                  size={"large"}
                  className="btn-header-item"
                />
                <Button
                  type="primary"
                  icon={<UserCloseIcon />}
                  size={"large"}
                  className="btn-header-item"
                />
                <Button
                  type="primary"
                  icon={<UserCheckIcon />}
                  size={"large"}
                  className="btn-header-item"
                />
                <Button
                  type="primary"
                  icon={<UserVoiceIcon />}
                  size={"large"}
                  className="btn-header-item"
                />
                <Button
                  type="primary"
                  icon={<MailIcon />}
                  size={"large"}
                  className="btn-header-item"
                />
                <Dropdown.Button
                  icon={<DownOutlined />}
                  menu={{ items }}
                  className="header-right-dropdown"
                >
                  Move to video Interview I
                </Dropdown.Button>
              </Space>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              minWidth: "100%",
            }}
            className="body-content"
          >
            <div className="flex-container">
              <div className="left-side">
                <div style={{ marginBottom: "24px" }}>
                  <JobSearchFilter
                    CandidateData={data}
                    GetFiltered={GetFiltered}
                  />
                </div>
                <div>
                  <CustomList />
                </div>
              </div>
              <div className="right-side">
                {/* Content for the right side */}
                <CandidatesList filteredData={filteredData} />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
