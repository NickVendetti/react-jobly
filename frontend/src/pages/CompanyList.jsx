import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import { Link } from "react-router-dom";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Company List</h1>
      {companies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        <ul>
          {companies.map(c => (
            <li key={c.handle}>
              <Link to={`/companies/${c.handle}`}>{c.name}</Link> - {c.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompanyList;