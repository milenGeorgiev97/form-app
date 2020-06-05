import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Conditional from "../conditional/Conditional";
import "./form.css";

function Form() {
  const { register, handleSubmit, watch, errors } = useForm();

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [diseases, setDiseases] = useState("");
  const [heigth, setHeigth] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log("Passwords must match!");
      dateOfBirth && diseases && heigth && bio
        ? console.log(data)
        : console.log("Fill in the missing inputs");
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
      return;
    }
    if (name === "lastName") {
      setLastName(value);
      return;
    }
    if (name === "email") {
      setEmail(value);
      return;
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <div>
      <form className="regForm" onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 2 })}
          onChange={handleChange}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span>This field is required!</span>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <span>The minimum length is 2! </span>
        )}
        <br />

        <label>Last Name</label>
        <input
          name="lastName"
          ref={register({ required: true, minLength: 2 })}
          onChange={handleChange}
        />
        {errors.lastName && errors.lastName.type === "required" && (
          <span>This field is required!</span>
        )}
        {errors.lastName && errors.lastName.type === "minLength" && (
          <span>The minimum length is 2! </span>
        )}
        <br />

        <label>E-mail</label>
        <input
          name="email"
          type="email"
          ref={register({ required: true, minLength: 5 })}
          onChange={handleChange}
        />
        {errors.email && errors.email.type === "required" && (
          <span>This field is required!</span>
        )}
        {errors.email && errors.email.type === "minLength" && (
          <span>The minimum length is 5! </span>
        )}
        <br />

        <label>Password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
          onChange={handleChange}
        />
        {errors.password && errors.password.type === "required" && (
          <span>This field is required!</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>The minimum length is 6! </span>
        )}
        <br />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          ref={register({
            required: true,
            minLength: 6,
            validate: (value) => value === watch("password"),
          })}
        />
        {errors.confirmPassword && <span>Paswords must match!</span>}
        <br />
        <Conditional
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
        />

        <input name="submit" type="submit" />
      </form>
    </div>
  );
}

export default Form;
