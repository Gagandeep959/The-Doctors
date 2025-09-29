// pages/login.js or app/login/page.js

import React, { useState } from 'react';

// Using a basic functional component
export default function LoginPage() {
    // State to hold the values of the email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to handle a basic loading/submission status
    const [isLoading, setIsLoading] = useState(false);
    // State to hold a simple error message
    const [error, setError] = useState(null);

    // Handler for the form submission
    const handleSubmit = async (e) => {
        // Prevent the default form submission (which causes a page reload)
        e.preventDefault();

        // 1. Reset states and show loading
        setError(null);
        setIsLoading(true);

        // 2. Basic input validation (optional)
        if (!email || !password) {
            setError('Please enter both email and password.');
            setIsLoading(false);
            return;
        }

        // 3. (In a real application) Call an API
        // This is where you would typically use `fetch` or a library like `axios`
        // to send the credentials to your backend (e.g., /api/login)

        console.log('Attempting login with:', { email, password });

        try {
            // --- Simulated API Call ---
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency

            if (email === 'user@example.com' && password === 'password') {
                // Success: Redirect the user (e.g., using `next/router` or `next/navigation`)
                console.log('Login successful!');
                // --- Real-world: Store auth token and redirect ---
                // router.push('/dashboard');
            } else {
                // Failure: Set an error message
                throw new Error('Invalid email or password.');
            }
        } catch (err) {
            setError(err.message || 'An unexpected error occurred during login.');
        } finally {
            // 4. Hide loading indicator
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                
                {/* Form starts here */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    
                    {/* Display Error Message */}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
