import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalNote from "../components/PersonalNote";
import SharedNote from "../components/SharedNote";
import { AuthService } from "../api/AuthService";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {

     AuthService.checkAuthorization(navigate);

  }, [navigate]);

  return (
     <>
            
          <div className='flex justify-center'>
      <PersonalNote  />
        <div className="w-px h-screen mx-10 bg-black/10"></div>
           <SharedNote /> 
            </div>
    </>
  );
};

export default HomePage;
