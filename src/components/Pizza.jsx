import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";


const Pizza = ({ pizza }) => {



  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
   
        />

        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  
                >
                  {pizza.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
             
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row> 
 
            <Col md={6}>
              <Button
             
                className="bg-warning text-white"
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* modal */}
    
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
      
    </>
  );
};

export default Pizza;
