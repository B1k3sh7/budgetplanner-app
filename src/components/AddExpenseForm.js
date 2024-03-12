import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div class="row">
        <div class="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div class="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            class="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
            required
          />
        </div>
        <div class="col-sm">
          <button type="Submit" class="btn btn-primary mt-4">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
