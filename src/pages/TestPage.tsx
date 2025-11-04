import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PersonalNote from '../components/PersonalNote';
import SharedNote from '../components/SharedNote';
import { useNotes } from '../components/NotesContext';
import { useNavigate } from 'react-router-dom';
import { checkAuthorization } from '../api/AuthService';


function TestPage() {
      const navigate = useNavigate();

  useEffect(() => {

      checkAuthorization(navigate);

  }, [navigate]);
    const { state, dispatch } = useNotes();
    return (
    <>
            
          <div className='flex justify-center'>
      <PersonalNote notes={state.personalNotes} />
        <div className="w-px h-screen mx-10 bg-black/10"></div>
           <SharedNote notes={state.sharedNotes} title='Shared Notes'/> 
            </div>
    </>
  );
}

export default TestPage;
