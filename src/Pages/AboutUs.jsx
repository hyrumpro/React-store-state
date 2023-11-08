import { Link } from 'react-router-dom';

export const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our company! We strive to provide the best services to our customers.</p>
            <p>Feel free to reach out to us for any inquiries or support.</p>
            <Link to="/">Go Home</Link>

        </div>
    );
};