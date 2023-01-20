import React from "react";
import ReactDOM from "react-dom/client";
import { Card, Row, Col, Container, Form } from "react-bootstrap";

export default function InputForm() {
    return (
        //create input form with react-bootstrap library
        //crate a form group with label and input field on same line
        <>

            <Container>
                <h1>Data</h1>
                <br></br>
                <Card>
                    <Form className="text-start m-4">
                        <Form.Group as={Row} className="p-2">
                            <Form.Label column sm={4}>Year of birth</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="number" placeholder="Enter year of birth" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="p-2">
                            <Form.Label column sm={4}>Gestation Weeks</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="number" placeholder="Enter Gestation weeks" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="p-2">
                            <Form.Label column sm={4}>Z-score</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="number" placeholder="Enter Zscore" />
                            </Col>
                        </Form.Group>
                        {/* create a form group for Gender */}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Gender</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="radioMale"
                                />
                            </Col>
                            <Col sm={4} >
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="radioFemale"
                                />
                            </Col>
                        </Form.Group >
                        {/* create a form group for Level 3 */}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Level 3</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="level3"
                                    id="level3Yes"
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="level3"
                                    id="level3No"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>
                        {/* create a form group for PROM*/}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>PROM</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="prom"
                                    id="promYes"
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="prom"
                                    id="promNo"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>
                        {/* create a form group for Chorioamnionitis */}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Chorioamnionitis</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="chorioamnionitis"
                                    id="chorioamnionitisYes"
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="chorioamnionitis"
                                    id="chorioamnionitisNo"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>
                        {/* create a form group for Maternal Antenatal Steroids*/}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Maternal Antenatal Steroids</Form.Label>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="No Treatment"
                                    name="MaternalAntenatalSteroids"
                                    id="MaternalAntenatalSteroidsNT"
                                />
                            </Col>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="Incomplete Treatment"
                                    name="MaternalAntenatalSteroids"
                                    id="MaternalAntenatalSteroidsIT"
                                />
                            </Col>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="Completed Treatment"
                                    name="MaternalAntenatalSteroids"
                                    id="MaternalAntenatalSteroidsCT"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>
                        {/* create a form group for Congenital Anomaly  */}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Congenital Anomaly</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="CongenitalAnomaly"
                                    id="CongenitalAnomalyYes"
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="CongenitalAnomaly"
                                    id="CongenitalAnomalyNo"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>
                        {/* create a form group for Multiple Births */}
                        <Form.Group as={Row} className="p-2">
                            <Form.Label as="legend" column sm={4}>Multiple Births</Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="MultipleBirths"
                                    id="MultipleBirthsYes"
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="MultipleBirths"
                                    id="MultipleBirthsNo"
                                    defaultChecked
                                />
                            </Col>
                        </Form.Group>

                    </Form>
                </Card>
            </Container>
        </>
    );
}