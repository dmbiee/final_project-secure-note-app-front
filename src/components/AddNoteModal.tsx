import React, { useState } from 'react'

interface Props{
    onClose: () => void,
}


const AddNoteModal: React.FC<Props> = ({ onClose }) =>  {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSave() {
        console.log(title, description)
    }

  return (
 <div className="relative w-full h-full bg-white rounded-2xl font-jakarta">

        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          New note
        </h2>

        {/* Inputs */}
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-p500"
          />
          <textarea
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 resize-none h-96 rounded-xl focus:outline-none focus:ring-2 focus:ring-p500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-12">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 transition bg-gray-200 rounded-xl hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 font-semibold transition text-g333 bg-p500 rounded-xl hover:bg-p750 hover:text-white"
          >
            Save
          </button>
        </div>
      </div>  )
}

export default AddNoteModal