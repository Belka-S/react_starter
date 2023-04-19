import { Container } from './Section.styled';

export const Section = ({ mainTitle, title, children }) => (
  <Container>
    <h1>{mainTitle}</h1>
    <h2>{title}</h2>
    {children}
  </Container>
);
