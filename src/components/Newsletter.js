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
        <section className="newsletter">
            <h3>Become a Summit Insider!</h3>
            <form onSubmit={handleSubmit}>
            <p>Subscribe to our newsletter for member-exclusive news and discounts!</p>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div>
                    <input 
                        type="checkbox" 
                        id="privacyCheck" 
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    /><label htmlFor="privacyCheck">I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy & Terms of Use</a>
                    </label>
                </div>
                <button type="submit">
                    Subscribe
                </button>
            </form>
        </section>
    )
}

export default Newsletter;