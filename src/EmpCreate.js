import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const EmpCreate = () => {
  const [empId] = useState("");
  const [empName, empNamechange] = useState("");
  const [empEmail, empEmailchange] = useState("");
  const [empPhone, empPhonechange] = useState("");
  const [validate, valchange] = useState(false);
  const empData = { empName, empEmail, empPhone };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employee", empData)
      .then((response) => {
        swal("Success", "User added", "success");
        navigate('/');
      })
      .catch((error) => {
        swal("Opps", "An Error occured while adding user", "error");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ marginleft: "12px" }}>Emplyee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        disabled
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={empName}
                        onChange={(e) => empNamechange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                      {empName.length==0 && <span className="text-danger">Please Enter Name</span>}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={empEmail}
                        onChange={(e) => empEmailchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={empPhone}
                        onChange={(e) => empPhonechange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group d-flex justify-content-end mt-2">
                      <button type="submit" className="btn btn-success me-2">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
