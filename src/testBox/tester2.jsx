import React from "react";
import { useForm } from "react-hook-form";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function MyComponent() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const style = {
    width: "6rem",
    margin:'10px'
  };
  return (
    <div className="container border  ">
      <div className="text-center">
        <h3>Add Expense</h3>
      </div>

      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm d-flex">
            <label className="form-label ">Category</label>
            <DropdownButton className="ms-2" id="dropdown-basic-button" title="Select an item">
              <Dropdown.Item
                eventKey="item1"
                value="1"
                {...register("selectedItem")}
              >
                Item 1
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="item2"
                value="1"
                {...register("selectedItem")}
              >
                Item 2
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="item3"
                value="1"
                {...register("selectedItem")}
              >
                Item 3
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-sm">
            <label className="form-label">Details</label>
            <input
              type="text"
              className="form-control"
              {...register("details")}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="col-sm">
            <label className="form-label">Amount</label>
            <input
              placeholder="Tk"
              type="text"
              className="form-control"
              {...register("Amount")}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
        </div>

        <button className="btn btn-primary " type="submit" style={style}>
          ADD
        </button>
      </form>
    </div>
  );
}
