import { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import './AddEdit.css'
import { toast } from 'react-hot-toast';
import axios from 'axios';

const initialState = {
  name:"",
  quantity:""
};




const AddList = () => {

  const navigate = useNavigate();
  const [state, setState ] = useState(initialState);
  const {name, quantity} = state;

  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`)
    .then( (res) => setState({...res.data[0]}));
  }, [id])


  const handleSubmit = (e) => {
    e.preventDefault();
    if( !name || !quantity ){
      toast.error("Please fill all field");
    }else{
      if( !id ){
        axios.post("http://localhost:5000/api/post", {
          name,
          quantity
        }).then(() => {
          setState({name:"", quantity:""})
        }).catch((err) => toast.error(err.response.data));
  
        toast.success("Item added successfully");
        
      }else{
        axios.put(`http://localhost:5000/api/update/${id}`, {
          name,
          quantity
        }).then(() => {
          setState({name:"", quantity:""})
        }).catch((err) => toast.error(err.response.data));
  
        toast.success("Item updated successfully");
      }

      setTimeout(() => navigate("/"), 500);
      
    }
  }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]:value})
  }
  return (
    <div style={{marginTop:"100px"}}>
    <form
    style={{
      margin:"auto",
      padding:"15px",
      maxWidth:"400px",
      alignContent:"center"
    }}
    onSubmit={handleSubmit}
    >
      <label htmlFor="name">Items</label>
      <input
         type='text'
         id='name'
         name='name'
         placeholder='Items name'
         value={name || ""}
         onChange={handleInputChange}
         />
         <label htmlFor="quantity">Quantity</label>
      <input
         type='number'
         id='quantity'
         name='quantity'
         placeholder='quantity'
         value={quantity || ""}
         onChange={handleInputChange}
         />

        <input type="submit" value={ id ? "Update" : "Add"}/>
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
    </form>
      
    </div>
  )
}

export default AddList
