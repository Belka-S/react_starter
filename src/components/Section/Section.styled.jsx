import styled from 'styled-components';

export const SectionStyled = styled.section`
  position: relative;
  line-height: 1.3;
  h1,
  h2 {
    padding-bottom: 2px;
    font-family: 'Montserrat', sans-serif;
    &::first-letter {
      color: tomato;
    }
  }
  h1 {
    padding-top: 5px;
    text-align: center;
    font-size: 20px;
    &::first-letter {
      color: inherit;
    }
  }
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    h1,
    h2 {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    h1,
    h2 {
      margin-bottom: 20px;
    }
  }
`;
