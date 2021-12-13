import React from "react";

import "./AddIssue.css";

function AddIssue() {
  return (
    <div className="add-issue">
      <form>
        <label>
          Description
          <input type="text" placeholder="Description of Issue..." />
        </label>
        <label>
          Assign To
          <select name="forDev" id="forDev">
            <option value="Ronaldo">Ronaldo</option>
            <option value="Messi">Messi</option>
            <option value="Neymar">Neymar</option>
            <option value="Pele">Pele</option>
          </select>
        </label>
        <label>
          Priority
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Extra-High">Extra-High</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
