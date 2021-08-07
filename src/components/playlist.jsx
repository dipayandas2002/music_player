import minus from "../images/minus.png"
function PlayList(props) {

    function handleRemove() {
      props.onDel(props.id)
    }
  
    return <li >
      <div>{props.name}</div>
      <button  onClick={handleRemove}><img src={minus} alt="-" /></button>
    </li>
  
  }


  export default PlayList;