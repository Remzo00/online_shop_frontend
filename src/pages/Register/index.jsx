import { useState } from 'react';
import { RegisterContainer, Form, Label, Input, Button } from './index.styled';
export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registracija:', form);
  };

    return(
        <RegisterContainer>
      <h1>Registracija</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Korisničko ime:</Label>
          <Input type="text" name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div>
          <Label>Email:</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <Label>Lozinka:</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <Button type="submit">Registruj se</Button>
      </Form>
    </RegisterContainer>
    )
}