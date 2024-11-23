import { useState, useContext, useEffect } from "react";
import { LoginContainer, Form, Label, Input, Button, Title, InputContainer, Text, Link } from "./index.styled";
import { AppContext } from '../../context/AppContext';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

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

      $("button").hover(
        function () {
            $(this).animate({ backgroundColor: "#0056b3", transform: "scale(1.1)" }, 300);
        },
        function () {
            $(this).animate({ backgroundColor: "#007bff", transform: "scale(1.0)" }, 300);
        }
    );

    $(".form").hide().fadeIn(1000);
    
  }, [isAuthenticated, navigate]);

    return(
        <LoginContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Prijava</Title>
                <InputContainer>
                    <Label>Email:</Label>
                    <Input type="email" name="email" value={form.email} onChange={handleChange} required />
                </InputContainer>
                <InputContainer>
                    <Label>Lozinka:</Label>
                    <Input type="password" name="password" value={form.password} onChange={handleChange} required />
                </InputContainer>
                <Button type="submit">Prijavi se</Button>
                <Text>Nemate nalog? <Link href="/register">Registrujte se</Link></Text>
            </Form>
        </LoginContainer>
    );
}
