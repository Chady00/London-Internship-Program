import React, { useEffect, useRef, useState } from "react";
import VirtualList from "rc-virtual-list";
import { Avatar, List, Checkbox, Tag, Skeleton, message } from "antd";
import "../styles/CustomCandidateList.css";

import type { UserItem } from "../assets/Data/UserItem";
import { PlayCircleOutlined } from "@ant-design/icons";

// const initialData = UserData;
const ContainerHeight = 800;

interface CandidateListProps {
  filteredData: UserItem[];
}

const CandidatesList: React.FC<CandidateListProps> = ({ filteredData }) => {
  const [data, setData] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const prevDataRef = useRef<UserItem[]>([]);
  // global checkbox toggle
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(filteredData);
      setLoading(false);
    }, 1000);
  }, [filteredData]);

  useEffect(() => {
    // Check if the current data is different from the previous data
    if (filteredData !== prevDataRef.current) {
      if (data.length > 0) {
        message.success(`${data.length} more candidates loaded!`);
      } else {
        setLoading(true);
        message.error("No more candidates to load!");
      }
      // Update the previous data to the current data
      prevDataRef.current = data;
    }
  }, [data]);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      // You can choose to append more data here if needed
      // appendData();
    }
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (id: number) => {
    console.log("handleCheckboxChange", id);
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    setIsChecked(false);
  };

  const selectAll = () => {
    setIsChecked(!isChecked);
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected:
          prevData.length !== data.filter((item) => item.selected).length,
      }))
    );
  };

  return (
    <List>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <div className="container">
            <Checkbox
              style={{
                marginLeft: "26px",
                width: "16px",
                height: "16px",
                borderRadius: "2px",
              }}
              onChange={selectAll}
              checked={isChecked}
            />
            <div className="item first-item">{data.length} Candidates</div>
            <div className="item second-item">Qualified</div>
            <div className="item">
              Task
              <Tag className="tag-style" style={{ marginLeft: "8px" }}>
                {
                  filteredData.filter((candidate) => candidate.isTaskCompleted)
                    .length
                }
              </Tag>
            </div>
            <div className="item">
              Disqualified
              <Tag className="tag-style" style={{ marginLeft: "8px" }}>
                {
                  filteredData.filter((candidate) => candidate.isQualified)
                    .length
                }
              </Tag>
            </div>
          </div>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={100} // Increase the itemHeight to ensure proper alignment
            itemKey="email"
            onScroll={onScroll}
            className="virtual-list-container"
          >
            {(item: UserItem) => (
              <List.Item
                key={item.id}
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  maxHeight: "180px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{ marginRight: "24px" }}
                  />
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 60, xxl: 60 }}
                    icon="AS"
                    className="candidate-avatar"
                    style={{ fontSize: "20px" }}
                  />
                  <div
                    style={{ marginLeft: "10px" }}
                    className="candidate-data"
                  >
                    <p className="label-name">
                      {item.name.first + " " + item.name.last}
                    </p>
                    <div style={{ marginTop: "4px" }}>
                      <div className="location">{item.location}</div>
                      <div style={{}} className="degree">
                        {item.degree}
                      </div>
                      <div className="hash-tags">
                        {item.tags.map((tag, index) => (
                          <div key={index} style={{ marginRight: "8px" }}>
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div>
                        {item.additionalTags.map((tag, index) => (
                          <Tag
                            key={index}
                            className="tag-style tag-style-additional"
                            style={{ marginRight: "8px" }}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Tag
                    className="tag-style"
                    style={{ marginRight: "8px", marginBottom: "110px" }}
                    icon={<PlayCircleOutlined style={{ color: "#305DC6" }} />}
                  >
                    {item.currentRunningPrograms}
                  </Tag>
                  <Tag
                    className="tag-style"
                    style={{
                      marginRight: "8px",
                      marginBottom: "110px",
                      backgroundColor: "#E3EBFF",
                    }}
                    icon={<PlayCircleOutlined style={{ color: "#305DC6" }} />}
                  >
                    {item.currentPrograms} Programs
                  </Tag>
                </div>
              </List.Item>
            )}
          </VirtualList>
        </>
      )}
    </List>
  );
};

export default CandidatesList;
