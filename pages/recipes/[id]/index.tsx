import { Ingredient, Instruction, Recipe } from "@models/index";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Recipe = () => {
  const router = useRouter();
  const { recipes } = useSelector((state: any) => state.GeneralReducer);
  const [activeRecipe, setActiveRecipe] = useState<Recipe>();
  const [count, setCount] = useState(1);
  const [currentServing, setCurrentServing] = useState(1);

  useEffect(() => {
    if (router?.query?.id) {
      const recipeInstructions = [];
      const active =
        recipes.filter(
          (recipe: Recipe) => recipe.name === router?.query?.id
        )[0] || {};

      if (Object.keys(active).length > 0) {
        for (const [_, value] of Object.entries(active?.instructions)) {
          recipeInstructions.push(value);
        }
      }

      active.instructions = recipeInstructions;

      setActiveRecipe(active);
      setCurrentServing(parseInt(active.servings));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdateCurrentServing = (value: number) => {
    const servings: string = activeRecipe?.servings || "1";
    const currentCount = count;

    if (currentCount + value > 0) {
      setCurrentServing(parseInt(servings) * (currentCount + value));

      setCount((prevValue) => {
        return prevValue + value;
      });
    }
  };

  return (
    <>
      <Head>
        <title>{activeRecipe?.name}</title>
      </Head>
      <Row className="active-recipe">
        <Col lg={8} className="content left">
          <h3 className="my-4">Method</h3>
          {activeRecipe?.instructions.map(
            (instruction: Instruction, index: number) => {
              return (
                <div key={index}>
                  {index + 1}. &nbsp; &nbsp; {instruction.text}
                </div>
              );
            }
          )}
        </Col>
        <Col lg={4} className="content right my-4">
          <Card>
            <Card.Header>
              <Card.Title>Ingredients</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {activeRecipe?.ingredients?.map(
                  (ingredient: Ingredient, index: number) => {
                    return (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col lg={3} xs={6}>
                            <div className="avatar"></div>
                          </Col>
                          <Col lg={9} xs={6}>
                            <div className="d-flex flex-column">
                              <b>{ingredient?.name}</b>
                              <div>
                                {ingredient?.quantity * count}
                                {ingredient?.unit}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    );
                  }
                )}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col lg={6}>
                  <span className="title">Servings</span>
                  <ListGroup horizontal>
                    <ListGroup.Item onClick={() => onUpdateCurrentServing(-1)}>
                      -
                    </ListGroup.Item>
                    <ListGroup.Item>{currentServing}</ListGroup.Item>
                    <ListGroup.Item onClick={() => onUpdateCurrentServing(+1)}>
                      +
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col lg={6}>
                  <h3>{activeRecipe?.duration || "0min"}</h3>
                  <span>Cooking Time</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Recipe;
