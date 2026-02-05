import React, { useState } from 'react';
import LandingCard from '../components/LandingCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CookingPage from './CookingPage';
import RestaurantPage from './RestaurantPage';


function Landing() {
    const [cookOrNot, setCookOrNot] = useState(null);

    // 1. Logic: If cookOrNot is still null, show the popup
    if (cookOrNot === null) {
        return (
            <LandingCard id={"landing"}>
                <Card className='text-center' style={{ width: '18rem' }} border='info'>
                    <Card.Body>
                        <Card.Title>Are you willing to cook?</Card.Title>
                        <Button onClick={() => setCookOrNot(true)} variant="primary" size='lg' className="m-2">Yes</Button>
                        <Button onClick={() => setCookOrNot(false)} variant="primary" size='lg' className="m-2">No</Button>
                    </Card.Body>
                </Card>
            </LandingCard>
        );
    }

    return (
        <div className="container mt-5">
            <Button variant="link" onClick={() => setCookOrNot(null)}>← Go Back</Button>
            {cookOrNot === true ? <CookingPage /> : <RestaurantPage />}
        </div>
    );
}

export default Landing;