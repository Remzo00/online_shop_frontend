import { useState } from "react";
import { LoginContainer, Form, Label, Input, Button } from "./index.styled";
export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Prijava:', form);
    };

    return(
        <LoginContainer>
      <h1>Prijava</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email:</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <Label>Lozinka:</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <Button type="submit">Prijavi se</Button>
        <p>Nemate nalog? <a href="/register">Registrujte se</a></p>
      </Form>
    </LoginContainer>
    )
}