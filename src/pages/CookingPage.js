import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function CookingPage() {
    const [cuisineSelected, setCuisineSelected] = useState([]);
    const navigate = useNavigate()

    const cuisine = [
        'African', 'American', 'British', 'Cajun', 'Caribbean',
        'Chinese', 'Eastern European', 'European', 'French',
        'German', 'Greek', 'Indian', 'Irish', 'Italian',
        'Japanese', 'Jewish', 'Korean', 'Latin American',
        'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic',
        'Southern', 'Spanish', 'Thai', 'Vietnamese'
    ];

    const handleCheck = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCuisineSelected([...cuisineSelected, value]);
        } else {
            setCuisineSelected(cuisineSelected.filter((c) => c !== value));
        }
    }

    const recipeList = () => {
        const query = cuisineSelected.join(',');
        navigate(`/recipes?cuisine=${query}`)
    }

    return (
        <div className="container">
            <h1>What type of food do you want to cook?</h1>
            <Form>
                <Row>
                    {cuisine.map((cuisine) => (
                        <div key={cuisine} className='mb-3'>
                            <Form.Check // prettier-ignore 
                                type="checkbox"
                                id={`cuisine-${cuisine}`}
                                label={cuisine}
                                value={cuisine}
                                onChange={handleCheck}
                            />
                        </div>
                    ))}
                </Row>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={recipeList}
                    disabled={cuisineSelected.length === 0}
                >
                    Search Recipes
                </Button>

            </Form>
        </div>
    );
}

export default CookingPage;