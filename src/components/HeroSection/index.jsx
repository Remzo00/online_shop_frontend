import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroButton } from './index.styled';

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Dobrodošli u naš Online Shop!</HeroTitle>
        <HeroSubtitle>Pronađite najbolje proizvode za vas!</HeroSubtitle>
        <HeroButton href="/products">Pogledaj proizvode</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}