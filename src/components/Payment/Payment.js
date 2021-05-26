import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

export const Payment = () => {
  return (
    <section class="payment-section">
      <div className="container">
        <div className="rowflex">
          <Link to="/" class="general-button">
            BACK
          </Link>
        </div>
      </div>
    </section>
  );
};
