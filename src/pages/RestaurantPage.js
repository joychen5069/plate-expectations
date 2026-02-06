import React from 'react';
import { Form } from 'react-bootstrap';

function RestaurantPage() {
    const cuisines = [
        'Italian',
        'Chinese',
        'Mexican',
        'Indian',
        'Thai',
        'Japanese',
        'Mediterranean',
        'American'
    ]

    return (
        <div className="container">
            <h1>What type of food do you want to eat?</h1>
            <Form>
                {cuisines.map((cuisines) => (
                    <div key={cuisines} className='mb-3'>
                        <Form.Check // prettier-ignore 
                            type="checkbox"
                            id={`cuisines-${cuisines}`}
                            label={cuisines}
                        />
                    </div>
                ))}

            </Form>
        </div>
    );
}

export default RestaurantPage;