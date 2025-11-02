import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuthorization } from "../api/AuthService";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {

      checkAuthorization(navigate);

  }, [navigate]);

  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
};

export default HomePage;
