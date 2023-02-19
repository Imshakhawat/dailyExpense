import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function AddExpense2() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");

  const handleDropdownSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedItem || "Select an item"}
      >
        <Dropdown.Item eventKey="item1" onSelect={handleDropdownSelect}>
          Item 1
        </Dropdown.Item>
        <Dropdown.Item eventKey="item2" onSelect={handleDropdownSelect}>
          Item 2
        </Dropdown.Item>
        <Dropdown.Item eventKey="item3" onSelect={handleDropdownSelect}>
          Item 3
        </Dropdown.Item>
      </DropdownButton>
      <br />
      <label>
        Input 1:
        <input type="text" value={input1Value} onChange={handleInput1Change} />
      </label>
      <br />
      <label>
        Input 2:
        <input type="text" value={input2Value} onChange={handleInput2Change} />
      </label>
      <button className="btn btn-primary"> hola</button>
    </div>
  );
}
