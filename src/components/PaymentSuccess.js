import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = ({ details, onReset }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="success-icon">
          <div className="checkmark">
            <span>✓</span>
          </div>
        </div>
        
        <div className="success-content">
          <h2>Payment Successful!</h2>
          <p className="success-message">
            Your payment has been processed successfully. Thank you for using PhonePe!
          </p>
          
          <div className="transaction-details">
            <h3>Transaction Details</h3>
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value">{details?.transactionId || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Amount:</span>
              <span className="detail-value amount">₹{details?.amount || '0'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date & Time:</span>
              <span className="detail-value">{formatDate(details?.timestamp)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">UPI ID:</span>
              <span className="detail-value">{details?.upiId || 'N/A'}</span>
            </div>
          </div>
          
          <div className="success-actions">
            <button onClick={onReset} className="new-payment-button">
              Make Another Payment
            </button>
            <button 
              onClick={() => window.print()} 
              className="print-receipt-button"
            >
              Print Receipt
            </button>
          </div>
        </div>
        
        <div className="success-footer">
          <p>🔒 Your payment is secure and encrypted</p>
          <p>📧 A confirmation email has been sent to your registered email</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 