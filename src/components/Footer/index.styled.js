import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

export const FooterLink = styled.a`
  color: #ddd;
  margin: 0 10px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: #ddd;
    margin: 0 10px;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      color: #ff6347;
    }
  }
`;
