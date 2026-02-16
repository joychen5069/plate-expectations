import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


function RecipeDetails() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    // const cuisineQuery = searched.get('cuisine')
    const navigate = useNavigate()

    // const [recipeID, setRecipeID] = useState('')

    useEffect(() => {

        const fetchDetails = async () => {
            setLoading(true);
            const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
                );
                const data = await response.json();
                // setRecipesDetails(data.results);
                console.log(data)
            } catch (error) {
                console.log('something is very wrong')
                console.error("Error fetching recipes: ", error)
            } finally {
                setLoading(false)
            }

        };
        if (id) fetchDetails();

    },
        [id]);

    if (loading) return <Spinner animation="border" className="m-5" />;

    const recipeSearch = (id) => {
        console.log("recipe ID: ", id)
        navigate(`/recipe-details?id=${id}`)
    }

    return (
        <Container className="mt-5">
            <h2> LOADED </h2>
            {/* <Row>
                {recipeDetails.map((recipe) => (
                    <Col key={recipe.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Button
                                    className="btn btn-link"
                                    onClick={() => recipeSearch(recipe.id)}
                                >
                                    {recipe.title}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
        </Container>
    )
};

export default RecipeDetails