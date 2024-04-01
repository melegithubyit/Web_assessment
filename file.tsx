import React, { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`);
            const data = await response.json();

            if (data.length > 0) {
                // Successful authentication
                const accessToken = data[0].accessToken;
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred during authentication');
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SignInForm;