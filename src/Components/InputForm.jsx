import React from "react";
import ReactDOM from "react-dom/client";
import {Card,Row, Col,Container,Form} from "react-bootstrap";

export default function InputForm() {
    return (  
        //create input form with react-bootstrap library
        //crate a form group with label and input field on same line
        <>
        
        <Container>
            <Card>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Year of birth</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="number" placeholder="Enter year of birth" />        
                        </Col>                        
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Gestation Weeks</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="number" placeholder="Enter Gestation weeks" />        
                        </Col>                        
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Z-score</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="number" placeholder="Enter Zscore" />        
                        </Col>                        
                    </Form.Group>
                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Gender</Form.Label>
                        <Col sm={5}>
                            <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            id="radioMale"
                            />
                            </Col>
                            <Col sm={5}>
                            <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            id="radioFemale"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>

                </Form>
            </Card>

        </Container>       
        </>
    );
}