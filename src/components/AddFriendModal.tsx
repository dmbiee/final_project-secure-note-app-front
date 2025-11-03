import React, { useState } from 'react';
import FriendItem from './FriendItem';
import { useNotes } from './NotesContext';
import type { Friend } from '../assets/types';


interface FriendModalProps {
  friends: Friend[];
  onClose: () => void;
}


const AddFriendModal: React.FC<FriendModalProps> = ({ friends, onClose }) => {
  
    const { state, dispatch } = useNotes();
    const [newFriendName, setNewFriendName] = useState('');
    

    const handleAddFriend = () => {
    const newFriend: Friend = { name: newFriendName };
    dispatch({ type: 'ADD_FRIEND', payload: newFriend });
    setNewFriendName('');
    };
    
    const removeFriend = (name: string) => {
    dispatch({ type: 'REMOVE_FRIEND', payload: name });
  };
    
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mt-5 text-2xl font-bold text-g333">Manage Friends</h2>

      {/* Список друзів */}
      <div className="flex flex-col gap-2 p-2 overflow-auto border rounded-xl h-96">
        {state.friends.map(friend => (
          <FriendItem
            friend={friend}
            onDelete={() => removeFriend(friend.name)}
          />
        ))}
        {state.friends.length === 0 && <p className="m-4 text-gray-400">No friends yet</p>}
      </div>

      {/* Інпут та кнопка додати */}
      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Add a new friend"
          value={newFriendName}
          onChange={e => setNewFriendName(e.target.value)}
          className="flex-1 px-2 py-1 border rounded-xl"
        />
        <button
          onClick={handleAddFriend}
          className="px-4 py-1 transition text-g333 bg-p250 rounded-xl hover:bg-p500"
        >
          Add
        </button>
      </div>

      {/* Підтвердити */}
      <button
        onClick={onClose}
        className="px-4 py-2 mt-2 transition text-g333 bg-p500 rounded-xl hover:bg-p750 hover:text-white"
      >
        Confirm
      </button>
    </div>
  );
};

export default AddFriendModal;
