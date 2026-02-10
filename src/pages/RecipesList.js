import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap'


function RecipeList() {
    const [searched] = useSearchParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const cuisineQuery = searched.get('cuisine')

    useEffect(() => {

        const fetchRecipes = async () => {
            setLoading(true);
            const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineQuery}&apiKey=${API_KEY}&number=9`
                );
                const data = await response.json();
                setRecipes(data.results);
                console.log(data.results)
            } catch (error) {
                console.log('something is very wrong')
                console.error("Error fetching recipes: ", error)
            } finally {
                setLoading(false)
            }

        };
        if (cuisineQuery) fetchRecipes();

    },
        [cuisineQuery]);

    if (loading) return <Spinner animation="border" className="m-5" />;

    return (
        <Container className="mt-5">
            <h2>Results for: {cuisineQuery.replace(',', ', ')}</h2>
            <Row>
                {recipes.map((recipe) => (
                    <Col key={recipe.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default RecipeList