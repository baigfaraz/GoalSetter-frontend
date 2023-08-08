import React, { useState } from 'react';

 function Popup({ isOpen, onClose, onUpdate }) {
  const [textAreaContent, setTextAreaContent] = useState('');

  const handleUpdate = () => {
    onUpdate(textAreaContent);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <textarea
        value={textAreaContent}
        onChange={(e) => setTextAreaContent(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default Popup;

// function App() {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const openPopup = () => {
//     setPopupOpen(true);
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   const handleUpdate = (content) => {
//     // Perform the update action using the content from the textarea
//     console.log('Updating with content:', content);
//   };

//   return (
//     <div className="app">
//       <button onClick={openPopup}>Open Popup</button>
//       <Popup isOpen={isPopupOpen} onClose={closePopup} onUpdate={handleUpdate} />
//     </div>
//   );
// }

// export default App;
