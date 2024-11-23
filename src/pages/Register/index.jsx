import { useState, useContext } from 'react';
import { RegisterContainer, Form, Label, Input, Button, Title, InputContainer, Text, Link } from './index.styled';
import { AppContext } from '../../context/AppContext';
import $ from 'jquery';

export default function Register() {
    const { registerUser } = useContext(AppContext);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(form); 
    };

    $("button").hover(
        function () {
            $(this).animate({ backgroundColor: "#0056b3", transform: "scale(1.1)" }, 300);
        },
        function () {
            $(this).animate({ backgroundColor: "#007bff", transform: "scale(1.0)" }, 300);
        }
    );

    $(".form").hide().fadeIn(1000);

    return (
        <RegisterContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Registracija</Title>
                <InputContainer>
                    <Label>Korisničko ime:</Label>
                    <Input type="text" name="name" value={form.name} onChange={handleChange} required />
                </InputContainer>
                <InputContainer>
                    <Label>Email:</Label>
                    <Input type="email" name="email" value={form.email} onChange={handleChange} required />
                </InputContainer>
                <InputContainer>
                    <Label>Lozinka:</Label>
                    <Input type="password" name="password" value={form.password} onChange={handleChange} required />
                </InputContainer>
                <Button type="submit">Registruj se</Button>
                <Text>Vec imas nalog? <Link href="/login">Uloguj se</Link></Text>
            </Form>
        </RegisterContainer>
    );
}
