import { useState, useContext, useEffect } from "react";
import { LoginContainer, Form, Label, Input, Button, Title } from "./index.styled";
import { AppContext } from '../../context/AppContext';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { loginUser, isAuthenticated } = useContext(AppContext);
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(form);
    };

    useEffect(() => {
      if (isAuthenticated) {
          navigate("/");
      }
  }, [isAuthenticated, navigate]);

    return(
        <LoginContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Prijava</Title>
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
    );
}
