import React, { useState, useEffect } from "react";
// import AllPizza  from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  const [allPizza, setAllPizza] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllPizza(data);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          {allPizza && allPizza.map((pizza) => 
            <Col md={4} key={pizza.id}>
              <Pizza pizza={pizza} />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
