import React from "react";
import { Input } from "antd";
// import type { SearchProps } from "../Search";
import "../styles/JobSearchFilter.css";
import { SearchOutlined } from "@ant-design/icons";
import type { UserItem } from "../assets/Data/UserItem";

const { Search } = Input;

interface JobSearchFilterProps {
  CandidateData: UserItem[];
  GetFiltered: (filteredData: UserItem[]) => void;
}

const JobSearchFilter: React.FC<JobSearchFilterProps> = ({
  CandidateData,
  GetFiltered,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = CandidateData.filter((candidate) => {
      const lowerCaseValue = event.target.value.toLowerCase();
      return (
        candidate.name.first.toLowerCase().includes(lowerCaseValue) ||
        candidate.name.last.toLowerCase().includes(lowerCaseValue) ||
        candidate.degree.toLowerCase().includes(lowerCaseValue) ||
        candidate.tags.some((tag) => tag.toLowerCase().includes(lowerCaseValue))
      );
    });
    console.log(filteredData);
    //return filtered data
    GetFiltered(filteredData);
  };

  return (
    <div style={{ width: "90%" }} className="search-container">
      <Search
        placeholder="Search by name, edu, exp or #tag"
        onChange={onChange}
        className="search"
        addonBefore={
          <span className="search-icon">
            <SearchOutlined />
          </span>
        }
      />
    </div>
  );
};

export default JobSearchFilter;
