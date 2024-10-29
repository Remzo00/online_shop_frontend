import { FooterContainer, FooterContent, FooterLink, SocialLinks } from './index.styled';

export default function Footer(){
    return(
        <FooterContainer>
        <FooterContent>
          <p>&copy; {new Date().getFullYear()} Online Shop. Sva prava zadržana.</p>
          <div>
            <FooterLink href="/terms">Uslovi korišćenja</FooterLink>
            <FooterLink href="/privacy">Politika privatnosti</FooterLink>
            <FooterLink href="/contact">Kontakt</FooterLink>
          </div>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </SocialLinks>
        </FooterContent>
      </FooterContainer>
    )
}