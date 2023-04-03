import axios from "axios";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);

    const navigate=useNavigate();

  const loadDetail=(id)=>{
    navigate("/employee/details/"+id);
  }
  const removeDetail=(id)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("User has been removed!", {
            icon: "success",
          });
          axios.delete(`http://localhost:8000/employee/${id}`);
        } else {
          swal("Error Occured while removing user!");
        }
      });
  }
  const editDetail=(id)=>{
    navigate("/employee/edit/"+id);
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/employee")
      .then((response) => {
        empdatachange(response.data);
      })
      .catch((error) => {
        swal("Opps!", "An Error occured while loading users", "error");
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Lising</h2>
        </div>
        <div className="d-flex justify-content-end me-3">
            <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
        </div>
        <div className="card-body">
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata && empdata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.empName}</td>
                  <td>{item.empEmail}</td>
                  <td>{item.empPhone}</td>
                  <td>
                    <a onClick={()=>{editDetail(item.id)}} className="btn btn-success me-2">Edit</a>
                    <a onClick={()=>{removeDetail(item.id)}} className="btn btn-danger me-2">Remove</a>
                    <a onClick={()=>{loadDetail(item.id)}} className="btn btn-primary">Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
