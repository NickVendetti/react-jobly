import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        let jobs = await JoblyApi.getJobs();
        setJobs(jobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.length === 0 ? <p>Loading...</p> : (
        <ul>
          {jobs.map(j => (
            <li key={j.id}>{j.title} at {j.companyName}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;