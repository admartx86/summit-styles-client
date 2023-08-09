import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isChecked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // For now, this will just prevent page reload on submission.
        // You can add more logic here as needed.
    }

    return(
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h3>Become a Summit Insider</h3>
            <p>Subscribe to our newsletter for member-exclusive news and discounts!</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
                />
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="checkbox" 
                        id="privacyCheck" 
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    />
                    <label htmlFor="privacyCheck" style={{ marginLeft: '5px' }}>
                        I agree to the Privacy Policy & Terms of Use
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Newsletter;