import React, { useState, useRef } from "react";
import TableComp from "./../common/TableComp";
import styles from "./HTMLHandlingFeatures.module.css";
import { Form, Button } from "react-bootstrap";
import  { textFilter } from "react-bootstrap-table2-filter";
const HTMLHandlingFeatures = (props) => {
  const [currentRow, setCurrentRow] = useState({});
  const products = [
    { id: 1, name: "George", animal: "Monkey" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Foster", animal: "Tiger" },
    { id: 5, name: "Tracy", animal: "Bear" },
    { id: 6, name: "Joesph", animal: "Lion" },
    { id: 7, name: "Tania", animal: "Deer" },
    { id: 8, name: "Chelsea", animal: "Tiger" },
    { id: 9, name: "Benedict", animal: "Tiger" },
    { id: 10, name: "Chadd", animal: "Lion" },
    { id: 11, name: "Delphine", animal: "Deer" },
    { id: 12, name: "Elinore", animal: "Bear" },
    { id: 13, name: "Stokes", animal: "Tiger" },
    { id: 14, name: "Tamara", animal: "Lion" },
    { id: 15, name: "Zackery", animal: "Bear" },
  ];

  const columns = [
    { dataField: "id", text: "Id", sort: true, filter: textFilter() },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "animal", text: "Animal", sort: true, filter: textFilter() },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];


  const ADDEDITFORM = () => {
    const handleClick = (event) => {
      event.preventDefault();
      debugger;
      console.log(currentRow);
      console.log(event.target.email.value);
    };
    return (
      <div>
        <Form onSubmit={handleClick}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={currentRow.name}
              name="name"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Animal</Form.Label>
            <Form.Control
              type="text"
              value={currentRow.animal}
              name="animal"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  };

  return (
    <div className={styles.HTMLHandlingFeatures}>
      <TableComp
        products={products}
        columns={columns}
        defaultSorted={defaultSorted}
        ADDEDITFORM={ADDEDITFORM}
      ></TableComp>
    </div>
  );
};

HTMLHandlingFeatures.propTypes = {};

HTMLHandlingFeatures.defaultProps = {};

export default HTMLHandlingFeatures;
