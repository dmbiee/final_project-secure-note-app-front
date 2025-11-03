import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PersonalNote from '../components/PersonalNote';
import SharedNote from '../components/SharedNote';

interface NoteType {
  title: string;
    date: string;
    owner: string,
  description: string;
}
const notesData: NoteType[] = [
  {
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },
{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },
{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },{
    title: 'First Note',
    date: '10 Oct',
        owner: 'Dmytro',
    description: 'This is your personal notes app! You can create, edit, and organize all your thoughts here.'
  },  {
    title: 'Second Note',
    date: '11 Oct',
        owner: 'Dmytro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu maximus tellus. Donec id elementum velit, fermentum scelerisque nisi. Cras consectetur commodo augue at scelerisque. Maecenas ultricies nisl ut libero placerat, vel elementum ligula luctus. Aenean convallis varius lorem, a accumsan nulla aliquet nec. Integer aliquam augue sit amet velit commodo, ut facilisis tortor hendrerit. Pellentesque et lectus sollicitudin, vehicula quam ac, ornare leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non consectetur felis. Donec quis erat leo. Maecenas in convallis ante, non rutrum ligula. Morbi ut luctus nulla. Cras malesuada lacus ligula, in porta diam pretium id. Curabitur quis condimentum dui. Vestibulum imperdiet dictum dapibus. '
  }
];
const exampleNote: Note = {
    title: 'Meeting Notes',
    date: '2025-11-02',
    owner: 'Dmitry',
    description: 'This is a full description of the note.'
  };
const notesData2: NoteType[] = [];

function TestPage() {
    return (
    <>
            
          <div className='flex justify-center'>
      <PersonalNote notes={notesData} />
        <div className="w-px h-screen mx-10 bg-black/10"></div>
           <SharedNote notes={notesData2} title='Shared Notes'/> 
            </div>
    </>
  );
}

export default TestPage;
