import React, { Component } from "react";
import Form from "./components/form/Form";
import AdditionalForm from "./components/additionalForm/AdditionalForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      diseases: "",
      heigth: "",
      dateOfBirth: "",
      bio: "",
    };
  }

  render() {
    return (
      <div>
        <Form />
        <AdditionalForm />
      </div>
    );
  }
}

export default App;
