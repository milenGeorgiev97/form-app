import { useForm } from "react-hook-form";
import React from "react";

function AdditionalForm(props) {
  const { register, errors } = useForm();

  return (
    <div>
      <select name="diseases" ref={register({ required: true })}>
        <option value="artrit">Artrites</option>
        <option value="backPain">Back pain</option>
        <option value="mentalIllness">Mental illness</option>
        <option value="noDiseases">No diseases</option>
      </select>
      <br />

      <label>Height(cm): </label>
      <input type="number" name="height" ref={register({ required: true })} />
      {errors.height && errors.height.type === "required" && (
        <span>This field is required!</span>
      )}

      <br />

      <label>Date of birth(yyyy-mm-dd):</label>
      <input
        type="data"
        name="dateOfBirth"
        ref={register({ required: true })}
      />
      {errors.data && errors.data.type === "required" && (
        <span>This field is required!</span>
      )}
      <br />

      <label>Bio:</label>
      <textarea name="bio" />
      {errors.bio && errors.bio.type === "required" && (
        <span>This field is required!</span>
      )}
      <br />
    </div>
  );
}

export default AdditionalForm;
