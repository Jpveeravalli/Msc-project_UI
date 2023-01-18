import React from 'react';
import ReactDOM from 'react-dom/client';
import InputForm from '../Components/InputForm';
import GraphDisplay from '../Components/GraphDisplay';
import { Col, Row } from 'react-bootstrap';

export default function calculation() {
  return (
    <>
    <div>
      <Row>
        <Col>
        <InputForm></InputForm>
        </Col>
        <Col>
        <GraphDisplay></GraphDisplay>
        </Col>
        
        
      </Row>
    </div>
    </>
    
  )
}