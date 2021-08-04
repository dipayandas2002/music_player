import React from "react";
import {Button ,Form ,FormControl} from "react-bootstrap";


function search() {
  return (
    
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
    
  );
}

export default search;
