import { useState, useEffect, useContext } from "react";
import { ProfileContainer, Form, Label, Input, Button } from "./index.styled";
import { getUser, updateUser, deleteUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
export default function Profile() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        role: ''
    });
    const [newName, setNewName] = useState('');
    const [loading, setLoading] = useState(true);
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                
                const response = await getUser(userId, token);
                setUserData({
                    name: response.user.name,
                    email: response.user.email,
                    role: response.user.role,
                });
            } catch (error) {
                console.log('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        try {
            await updateUser(userId, token, { name: newName });
            setUserData({
                ...userData,
                name: newName
            });
            setNewName('');
            alert('Ime uspešno ažurirano!');
        } catch (error) {
            console.log('Error updating user:', error);
            alert('Greška pri ažuriranju imena');
        }
    };

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleDelete = async () => {
        if (window.confirm('Da li ste sigurni da želite da obrišete nalog?')) {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                
                await deleteUser(userId, token);

                logout();

                navigate('/login');
            } catch (error) {
                console.log('Error deleting user:', error);
                alert('Greška pri brisanju naloga');
            }
        }
    };


    if (loading) {
        return <ProfileContainer>Loading...</ProfileContainer>;
    }

    return(
        <ProfileContainer>
        <h2>Profil</h2>
        <Form onSubmit={handleSubmit}>
            <Label>Ime: {userData.name}</Label>
            <Label>Email: {userData.email}</Label>
            <Label>Role: {userData.role}</Label>
            <Input
                type="text"
                value={newName}
                onChange={handleNameChange}
                placeholder="Unesite novo ime"
            />
            <Button type="submit">Ažuriraj ime</Button>
        </Form>
        <Button danger onClick={handleDelete}>Obriši nalog</Button>
    </ProfileContainer>
    )
}