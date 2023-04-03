import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert';

const EmpDetails = () =>{
    const {empid} = useParams();
    const [empdata, empdatachange] = useState({});
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
    
    return(
        <div>
            <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ marginleft: "12px" }}>Emplyee Create</h2>
              </div>
              {empdata && 
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={empdata.empName}
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
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group d-flex justify-content-end mt-2">
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

export default EmpDetails;