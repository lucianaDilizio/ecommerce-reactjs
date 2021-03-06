import React from 'react';
import './Popup.css';

export const Popup = ({ children, handleShowPopup }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup-container">
        <span className="close-icon" onClick={() => handleShowPopup(false)}>
          X
        </span>
        <div className="content-container">{children}</div>
      </div>
    </div>
  );
};
