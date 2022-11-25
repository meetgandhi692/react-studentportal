import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function LoginForm({onSuccess}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const checkLogin = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:5000/credentials");
    const data = await req.json();

    if (data[0].username === user && data[0].password === pass) {
      // alert("Success!!!");
      onSuccess()
    } else {
      alert("Invalid Credentials!");
    }
    console.log(data[0].username);
  };

  return (
    <Form className="login" onSubmit={checkLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PRN</Form.Label>
        <Form.Control
          type="text"
          placeholder="PRN"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
