import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

function Form(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    data.password === data.confirmPassword
      ? console.log(data)
      : console.log("Passwords must match!");
  };

  return (
    <div>
      <form className="regForm" onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 2 })}
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
        <input name="submit" type="submit" />
      </form>
    </div>
  );
}

export default Form;
