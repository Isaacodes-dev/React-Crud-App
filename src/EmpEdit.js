import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';

const EmpEdit = () =>{
    const {empid} = useParams();
    const [empName, empNamechange] = useState("");
    const [empEmail, empEmailchange] = useState("");
    const [empPhone, empPhonechange] = useState("");
    const [empdata, empdatachange] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/employee/${empid}`)
      .then((response) => {
        empdatachange(response.data);
      })
      .catch((error) => {
        swal("Opps!", "An Error occured while loading users", "error");
      });
  }, []);
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/employee"+e.id, '')
      .then((response) => {
        swal("Success", "User added", "success");
        navigate('/');
      })
      .catch((error) => {
        swal("Opps", "An Error occured while adding user", "error");
      });
    }
    
    return(
        <div>
            <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ marginleft: "12px" }}>Emplyee Edit</h2>
              </div>
              {empdata && 
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={empdata.empName}
                        onChange={(e) => empNamechange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={empdata.empEmail}
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
                        value={empdata.empPhone}
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
              }
            </div>
          </form>
        </div>
      </div>
        </div>
    );
}

export default EmpEdit;