// Modal.js
import React from 'react';

const Modal = ({ show, onClose, onSubmit }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Create a Post</h2>
        <form onSubmit={onSubmit}>
          <div className="form-input-container">
            <label>Title</label>
            <input 
              className="post-input" 
              type="text" 
              name="title" 
              required 
              placeholder="I tried a carnivore diet and it made me gain 5kgs of muscle" 
            />
          </div>
          <div className="form-input-container">
            <label>Content</label>
            <textarea 
              className="post-input" 
              name="content" 
              required 
              placeholder="Share your experience..." 
            ></textarea>
          </div>
          <button className="post-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

