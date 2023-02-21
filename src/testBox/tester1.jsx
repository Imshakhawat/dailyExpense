import React from "react";
import { useForm } from "react-hook-form";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export default function AddExpense() {
  const [FormData, setFormData] = useState([]);
  const [expenseData, setexpenseData] = useState({});

  const handleSubmit = () => {
    setFormData([...FormData, expenseData]);
    console.log(FormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // console.log(name + " "+value);

    setexpenseData((expenseData) => ({
      ...expenseData,
      [name]: value,
    }));
    console.log(expenseData);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container border flex-column ">
        <div className="text-center">
          <h3>Add Expense</h3>
        </div>

        <label className="form-label ">Category</label>

        <label></label>
        <select className="form-select" onChange={handleChange} name="Category">
          <option value="food">food</option>
          <option value="Transport">Transport</option>
          <option value="HouseHold">HouseHold</option>
        </select>

        <div className="">
          <label className="form-label">Details</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="Details"
          ></input>
        </div>
        <div className="">
          <label className="form-label">Amount</label>
          <input
            placeholder="Tk"
            type="number"
            className="form-control"
            onChange={handleChange}
            name="Amount"
          ></input>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary mt-3 "
            type="submit"
            onClick={handleSubmit}
          >
            ADD
          </button>
        </div>

        <div className="container-fluid">
          <div class="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Details </th>
                  <th scope="col">Amount </th>
                </tr>
              </thead>
              <tbody>
                {FormData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Category}</td>
                    <td>{item.Details}</td>
                    <td>{item.Amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <label className="form-label ">Category</label>
            <select
              className="form-select"
              onChange={handleChange}
              name="Category"
            >
              <option value="food">food</option>
              <option value="Transport">Transport</option>
              <option value="HouseHold">HouseHold</option>
            </select>

            <div className="">
              <label className="form-label">Details</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="Details"
              ></input>
            </div>

            <div className="">
              <label className="form-label">Amount</label>
              <input
                placeholder="Tk"
                type="number"
                className="form-control"
                onChange={handleChange}
                name="Amount"
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
