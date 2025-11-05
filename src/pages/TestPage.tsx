import React, { useEffect} from 'react';
import PersonalNote from '../components/PersonalNote';
import SharedNote from '../components/SharedNote';
import { useNavigate } from 'react-router-dom';
import { checkAuthorization } from '../api/AuthService';


function TestPage() {
      const navigate = useNavigate();

  useEffect(() => {

      checkAuthorization(navigate);

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
}

export default TestPage;
