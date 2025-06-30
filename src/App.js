import React, { useState } from 'react';
import './App.css';
import PaymentForm from './components/PaymentForm';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handlePaymentSuccess = (details) => {
    setPaymentDetails(details);
    setPaymentStatus('success');
  };

  const handlePaymentFailure = (error) => {
    setPaymentDetails({ error });
    setPaymentStatus('failed');
  };

  const resetPayment = () => {
    setPaymentStatus('pending');
    setPaymentDetails(null);
  };

  return (
    <div className="App">
      {/* Animated SVG trees, plants, and animals background */}
      <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 0, pointerEvents: 'none'}}>
        <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
          {/* Ground */}
          <rect y="160" width="1440" height="40" fill="#7ec850" />
          {/* Trees */}
          <g className="tree-anim" style={{animationDelay: '0s'}}>
            <rect x="100" y="120" width="16" height="40" rx="8" fill="#8d6748" />
            <ellipse cx="108" cy="120" rx="32" ry="28" fill="#3cb371" />
          </g>
          <g className="tree-anim" style={{animationDelay: '1s'}}>
            <rect x="300" y="130" width="12" height="30" rx="6" fill="#8d6748" />
            <ellipse cx="306" cy="130" rx="22" ry="18" fill="#4caf50" />
          </g>
          <g className="tree-anim" style={{animationDelay: '0.5s'}}>
            <rect x="600" y="140" width="14" height="35" rx="7" fill="#8d6748" />
            <ellipse cx="607" cy="140" rx="26" ry="20" fill="#388e3c" />
          </g>
          <g className="tree-anim" style={{animationDelay: '1.5s'}}>
            <rect x="900" y="125" width="18" height="45" rx="9" fill="#8d6748" />
            <ellipse cx="909" cy="125" rx="34" ry="26" fill="#43cea2" />
          </g>
          <g className="tree-anim" style={{animationDelay: '0.8s'}}>
            <rect x="1200" y="135" width="13" height="33" rx="6.5" fill="#8d6748" />
            <ellipse cx="1206" cy="135" rx="20" ry="16" fill="#56ab2f" />
          </g>
          {/* Plants/Bushes */}
          <g className="plant-anim" style={{animationDelay: '0.2s'}}>
            <ellipse cx="180" cy="180" rx="18" ry="8" fill="#4caf50" />
            <ellipse cx="195" cy="182" rx="10" ry="5" fill="#388e3c" />
          </g>
          <g className="plant-anim" style={{animationDelay: '0.6s'}}>
            <ellipse cx="350" cy="185" rx="14" ry="6" fill="#43cea2" />
            <ellipse cx="362" cy="187" rx="8" ry="4" fill="#388e3c" />
          </g>
          <g className="plant-anim" style={{animationDelay: '1.1s'}}>
            <ellipse cx="700" cy="182" rx="16" ry="7" fill="#7ec850" />
            <ellipse cx="715" cy="184" rx="9" ry="4" fill="#4caf50" />
          </g>
          <g className="plant-anim" style={{animationDelay: '0.9s'}}>
            <ellipse cx="1100" cy="188" rx="13" ry="5" fill="#43cea2" />
            <ellipse cx="1112" cy="190" rx="7" ry="3" fill="#388e3c" />
          </g>
          {/* Butterflies */}
          <g className="butterfly-anim">
            <ellipse cx="400" cy="80" rx="6" ry="3" fill="#ffb347" />
            <ellipse cx="410" cy="80" rx="6" ry="3" fill="#ffb347" />
            <circle cx="405" cy="80" r="2" fill="#6d4c41" />
          </g>
          <g className="butterfly-anim" style={{animationDelay: '1.5s'}}>
            <ellipse cx="800" cy="60" rx="5" ry="2.5" fill="#e57373" />
            <ellipse cx="808" cy="62" rx="5" ry="2.5" fill="#e57373" />
            <circle cx="804" cy="61" r="1.7" fill="#6d4c41" />
          </g>
          {/* Birds */}
          <g className="bird-anim">
            <path d="M200 40 Q205 35 210 40 Q215 45 220 40" stroke="#333" strokeWidth="2" fill="none" />
          </g>
          <g className="bird-anim" style={{animationDelay: '1s'}}>
            <path d="M1000 30 Q1005 25 1010 30 Q1015 35 1020 30" stroke="#333" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>

      <header className="App-header">
        <h1>🌳 Vanseva</h1>
        <p>Grow a greener tomorrow — support tree plantation with UPI</p>
      </header>
      
      <main className="App-main">
        {paymentStatus === 'pending' && (
          <PaymentForm 
            onSuccess={handlePaymentSuccess}
            onFailure={handlePaymentFailure}
          />
        )}
        
        {paymentStatus === 'success' && (
          <PaymentSuccess 
            details={paymentDetails}
            onReset={resetPayment}
          />
        )}
        
        {paymentStatus === 'failed' && (
          <div className="payment-failed">
            <h2>❌ Payment Failed</h2>
            <p>{paymentDetails?.error || 'Something went wrong'}</p>
            <button onClick={resetPayment} className="retry-button">
              🔄 Try Again
            </button>
          </div>
        )}
      </main>
      
      <footer className="App-footer">
        <p>🌱 Every payment helps plant a tree</p>
      </footer>
      <style>{`
        .tree-anim {
          transform-origin: bottom center;
          animation: sway 3s ease-in-out infinite alternate;
        }
        .plant-anim {
          transform-origin: center bottom;
          animation: plantWiggle 4s ease-in-out infinite alternate;
        }
        @keyframes sway {
          0% { transform: rotate(-2deg) scaleY(1); }
          50% { transform: rotate(2deg) scaleY(1.04); }
          100% { transform: rotate(-2deg) scaleY(1); }
        }
        @keyframes plantWiggle {
          0% { transform: scaleX(1) scaleY(1); }
          50% { transform: scaleX(1.05) scaleY(1.08); }
          100% { transform: scaleX(1) scaleY(1); }
        }
        .butterfly-anim {
          animation: butterflyFly 6s linear infinite alternate;
        }
        @keyframes butterflyFly {
          0% { transform: translateY(0) scale(1); }
          20% { transform: translateY(-10px) scale(1.1); }
          40% { transform: translateY(5px) scale(0.95); }
          60% { transform: translateY(-8px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .bird-anim {
          animation: birdFly 8s linear infinite;
        }
        @keyframes birdFly {
          0% { transform: translateX(0); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(-300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App; 