import { ProfileContainer, Form, Label, Input, Button } from "./index.styled";
export default function Profile() {
    return(
        <ProfileContainer>
        <h2>Profil</h2>
        <Form>
            <Label>Ime:</Label>
            <Input type="text" required />
            <Button type="submit">Ažuriraj ime</Button>
        </Form>
        <Button danger>Obriši nalog</Button>
    </ProfileContainer>
    )
}