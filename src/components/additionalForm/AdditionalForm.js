import React from "react";
import { useForm } from "react-hook-form";

function AdditionalForm(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="additionalForm" onSubmit={handleSubmit(onSubmit)}>
        <select name="diseases" ref={register({ required: true })}>
          <option value="artrit">Artrites</option>
          <option value="backPain">Back pain</option>
          <option value="mentalIllness">Mental illness</option>
          <option value="noDiseases">No diseases</option>
        </select>
        <br />

        <label>Height(cm): </label>
        <input name="height" ref={register({ required: true })} />
        <br />

        <label>Date of birth(yyyy-mm-dd):</label>
        <input type="data" ref={register({ required: true })} />
        <br />

        <label>Bio:</label>
        <textarea />
        <br />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AdditionalForm;
