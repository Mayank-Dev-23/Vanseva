import React, { useState } from 'react';
import './PaymentForm.css';
import config from '../config';

const PaymentForm = ({ onSuccess, onFailure }) => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.amount || formData.amount < config.MIN_AMOUNT || formData.amount > config.MAX_AMOUNT) {
      return `Please enter a valid amount between ₹${config.MIN_AMOUNT} and ₹${config.MAX_AMOUNT}`;
    }
    if (!formData.name.trim()) {
      return 'Please enter your name';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Please enter a valid email';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      return 'Please enter a valid phone number';
    }
    return null;
  };

  const initiateUPIPayment = () => {
    // UPI payment URL format - works with any UPI app
    const upiId = config.UPI_ID;
    const amount = formData.amount;
    const name = encodeURIComponent(formData.name);
    const note = encodeURIComponent('Payment for services');
    
    // Create UPI payment URL - compatible with all UPI apps
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&tn=${note}&cu=${config.CURRENCY}`;
    
    // Try to open any UPI app installed on the device
    try {
      // This will open the default UPI app or show app selection
      window.location.href = upiUrl;
      
      // Fallback: Show instructions for manual payment
      setTimeout(() => {
        const fallbackMessage = `
          If no UPI app opened automatically, please:
          
          1. Open any UPI app (PhonePe, Google Pay, Paytm, BHIM, etc.)
          2. Use this UPI ID: ${upiId}
          3. Enter amount: ₹${amount}
          4. Add note: ${note}
          5. Complete the payment
          
          Supported UPI Apps:
          • PhonePe
          • Google Pay
          • Paytm
          • BHIM
          • Amazon Pay
          • Any other UPI app
        `;
        
        if (confirm(fallbackMessage)) {
          // Simulate successful payment for demo
          setTimeout(() => {
            onSuccess({
              transactionId: 'TXN' + Date.now(),
              amount: amount,
              timestamp: new Date().toISOString(),
              upiId: upiId
            });
          }, 2000);
        }
      }, 3000);
      
    } catch (error) {
      onFailure('Failed to initiate payment. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      onFailure(validationError);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Initiate UPI payment
      initiateUPIPayment();
      
    } catch (error) {
      onFailure('Payment initiation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-form-container">
      <div className="payment-form-card">
        <div className="form-header">
          <h2>Make Payment</h2>
          <p>Enter your details to proceed with UPI payment</p>
        </div>
        
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="amount">Amount (₹)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder={`Enter amount (₹${config.MIN_AMOUNT} - ₹${config.MAX_AMOUNT})`}
              min={config.MIN_AMOUNT}
              max={config.MAX_AMOUNT}
              step="0.01"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="upi-pay-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner">Processing...</span>
            ) : (
              <>
                <span className="phonepe-icon">💳</span>
                Pay with UPI
              </>
            )}
          </button>
        </form>
        
        <div className="payment-info">
          <p>🔒 Secure payment powered by UPI</p>
          <p>💳 UPI ID: {config.UPI_ID}</p>
          <p>📱 Works with: PhonePe, Google Pay, Paytm, BHIM & more</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm; 