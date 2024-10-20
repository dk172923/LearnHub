// src/GoogleSignIn.js
import React from 'react';

const GoogleSignIn = () => {
    const handleGoogleSignIn = () => {
        window.open('http://localhost:5000/auth/google', '_self'); // Redirect to Google auth
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default GoogleSignIn;
