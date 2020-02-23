import React from "react";
import { connect } from "react-redux";
import JobTag from "./JobTag";

const JobsList = ({ jobs, title }) => {
  return (
    <div className="jobs-list-container">
      <h1>{title}</h1>
      {jobs.map(({ company, position, postedDate, _id }) => {
        return (
          <JobTag
            company={company}
            position={position}
            date={postedDate}
            key={_id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ jobs }, { title }) => {
  return {
    jobs: jobs.filter(({ status }) => status === title)
  };
};

export default connect(mapStateToProps)(JobsList);
