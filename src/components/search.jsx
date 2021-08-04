import React from "react";
import {Button ,Form ,FormControl} from "react-bootstrap";


function search() {
  return (
    <div style={{width:"50%"}}>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </div>
  );
}

export default search;
