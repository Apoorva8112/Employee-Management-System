import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  let navigate = useNavigate();

  const [addDeparmentRequest, setAddDeparmentRequest] = useState({});

  const handleUserInput = (e) => {
    setAddDeparmentRequest({
      ...addDeparmentRequest,
      [e.target.name]: e.target.value,
    });
  };

  const departmentAction = (e) => {
    fetch("http://localhost:8087/department/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addDeparmentRequest),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");
            alert(res.responseMessage)
          } else {
            console.log("Failed to fetch the departments");
            alert("Failed to fetch the departments")
            
          }
        });
      })
      .catch((error) => {
        console.error(error);
        alert("It seems server is down")
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">Add Department</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label for="name" class="form-label">
                  <b>Department</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={addDeparmentRequest.name}
                />
              </div>
              <div class="mb-3 text-color">
                <label for="description" class="form-label">
                  <b>Description</b>
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  name="description"
                  placeholder="enter description.."
                  onChange={handleUserInput}
                  value={addDeparmentRequest.description}
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={departmentAction}
              >
                Add Department
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
