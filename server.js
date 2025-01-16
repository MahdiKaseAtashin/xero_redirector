const express = require('express');
const app = express();

// Route to handle the redirect from Xero
app.get('/login-callback', (req, res) => {
    const { code, state } = req.query;

    // Log the received parameters for debugging
    console.log(`Received code: ${code}`);
    console.log(`Received state: ${state}`);

    // This redirect conforms to the AndroidManifest configuration
    const callbackUrl = `https://test.xero_pkce_login_test/login-callback?code=${code}&state=${state}`;

    // Redirect back to the Android app
    res.redirect(callbackUrl);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
