import React from 'react';
import NavBar from '../components/NavBar';
import PersonalNote from '../components/PersonalNote';
import SharedNote from '../components/SharedNote';

interface NoteType {
  title: string;
  date: string;
  description: string;
}
const notesData: NoteType[] = [
  {
    title: 'First Note',
    date: '10 Oct',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },
  {
    title: 'Second Note',
    date: '11 Oct',
    description: 'Another note description...'
  }
];

const notesData2: NoteType[] = [];

function TestPage() {
  return (
    <>
          <NavBar />
          <div className='flex justify-center'>
      <PersonalNote notes={notesData} />
        <div className="w-px bg-black/10 h-screen mx-10"></div>
           <SharedNote notes={notesData}/> 
          </div>
    </>
  );
}

export default TestPage;
