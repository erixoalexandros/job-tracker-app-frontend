import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/jobs";
import JobsList from "./JobsList";
import {Link} from 'react-router-dom'

const Dashboard = ({ fetchJobs }) => {
  const initFetchJobs = () => {
    fetchJobs();
  };

  useEffect(initFetchJobs, []);

  return (
    <div className="dashboard-container">
      <Link className="add-task-button">
          + Add Task
      </Link>
      <div className="jobs-lists-container">
        <JobsList title="Wishlist" />
        <JobsList title="Applied" />
        <JobsList title="In Progress" />
        <JobsList title="Offered" />
        <JobsList title="Rejected" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchJobs())
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
