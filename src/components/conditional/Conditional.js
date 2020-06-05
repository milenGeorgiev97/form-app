import React from "react";
import AdditionalForm from "../additionalForm/AdditionalForm";

function Conditional(props) {
  if (props.firstName && props.lastName && props.email && props.password) {
    return <AdditionalForm />;
  } else {
    return <h1>Fill all the inputs above...</h1>;
  }
}

export default Conditional;
