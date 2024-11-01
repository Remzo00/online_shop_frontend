import { useState, useContext } from 'react';
import { RegisterContainer, Form, Label, Input, Button, Title } from './index.styled';
import { AppContext } from '../../context/AppContext';

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

    return (
        <RegisterContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Registracija</Title>
                <div>
                    <Label>Korisničko ime:</Label>
                    <Input type="text" name="name" value={form.name} onChange={handleChange} required />
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
    );
}
