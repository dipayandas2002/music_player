import React,{useState} from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { } from "../CSS/search&playlist.css";
import add from "../images/add.png"




function Search(props) { //S of search must be in capital letter

  const [input, inputChange] = useState("")  //in useState(`here lies the primary value`)
  // let array=[]

  function changeHandler(event) {
    const val = event.target.value;
    inputChange(val);        
    
    //change the value here // return when the input is of type array or object
    // console.log(val);
  }

  function clickHandler() {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=AIzaSyAQDDv-XUWs9qtI8nSRTNguc8oAQiT9frw`)
  .then(response => response.json())
  .then(data => {
    // console.log(data.items); //data.items[].snippet.title or thumbnails{} // items is an []
    
    props.searchFunction(data.items);
    
  });
  inputChange("")
  }


  return (

    <Form className="d-flex" >
      <FormControl onChange={changeHandler}
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={input}
      />
      <Button onClick={clickHandler} variant="outline-primary">Search</Button>
    </Form>

  );
}

function List(props) {

  function handleAdd() {
    props.onAdd(props.id)
  }

  return <li >
    <div>{props.name}</div>
    <button className="ListButton" onClick={handleAdd}><img src={add} alt="+" /></button>
  </li>

}

export  {Search,List};
