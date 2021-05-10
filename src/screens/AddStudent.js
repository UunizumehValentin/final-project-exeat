import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const AddStudent = () => {
  return (
    <Container>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="enter name"></Form.Control>
        <Form.Label>Year</Form.Label>
        <Form.Control placeholder="enter year"></Form.Control>
        <Form.Label>Index Number</Form.Label>
        <Form.Control placeholder="enter index number"></Form.Control>
        <Form.Label>Destination</Form.Label>
        <Form.Control placeholder="enter destination"></Form.Control>
        <Form.Label>Reason</Form.Label>
        <Form.Control placeholder="describe reason"></Form.Control>
        <Form.Label>Departure Date</Form.Label>
        <Form.Control placeholder="enter date of departure"></Form.Control>
        <Form.Label>Return Date</Form.Label>
        <Form.Control placeholder="enter date of return"></Form.Control>
        <Form.Label>Select Status</Form.Label>
        <select name="status" className="custom-select" id="exampleSelect1">
          <option>choose status</option>
          <option value="status">Active</option>
          <option value="status">Inactive</option>
        </select>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddStudent;
