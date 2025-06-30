# UPI Payment App

A responsive React application for processing payments through UPI integration. This app works with any UPI app (PhonePe, Google Pay, Paytm, BHIM, etc.) and provides a modern, user-friendly interface for accepting payments with a beautiful design that works seamlessly across all devices.

## Features

- 🎨 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💳 **Universal UPI Integration**: Works with any UPI app (PhonePe, Google Pay, Paytm, BHIM, etc.)
- 🔒 **Secure Payments**: Encrypted and secure payment processing
- ✨ **Modern UI**: Beautiful gradient design with smooth animations
- 📊 **Transaction Details**: Complete payment receipt with transaction information
- 🖨️ **Print Receipt**: Option to print payment receipts
- ♿ **Accessibility**: Built with accessibility best practices

## Screenshots

The app features:
- Clean, modern payment form
- Universal UPI payment button
- Success page with transaction details
- Responsive design for all screen sizes

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd payapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## Configuration

### UPI ID Setup

**Current UPI ID**: `8287722016@ptaxis`

To use your own UPI ID for payments:

1. Open `src/config.js`
2. Find the line: `UPI_ID: '8287722016@ptaxis',`
3. Replace `'8287722016@ptaxis'` with your actual UPI ID
4. Save the file

### Supported UPI Apps

The app works with any UPI-enabled application:
- **PhonePe**
- **Google Pay**
- **Paytm**
- **BHIM**
- **Amazon Pay**
- **Axis Pay**
- **HDFC PayZapp**
- **ICICI Pockets**
- **Any other UPI app**

### Example UPI ID formats:
- `username@paytm`
- `username@okicici`
- `username@ybl`
- `username@upi`
- `username@axis`
- `username@hdfcbank`
- `username@ptaxis` (Axis Bank)

### Important Notes:
- Make sure your UPI ID is active and verified
- Test with small amounts first
- Users need any UPI app installed on their device
- The UPI ID will be displayed on the payment form for transparency
- Works with any UPI app, not limited to PhonePe

## How It Works

1. **Payment Form**: Users enter their details (amount, name, email, phone)
2. **Validation**: Form validates all inputs before proceeding
3. **UPI Integration**: App generates a UPI payment URL compatible with all UPI apps
4. **App Selection**: Device opens the default UPI app or shows app selection
5. **Fallback**: If no app opens, manual instructions are provided
6. **Success Page**: After payment, users see transaction details and can print receipts

## File Structure

```
payapp/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── PaymentForm.js
│   │   ├── PaymentForm.css
│   │   ├── PaymentSuccess.js
│   │   └── PaymentSuccess.css
│   ├── config.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React 16**: Modern React with hooks
- **CSS3**: Custom styling with responsive design
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

### Customization

You can customize the app by:

1. **Colors**: Modify CSS variables in the component files
2. **Styling**: Update CSS classes for different looks
3. **Functionality**: Add more payment methods or features
4. **Branding**: Customize the app name and branding

## Security Considerations

- Always use HTTPS in production
- Validate all user inputs
- Implement proper error handling
- Use environment variables for sensitive data
- Consider implementing rate limiting

## Production Deployment

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service:
   - Netlify
   - Vercel
   - AWS S3
   - GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:
- Email: saxenamayank899@gmail.com
- Phone: +91-8077991264

## Changelog

### Version 1.1.0
- Updated to work with any UPI app (not just PhonePe)
- Enhanced payment instructions for multiple UPI apps
- Updated UPI ID to 8287722016@ptaxis
- Improved user experience with better fallback instructions

### Version 1.0.0
- Initial release
- UPI integration
- Responsive design
- Payment success page
- Print receipt functionality

---

**Note**: This is a demo application. For production use, ensure you have proper UPI API integration and security measures in place. The current UPI ID (`8287722016@ptaxis`) is configured for testing purposes. 