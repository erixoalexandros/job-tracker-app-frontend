import React from "react";

const JobTag = ({ company, position, date }) => {
  return (
    <div className="job-tag-container">
      <p>{company}</p>
      <p>{position}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
  );
};

export default JobTag;
