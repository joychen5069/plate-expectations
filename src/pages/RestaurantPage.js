import React from 'react';
import { Form } from 'react-bootstrap';

function RestaurantPage() {
    const cuisine = [
        'African', 'American', 'British', 'Cajun', 'Caribbean',
        'Chinese', 'Eastern European', 'European', 'French',
        'German', 'Greek', 'Indian', 'Irish', 'Italian',
        'Japanese', 'Jewish', 'Korean', 'Latin American',
        'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic',
        'Southern', 'Spanish', 'Thai', 'Vietnamese'
    ];

    return (
        <div className="container">
            <h1>What type of food do you want to eat?</h1>
            <Form>
                {cuisine.map((uisines) => (
                    <div key={uisines} className='mb-3'>
                        <Form.Check // prettier-ignore 
                            type="checkbox"
                            id={`uisines-${uisines}`}
                            label={uisines}
                        />
                    </div>
                ))}

            </Form>
        </div>
    );
}

export default RestaurantPage;