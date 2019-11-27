import React from "react";

function Form(props) {
    console.log("props is", props)
  const { onChange, onSubmit, teamFormValues } = props;
  //const { fullname, email, department } = teamFormValues;
  return (
    <Form>
      <input
        id="fullnameInput"
        name="fullname"
        type="text"
        onChange={onChange}
      />
      <input
        id="emailInput"
        name="email"
        type="text"
        onChange={onChange}
      />
      {/* <select name="department" id="departmentOption" onChange={onChange}>
        <option value={}></option>
        <option value={}>Front-End Engineer</option>
        <option value={}>Back-End Engineer</option>
        <option value={}>iOS Engineer</option>
        <option value={}>UI/UX DESIGNER</option>
        <option value={}>Data Scientist</option>
      </select> */}
    </Form>
  );
}

export default Form;
