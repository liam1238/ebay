import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import { EbayForm } from "./ebayForm";

const StyledEbay = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: pink;
    display: flex;
    justify-content: center;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
    flex-direction: row;
  }
  .form-group {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
  }
  .radio-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .radio-label {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .error {
    border: 1px solid red;
  }
  .error-msg {
    color: red;
  }
  button {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    border-radius: 4px;
  }
`;

export const Ebay = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [defaultValues, setDefaultValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    gender: "",
    dateOfBirth: "",
    age: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const user = data.results[0];
        setDefaultValues({
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          city: user.location.city,
          country: user.location.country,
          gender: user.gender,
          dateOfBirth: new Date(user.dob.date).toISOString().split("T")[0],
          age: user.dob.age.toString(),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledEbay>
      <h1>Welcome to Ebay!</h1>
      <EbayForm defaultValues={defaultValues} />
    </StyledEbay>
  );
};
