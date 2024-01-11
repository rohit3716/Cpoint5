import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    // console.log(response);
    setData(response.data);
  };


  useEffect(() => {
    loadData();
  }, []);

  const deleteItem = (id) => {
    if( window.confirm("Are you sure wanted to delete this item ? ")){
      axios.delete(`http://localhost:5000/api/delete/${id}`);
      toast.success('Item deleted successfully');
      setTimeout( () => loadData(), 500)
    }
  }
  
  return (
    <div style={{ marginTop: "150px" }}>

    <Link to={"/addList"}>
        <button className="btn btn-add">Add Item</button>
    </Link>
      <table className=" styled-table ">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Items</th>
            <th style={{ textAlign: "center" }}>Quantity</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-del" onClick={ () => deleteItem(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
