import React from 'react';
import type { Friend } from '../api/FriendSrevice';

interface FriendItemProps {
  friend: Friend;
  onDelete: () => void;
}

const FriendItem: React.FC<FriendItemProps> = ({ friend, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 ml-3">
      <span>{friend.friend}</span>
      <button
        onClick={onDelete}
        className="p-2 px-3 transition rounded-xl text-g333 bg-s250 hover:bg-s500"
      >
        Delete
      </button>
    </div>
  );
};

export default FriendItem;
